import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { User_img } from "../../imagepath"
import { axiosAction, encodeBase64, isFormValid, isValid, notify, validReg } from '../../../../actions';
import { GET, UPDATE } from "../../../../constants";
import { countries } from '../../../../address';
import { DatePicker, Select } from 'antd';
import { toMoment } from '../../../../utils';
const {Option} = Select;

class EditPatient extends Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      crrValue: "",
      countries: countries,
      countrySelect: null,
      data: {
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null,
        image: null,
        cId: null,
        address: {
          postalCode: null,
          province: null,
          line: null,
          country: null,
          district: null
        },
        user: {
          username: null,
          password: null,
          role: "patient"
        },
      },
    };
    this.fetchData = this.fetchData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectCountry = this.onSelectCountry.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }


  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
  }



  fetchData = () => {
    axiosAction("/patients/" + this.id, GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
  }


  onSelectCountry = (value) => {
    const tmp = { ...this.state.data };
    tmp.address.country = value;
    if (tmp.address.province && !countries.find(ctr => ctr.name == value)?.states.find(st => st.name == tmp.address.province)) {
      tmp.address.province = '';
    }
    this.setState({
      crrValue: null,
      countrySelect: countries.find(ctr => ctr.name == value),
      data: tmp
    });
  }

  onSelectState = (value) => {
    const tmp = { ...this.state.data };
    tmp.address.province = value;
    this.setState({ data: tmp });
  }

  onSelectImage = (e) => {
    const tmp = { ...this.state.data };
    var file = e.target.files[0];
    encodeBase64(file, (res) => {
      tmp.image = res;
      tmp.imageByteArray = res;
      this.setState({
        data: tmp
      })
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    console.log(tmp);
    if (!isFormValid(e)) return;
    axiosAction("/patients/" + this.id, UPDATE, res => {
      notify('success', '', 'Success')
      this.props.history.push("/admin/patients");
    }, (err) => notify('error', "Error"), tmp);
  }

  onChange = (e) => {
    const tmp = { ...this.state.data };
    const value = e.target.value;
    switch (e.target.name) {
      case 'firstName':
        tmp.firstName = value;
        break;
      case 'lastName':
        tmp.lastName = value;
        break;
      case 'gender':
        tmp.gender = value;
        break;
      case 'phoneNumber':
        tmp.phoneNumber = value;
        break;
      case 'email':
        tmp.email = value;
        break;
      case 'postalCode':
        tmp.address.postalCode = value;
        break;
      case 'cId':
        tmp.cId = value;
        break;
      case 'district':
        tmp.address.district = value;
        break;
      case 'line':
        tmp.address.line = value;
        break;
      case 'username':
        tmp.user.username = value;
        break;
      case 'password':
        tmp.user.password = value;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeDate(e) {
    const tmp = { ...this.state.data };
    tmp.dateOfBirth = e;
    this.setState({
      data: tmp
    });
  }




  render() {

    return (!this.state.loading && <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h4 className="page-title">Edit Patient</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>First Name <span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data?.firstName)} name='firstName' type="text" onChange={(e) => this.onChange(e)} value={this.state.data?.firstName} />
                    <div className="invalid-feedback">First name cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input className={isValid(this.state.data?.lastName)} name='lastName' type="text" onChange={(e) => this.onChange(e)} value={this.state.data?.lastName} />
                    <div className="invalid-feedback">Last name cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="form-group">
                    <label>Username<span className="text-danger">*</span></label>
                    <input disabled={true} className={isValid(this.state.data?.user?.username)} name='username' value={this.state.data?.user?.username} type="text" onChange={(e) => this.onChange(e)} />
                    <div className="invalid-feedback">Username cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password<span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data?.user?.password)} type="password" value={this.state.data?.user?.password} name='password' onChange={(e) => this.onChange(e)} />
                    <div className="invalid-feedback">Password name cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email <span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data?.email && validReg(this.state.data.email, "email"))} name='email' type="email" onChange={(e) => this.onChange(e)} value={this.state.data?.email} />
                    <div className="invalid-feedback">Email is invalid or left empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Date of Birth <span className="text-danger">*</span></label>
                    <DatePicker name='dateOfBirth'
                      className={isValid(this.state.data?.dateOfBirth)} aria-required
                      showTime={false}
                      format="YYYY-MM-DD"
                      clearIcon={true}
                      value={toMoment(this.state.data?.dateOfBirth)}
                      allowClear={true}
                      onChange={this.onChangeDate}
                      onSelect={this.onChangeDate}></DatePicker>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Gender<span className="text-danger">*</span></label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" name="gender" value={"Male"} checked={this.state.data?.gender} className="form-check-input" onChange={(e) => this.onChange(e)} />Male
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" name="gender" value={"Femmale"} checked={!this.state.data?.gender} className="form-check-input" onChange={(e) => this.onChange(e)} />Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>CID Number <span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data.cId)} name='cId' type="text" onChange={(e) => this.onChange(e)} value={this.state.data?.cId} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Address <span className="text-danger">*</span></label>
                        <input type="text" className={isValid(this.state.data.address.line)} name='line' onChange={(e) => this.onChange(e)} value={this.state.data?.address?.line} />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Country<span className="text-danger">*</span></label>
                        <Select
                          showSearch={true}
                          value={this.state.data.address.country}
                          bordered={false}
                          style={{ width: '100%' }}
                          name='country'
                          className={isValid(this.state.data.address.country)}
                          onChange={this.onSelectCountry}>
                          {this.state.countries?.map((country, index) => {
                            return (<Select.Option key={index} value={country.name}>{country.name}</Select.Option>)
                          })}
                        </Select>
                        <div className="invalid-feedback">Country cannot be empty</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      {/* {this.state.countrySelect?.states.length > 0 && */}
                      {this.state.countries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states.length > 0 && <div className="form-group">
                        <label>State/Province <span className="text-danger">*</span></label>
                        <Select
                          showSearch={true}
                          bordered={false}
                          value={this.state.data?.address?.province}
                          style={{ width: '100%' }}
                          name='state'
                          className={isValid(this.state.data.address.province)}
                          onChange={this.onSelectState}>
                          {this.state.countries?.find(ctr => ctr.name === this.state.data.address?.country)?.states?.map((st, idx) => {
                              return (<Option key={idx} value={st.name}>{st.name}</Option>)
                            })}
                        </Select>
                        <div className="invalid-feedback">State cannot be empty</div>
                      </div>}
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>District <span className="text-danger">*</span></label>
                        <input type="text" name='district' className={isValid(this.state.data.address.district)} onChange={(e) => this.onChange(e)} value={this.state.data?.address?.district} />
                        <div className="invalid-feedback">Please input district.</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Postal Code <span className="text-danger">*</span></label>
                        <input type="text" className={isValid(this.state.data.address.postalCode)} name='postalCode' onChange={(e) => this.onChange(e)} value={this.state.data?.address?.postalCode} />
                        <div className="invalid-feedback">Please input postal code.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone<span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data.phoneNumber && validReg(this.state.data.phoneNumber, "phone"))} name='phoneNumber' type="tel" onChange={(e) => this.onChange(e)} value={this.state.data?.phoneNumber} />
                    <div className="invalid-feedback">Phone number is invalid or left empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Avatar</label>
                    <div className="profile-upload">
                      <div className="upload-img">
                        <img alt="" src={this.state.data.imageByteArray} />
                      </div>
                      <div className="upload-input">
                        <input
                          ref="file"
                          type="file"
                          multiple={false}
                          onChange={this.onSelectImage}
                          className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-t-20 text-center">
                <button type='submit' className="btn btn-primary submit-btn">Save Patient</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OpenChat />
    </div>
    );
  }
};

export default EditPatient;