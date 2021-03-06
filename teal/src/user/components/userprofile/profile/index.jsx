import React, { Component } from 'react';
import { Doctor_03 } from "../../imagepath"
import { Link } from 'react-router-dom';
import { countries } from '../../../../address';
import { GET, UPDATE } from "../../../../constants";
import { isFormValid, isValid, notify, axiosAction, encodeBase64 } from '../../../../actions';
import { Avatar, DatePicker, Modal, Select, Spin, Upload } from 'antd';
import { Icon_01 } from "../../imagepath"
import { toMoment } from '../../../../utils';
import { AddOutlined, Edit, EditOutlined, Person, PersonOutline, RemoveRedEyeOutlined } from '@material-ui/icons';

class Profile extends Component {
  username = localStorage.getItem("userName")

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      crrValue: "",
      countries: countries,
      countrySelect: null,
      img: null,
      confirm: null,
      imgFade: false,
      data: {
        id: null,
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null,
        image: null,
        imageByteArr: null,
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
    if (!isFormValid(e)) return;
    axiosAction(`/patients/${this.state.data.id}`, UPDATE, res => {
      // notify('success', '', 'Success')
      Modal.success({
        title: `Update Profile Successfully `,
        content: (
          <>
            Your account profile has been updated !
          </>
        ),
        onOk: () => {
          this.props.history.replace("/");
        }
      });
    }, (err) => notify('error', "Error"), tmp);
  }

  fetchData = () => {
    axiosAction(`/patients-user/${this.username}`, GET, res => {
      this.setState({
        data: res.data,
        countrySelect: countries.find(ct => ct.name === res.data.address.country),
        img: res.data.imageByteArr,
        loading: false,
        confirm: res.data.user.password
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

      case 'confirm':
        this.setState({ confirm: value });
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

  onSelectImage = (info) => {
    encodeBase64(info.file.originFileObj, (res) => {
      const tmp = { ...this.state.data };
      tmp.image = res;
      tmp.imageByteArr = res
      this.setState({
        data: tmp
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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2 pb-3">
                      <div style={{ width: "fit-content !important", height: "100%" }} id="avatar-scale">
                        <label>Avatar</label>
                        <Upload name="avatar"
                          multiple={false}
                          listType="picture-card"
                          className="avatar-uploader m-4"
                          onChange={this.onSelectImage}
                          showUploadList={false}
                        >
                          {this.state.data.imageByteArr ? (
                            <>
                              {!this.state.loading && <img className='patient-avatar'
                                style={
                                  {
                                    border: "2px solid #E7E9EB",
                                    borderRadius: "4px",
                                    width: document.getElementById("avatar-scale").offsetWidth,
                                    height: document.getElementById("avatar-scale").offsetHeight * 0.8,
                                    opacity: this.state.imgFade ? 0.6 : 1
                                  }}
                                src={this.state.data.imageByteArr}
                                onMouseEnter={() => this.setState({ imgFade: true })}
                                onMouseLeave={() => this.setState({ imgFade: false })}
                              />}
                              {this.state.imgFade && <EditOutlined style={{
                                top: "45%",
                                left: "45%",
                                position: "absolute",
                                transform: "translate(-45 %, -45 %)"
                              }} />}
                            </>
                          ) : (
                            <div>
                              <EditOutlined />
                              <div
                                style={{
                                  marginTop: 8,
                                }}
                              >
                                Upload
                              </div>
                            </div>
                          )}
                        </Upload>
                      </div>
                    </div>
                    <div className="col-sm-10">
                      <div className="row">
                        <div className="col-sm-4">
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
                        </div>
                        <div className="col-sm-4">
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
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
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
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
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
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                              type="tel"
                              defaultValue={this.state.data?.phoneNumber}
                              // style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                              className={this.inputClassname(this.state.data?.phoneNumber)}
                              name="phoneNumber"
                              onChange={this.onChange} />
                            <div className="invalid-feedback">Please enter phone number.</div>
                          </div>
                        </div>
                        <div className="col-sm-4">
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
                        </div>
                      </div>
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
                        value={this.state.confirm}
                        // style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                        className={this.inputClassname(this.state.data?.confirm || (this.state.data?.user?.password && this.state.data?.user?.password == this.state.confirm))}
                        name="confirm"
                        onChange={this.onChange}
                      />
                      {this.state.confirm ? (this.state.data?.user?.password && this.state.data?.user?.password == this.state.confirm ? <></> : <div className="invalid-feedback">Password and confirm password are not the same.</div>) : <div className="invalid-feedback">Please input confirm password.</div>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
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
                        <div className="form-group col-sm-3">
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
                        <div className="form-group col-sm-3">
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
                        <div className="form-group col-sm-3">
                          <label>District</label>
                          <input
                            type="text"
                            defaultValue={this.state.data?.address?.district}
                            // style={this.inputBorder(this.state.data.address.district != null, this.state.data.address.district && this.state.statusChange.address.district)}
                            className={this.inputClassname(this.state.data.address.district)}
                            name="district"
                            onChange={this.onChange} />
                          <div className="invalid-feedback">Please enter city.</div>
                        </div>
                        <div className="form-group col-sm-3">
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
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type="submit" >Save</button>
                    <Link className="btn btn-danger account-btn" to="/">Back</Link>
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