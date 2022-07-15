import React, { Component } from 'react';
import { Doctor_03 } from "../../imagepath"
import OpenChat from "../../sidebar/openchatheader";
import { Link } from 'react-router-dom';
import { countries } from '../../../../address';
import { GET, UPDATE } from "../../../../constants";
import { Avatar, DatePicker, Modal, Select, Spin, Upload } from 'antd';
import { AddOutlined, Edit, EditOutlined, Person, PersonOutline, RemoveRedEyeOutlined } from '@material-ui/icons';

import { toMoment } from '../../../../utils';
import { isFormValid, isValid, notify, axiosAction, encodeBase64 } from '../../../../actions';
import { invalid } from 'moment';

class AdminProfile extends Component {

  username = localStorage.getItem("userName")

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      loading: false,
      crrValue: "",
      countries: countries,
      countrySelect: null,
      img: null,
      confirm: null,
      imgFade: false,
      data: {
        id: null,
        firstName: null,
        remainingLeave: null,
        status: null,
        lastName: null,
        employeeRole: null,
        gender: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null,
        image: null,
        imageByteArr: null,
        cId: null,
        doctor: {
          id: null
        },
        address: {
          postalCode: null,
          province: null,
          line: null,
          country: null,
          district: null
        },
        user: {
          id:null,
          username: null,
          password: null,
          role: null
        },
      },
    };
    this.fetchData = this.fetchData.bind(this);
    this.changeAction = this.changeAction.bind(this);
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
    this.state.edit = false;
    console.log(tmp);
    // if (!isFormValid(e)) return;
    // axiosAction("/employees/" + this.id, UPDATE, res => {
    //   notify('success', '', 'Success')
    //   this.props.history.push("/");
    // }, (err) => notify('error', "Error"), tmp);
  }

  fetchData = () => {
    axiosAction("/employees-user/" + this.username, GET, res => {
      console.log(res.data);
      this.setState({
        data: res.data,
        countrySelect: countries.find(ct => ct.name === res.data.address.country),
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

  changeAction = (role) => {
    if (role == "DOCTOR") {
      this.props.history.push("/admin/doctors/update/" + this.state.data.doctor.id);
    } else if (role != "DOCTOR" && role != "ADMIN") {
      this.props.history.push("/admin/employees/update/" + this.state.data.id);
    } else {
      this.setState({
        edit: true
      })
    }
  }




  render() {

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-7 col-4">
              <h4 className="page-title">{!this.state.edit ? "My Profile" : "Edit Profile"}</h4>
            </div>
            <div className="col-sm-5 col-8 text-right m-b-30">
              {/* <Link className="btn btn-primary btn-rounded" to={"/admin/patients/update/" + record.id}><i className="fas fa-plus" /> Edit</Link> */}
              <button className="btn btn-primary btn-rounded" hidden={this.state.edit} onClick={() => this.changeAction(this.state.data.employeeRole)}><i className="fas fa-plus" /> Edit Profile </button>
            </div>
          </div>
          <div className="card-box profile-header">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  {!this.state.edit ? <div className="profile-img-wrap">
                    <div className="profile-img">
                    <div style={{ width: "fit-content !important", height: "100%" }} id="avatar-scale">
                        {/* <label>Avatar</label> */}
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
                              {/* <EditOutlined /> */}
                              <div
                                style={{
                                  marginTop: 8,
                                }}
                              >
                                Image
                              </div>
                            </div>
                          )}
                        </Upload>
                      </div>
                    </div>
                  </div> : ""}
                  {!this.state.edit ?
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 hidden={this.state.edit} className="user-name m-t-0 m-b-0">{this.state.data?.firstName + " " + this.state.data?.lastName}</h3>
                            <div className="invalid-feedback">Please enter first name.</div>
                            <small className="text-muted">{this.state.data?.firstName + " " + this.state.data?.lastName}</small>
                            <div className="staff-id">Employee ID :{this.state.data?.id}</div>
                            <div className="staff-msg"><a href="/admin-template/chat" className="btn btn-primary">Send Message</a></div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <ul className="personal-info">
                            <li>
                              <span className="title">Phone:</span>
                              <span className="text"><a href="">{this.state.data?.phoneNumber}</a></span>
                            </li>
                            <li>
                              <span className="title">Email:</span>
                              <span className="text"><a href="">{this.state.data?.email}</a></span>
                            </li>
                            <li>
                              <span className="title">Birthday:</span>
                              <span className="text">{this.state.data?.dateOfBirth}</span>
                            </li>
                            <li>
                              <span className="title">Address:</span>
                              <span className="text">{this.state.data?.address?.line + " " + this.state.data?.address?.district + " " + this.state.data?.address?.province + " " + this.state.data?.address?.province}</span>
                            </li>
                            <li>
                              <span className="title">Gender:</span>
                              <span className="text">{this.state.data?.gender}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    : <div className="row">
                      <form onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name <span className="text-danger">*</span></label>
                              <input
                                value={this.state.data?.firstName}
                                className={isValid(this.state.data.firstName)}
                                name='firstName' type="text"
                                onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">First name cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">

                              <label>Last Name <span className="text-danger">*</span></label>
                              <input
                                value={this.state.data?.lastName}
                                className={isValid(this.state.data.lastName)}
                                name='lastName' type="text"
                                onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">Last name cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Username<span className="text-danger">*</span></label>
                              <input
                                readOnly
                                value={this.state.data?.user?.username}
                                className={isValid(this.state.data?.user?.username)}
                                name='username' type="text"
                                onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">Username cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">

                              <label>Password<span className="text-danger">*</span></label>
                              <input
                                value={this.state.data?.user?.password}
                                className={isValid(this.state.data?.user?.password)}
                                type="password" name='password'
                                onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">Password name cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input
                                value={this.state.data?.email}
                                className={isValid(this.state.data.email)}
                                name='email' type="email"
                                onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">Email cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Date of Birth<span className="text-danger">*</span></label>
                              <DatePicker name='dateOfBirth'
                                className={isValid(this.state.data.dateOfBirth)} aria-required
                                showTime={false}
                                format="YYYY-MM-DD"
                                value={toMoment(this.state.data.dateOfBirth)}
                                clearIcon={true}
                                allowClear={true}
                                onChange={this.onChangeDate}
                                onSelect={this.onChangeDate}></DatePicker>
                              <div className="invalid-feedback">Date of birth cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group gender-select">
                              <label className="gen-label">Gender</label>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input type="radio"
                                    name="gender" value={true}
                                    className="form-check-input"
                                    onChange={(e) => this.onChange(e)} defaultChecked={this.state.data?.gender} />Male
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input type="radio" name="gender" value={false} className="form-check-input" onChange={(e) => this.onChange(e)} defaultChecked={this.state.data?.gender} />Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>CID Number<span className="text-danger">*</span></label>
                              <input
                                value={this.state.data?.cId}
                                className={isValid(this.state.data.cId)}
                                name='cId' type="text" onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">CID cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label>Address<span className="text-danger">*</span></label>
                                  <input type="text" value={this.state.data?.address?.line} className={isValid(this.state.data.address.line)} name='line' onChange={(e) => this.onChange(e)} />
                                  <div className="invalid-feedback">Address cannot be empty</div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>Country<span className="text-danger">*</span></label>
                                  <Select
                                    showSearch={true}
                                    bordered={false}
                                    value={this.state.data.address.country}
                                    style={{ width: '100%' }}
                                    name='country'
                                    className={isValid(this.state.data.address.country)}
                                    onChange={this.onSelectCountry}>
                                    {this.state.countries?.map((country, index) => {
                                      return (<Select.Option key={index} value={country.name}>{country.name}</Select.Option>)
                                    })}
                                  </Select>
                                  <div className="invalid-feedback">Please select country cannot be empty</div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                {this.state.countrySelect?.states.length > 0 && <div className="form-group">
                                  <label>State/Province<span className="text-danger">*</span></label>
                                  <Select
                                    showSearch={true}
                                    bordered={false}
                                    value={this.state.data.address.province}
                                    style={{ width: '100%' }}
                                    name='state'
                                    className={isValid(this.state.data.address.province)}
                                    onChange={this.onSelectState}>
                                    {this.state.countrySelect?.states?.map((state, index) => {
                                      return (<Select.Option key={index} value={state.name}>{state.name}</Select.Option>)
                                    })}
                                  </Select>
                                </div>}
                                <div className="invalid-feedback">State cannot be empty</div>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>District<span className="text-danger">*</span></label>
                                  <input type="text"
                                    value={this.state.data?.address?.district}
                                    name='district' className={isValid(this.state.data.address.district)} onChange={(e) => this.onChange(e)} />
                                  <div className="invalid-feedback">District cannot be empty</div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="form-group">
                                  <label>Postal Code<span className="text-danger">*</span></label>
                                  <input type="text" value={this.state.data?.address?.postalCode} className={isValid(this.state.data.address.postalCode)} name='postalCode' onChange={(e) => this.onChange(e)} />
                                  <div className="invalid-feedback">Postal code cannot be empty</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone <span className="text-danger">*</span></label>

                              <input value={this.state.data?.phoneNumber} className={isValid(this.state.data.phoneNumber)} name='phoneNumber' type="text" onChange={(e) => this.onChange(e)} />
                              <div className="invalid-feedback">Phone number code cannot be empty</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Avatar</label>
                              <div className="profile-upload">
                                <div className="upload-img">
                                  <img alt="" src={this.state.data?.image} />
                                </div>
                                <div className="upload-input">
                                  <input
                                    ref="file"
                                    type="file"
                                    multiple="true"
                                    onChange={this.onSelectImage}
                                    className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="m-t-20 text-center ">
                          <button type='submit' className="btn btn-primary submit-btn m-r-20">Save</button>
                        </div>
                      </form>
                    </div>
                  }</div>
              </div>
            </div>
          </div>
          {this.state.data.employeeRole != "ADMIN" ? <div className="profile-tabs">
            <ul className="nav nav-tabs nav-tabs-bottom">
              <li className="nav-item"><a className="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
              {/* <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
              <li className="nav-item"><a className="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li> */}
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="about-cont">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box">
                      <h3 className="card-title">Education Informations</h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">International College of Medical Science (UG)</a>
                                <div>MBBS</div>
                                <span className="time">2001 - 2003</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">International College of Medical Science (PG)</a>
                                <div>MD - Obstetrics &amp; Gynaecology</div>
                                <span className="time">1997 - 2001</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-box m-b-0">
                      <h3 className="card-title">Experience</h3>
                      <div className="experience-box">
                        <ul className="experience-list">
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">Consultant Gynecologist</a>
                                <span className="time">Jan 2014 - Present (4 years 8 months)</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">Consultant Gynecologist</a>
                                <span className="time">Jan 2009 - Present (6 years 1 month)</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="experience-user">
                              <div className="before-circle" />
                            </div>
                            <div className="experience-content">
                              <div className="timeline-content">
                                <a href="#/" className="name">Consultant Gynecologist</a>
                                <span className="time">Jan 2004 - Present (5 years 2 months)</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="bottom-tab2">
              </div>
              <div className="tab-pane" id="bottom-tab3">
                Tab content 3
              </div>
            </div>
          </div>:""}
        </div>
        <OpenChat />
      </div>
    );

  }
};
export default AdminProfile