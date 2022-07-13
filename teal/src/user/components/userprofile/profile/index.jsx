import React, { Component } from 'react';
import { Doctor_03 } from "../../imagepath"
import { Link } from 'react-router-dom';
import { countries } from '../../../../address';
import { GET, UPDATE } from "../../../../constants";
import { isFormValid, isValid, notify, axiosAction, encodeBase64 } from '../../../../actions';
import { DatePicker, Select } from 'antd';
import { Icon_01 } from "../../imagepath"
import { toMoment } from '../../../../utils';

class Profile extends Component {
  id = sessionStorage.getItem("userId")
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      crrValue: "",
      countries: countries,
      countrySelect: null,
      img: null,
      confirm: null,
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
          city: null
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
    this.onSelectState = this.onSelectState.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  componentDidMount() {
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
    this.fetchData();
  }

  componentWillUnmount() {
  }


  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    console.log(tmp);
    if (!isFormValid(e)) return;
    axiosAction("/patients/" + this.id, UPDATE, res => {
      notify('success', '', 'Success')
      this.props.history.push("/");
    }, (err) => notify('error', "Error"), tmp);
  }

  fetchData = () => {
    axiosAction("/patients/" + this.id, GET, res => {
      console.log(res.data);
      this.setState({
        data: res.data,
        countrySelect:countries.find(ct=>ct.name === res.data.address.country),
        img: res.data.imageByteArr,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
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
      case 'city':
        tmp.address.city = value;
        break;
      case 'line':
        tmp.address.line = value;
        break;
      case 'username':
        tmp.user.username = value;
        break;
      // case 'password':
      //   tmp.user.password = value;
      //   break;
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

  onSelectCountry = (value) => {
    const tmp = { ...this.state.data };
    if (!this.state.countries[value].states.find(state => tmp.address.province == state.name)) {
      tmp.address.province = "";
    }
    tmp.address.country = this.state.countries[value].name
    console.log(tmp.address.country);
    this.setState({
      crrValue: null,
      countrySelect: this.state.countries[value],
      data: tmp
    });
  }

  onSelectState = (value) => {
    const tmp = { ...this.state.data };
    tmp.address.province = this.state.countrySelect.states[value].name
    this.setState({
      data: tmp
    })
  }

  inputBorder = (c1) => {
    return c1 ? '1px solid green' : '1px solid red';
  }

  inputClassname = (c1, c2) => {
    return c1 ? "form-control is-valid" : "form-control is-invalid";
  }

  inputClassnameSelect = (c1, c2) => {
    return c1 ? "is-valid" : "is-invalid";
  }

  onSelectImage = (e) => {
    const tmp = { ...this.state.data };
    var file = e.target.files[0];
    encodeBase64(file, (res) => {
      tmp.image = res;
      this.setState({
        data: tmp,
        img:URL.createObjectURL(file)
      })
    })
  }


  render() {
      //rounded-circle
      // rounded-thumbnail
    return (
      <>
        {/* Content */}
        <div className="main-content account-content">
          <div className="content">
            <div className="container">
              <div className="account-box" id="register-box">
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-sm-7 col-4">
                      <h4 className="page-title ml-3 ">My Profile</h4>
                      <div className="form-group">                                            
                        <img src={this.state?.img ? this.state.img : Icon_01} alt="" className="rounded float-left" width={150} height={150} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                          class="form-control-file"
                          ref="file"
                          type="file"
                          multiple="true"
                          onChange={this.onSelectImage}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                          // style={this.inputBorder(this.state.data.firstName)}
                          className={this.inputClassname(this.state.data?.firstName)}
                          defaultValue={this.state.data?.firstName}
                          name="firstName"
                          onChange={this.onChange}
                        />
                        <div className="invalid-feedback">Please enter first name.</div>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          defaultValue={this.state.data?.address?.line}
                          // style={this.inputBorder(this.state.data.address.line != null, this.state.data.address.line && this.state.statusChange.address.line)}
                          className={this.inputClassname(this.state.data?.address?.line)}
                          name="line"
                          onChange={this.onChange} />
                        <div className="invalid-feedback">Please enter address.</div>
                      </div>
                      <div className="row">
                        <div className="form-group col-sm-4">
                          <label>Country</label>
                          <Select
                            showSearch={true}
                            // defaultValue={this.state.data?.address?.country}
                            value={this.state.data?.address?.country}
                            bordered={false}
                            style={{ width: '100%' }}
                            name='country'
                            className="form-control"
                            onChange={this.onSelectCountry}>
                            {this.state.countries?.map((country, index) => {
                              return (<Select.Option key={index}>{country.name}</Select.Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Please enter country.</div>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>State</label>
                          <Select
                            showSearch={true}
                            disabled={this.state.data?.address?.province || this.state.countrySelect?.states.length > 0 ? false : true}
                            // defaultValue={this.state.data?.address?.province}
                            bordered={false}
                            value={this.state.data?.address?.province}
                            style={{ width: '100%' }}
                            name='state'
                            className="form-control"
                            onChange={this.onSelectState}>
                            {this.state.countrySelect?.states?.map((state, index) => {
                              return (<Select.Option key={index}>{state.name}</Select.Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Please enter province.</div>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>City</label>
                          <input
                            type="text"
                            defaultValue={this.state.data?.address?.city}
                            // style={this.inputBorder(this.state.data.address.city != null, this.state.data.address.city && this.state.statusChange.address.city)}
                            className={this.inputClassname(this.state.data.address.city)}
                            name="city"
                            onChange={this.onChange} />
                          <div className="invalid-feedback">Please enter city.</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-sm-4">
                          <label>User Name</label>
                          <input type="text"
                            defaultValue={this.state.data?.user?.username}
                            // style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                            className={this.inputClassname(this.state.data?.user?.username)}
                            name="username"
                            onChange={this.onChange}
                          />
                          <div className="invalid-feedback">Please enter user name.</div>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Password</label>
                          <input
                            type="password"
                            defaultValue={this.state.data?.user?.password}
                            // style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                            className={this.inputClassname(this.state.data?.user?.password)}
                            name="password"
                            onChange={this.onChange}
                          />
                          <div className="invalid-feedback">Please input your password.</div>
                        </div>
                        <div className="form-group col-sm-4">
                          <label>Password Confirm</label>
                          <input
                            type="password"
                            defaultValue={this.state.data?.user?.password}
                            // style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                            className={this.inputClassname(this.state.data?.user?.password != null || this.state.data?.confirm != null)}
                            name="confirm"
                            onChange={this.onChange}
                          />
                          <div className="invalid-feedback">Please confirm your password.</div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                          defaultValue={this.state.data?.lastName}
                          // style={this.inputBorder(this.state.data.lastName != null, this.state.data.lastName && this.state.statusChange.lastName)}
                          className={this.inputClassname(this.state.data?.lastName)}
                          name="lastName"
                          onChange={this.onChange} />
                        <div className="invalid-feedback">Please enter last name.</div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                          defaultValue={this.state.data?.email}
                          // style={this.inputBorder(this.state.data.email != null, this.state.data.email && this.state.statusChange.email)}
                          className={this.inputClassname(this.state.data?.email)}
                          name="email"
                          onChange={this.onChange}
                        />
                        <div className="invalid-feedback">Please enter valid email.</div>
                      </div>
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>Mobile Number</label>
                          <input
                            type="number"
                            defaultValue={this.state.data?.phoneNumber}
                            // style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            className={this.inputClassname(this.state.data?.phoneNumber)}
                            name="phoneNumber"
                            onChange={this.onChange} />
                          <div className="invalid-feedback">Please enter phone number.</div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Date of Birth <span className="text-danger">*</span></label>
                          <DatePicker name='dateOfBirth'
                            className={isValid(this.state.data?.dateOfBirth)} aria-required
                            showTime={false}
                            format="YYYY-MM-DD"
                            clearIcon={true}
                            // defaultOpen
                            value={toMoment(this.state.data?.dateOfBirth)}
                            // allowClear={true}
                            onChange={(e) => this.onChangeDate(e)}
                            onSelect={(e) => this.onChangeDate(e)}
                            />
                          {/* </DatePicker> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>Identity Card</label>
                          <input
                            type="text"
                            defaultValue={this.state?.data?.cId}
                            // style={this.inputBorder(this.state.data.cid != null, this.state.data.cid && this.state.statusChange.cid)}
                            className={this.inputClassname(this.state?.data?.cId)}
                            name="cId"
                            onChange={this.onChange} />
                          <div className="invalid-feedback">Please enter identity card.</div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            defaultValue={this.state.data?.address?.postalCode}
                            // style={this.inputBorder(this.state.data.address.postalCode != null, this.state.data.address.postalCode && this.state.statusChange.address.postalCode)}
                            className={this.inputClassname(this.state.data?.address?.postalCode)}
                            name="postalCode"
                            onChange={this.onChange} />
                          <div className="invalid-feedback">Please enter postal code.</div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* <div className="form-group form-check  text-center">
                    <label>
                      <input type="checkbox" name="checkbox" onChange={this.onChange} /> I have read and agree the Terms &amp; Conditions</label>
                  </div> */}
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type="submit" >Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
        {/* Content /*/}
      </>
    );

  }
};
export default Profile