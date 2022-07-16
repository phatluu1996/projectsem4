import React, { Component } from 'react';
import { Doctor_03 } from "../../imagepath"
import OpenChat from "../../sidebar/openchatheader";
import { Link } from 'react-router-dom';
import { countries } from '../../../../address';
import { ADMIN, DOCTOR, GET, RECEPTION, UPDATE } from "../../../../constants";
import { Avatar, DatePicker, Modal, Select, Spin, Upload } from 'antd';
import { AddOutlined, Edit, EditOutlined, Person, PersonOutline, RemoveRedEyeOutlined } from '@material-ui/icons';

import { toMoment } from '../../../../utils';
import { isFormValid, isValid, notify, axiosAction, encodeBase64 } from '../../../../actions';
import { invalid } from 'moment';
import { User_img } from "../../imagepath"
import moment from 'moment';

class AdminProfile extends Component {

  username = localStorage.getItem("userName")

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      loading: false,
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
          id: null,
          educationDetails: [{
            "key": 0,
            "instiution": "",
            "subject": "",
            "start": "",
            "end": "",
            "degree": "",
            "grade": "",
            "retired": false,
          }],
          experienceDetails: [{
            "key": 0,
            "officeName": "",
            "country": "",
            "start": "",
            "end": "",
            "jobPosition": "",
            "retired": false,
          }]
        },
        address: {
          postalCode: null,
          province: null,
          line: null,
          country: null,
          district: null
        },
        user: {
          id: null,
          username: null,
          password: null,
          role: null
        },
      },
    };
    this.fetchData = this.fetchData.bind(this);
    this.changeAction = this.changeAction.bind(this);
  }

  componentDidMount() {
    // if ($('.floating').length > 0) {
    //   $('.floating').on('focus blur', function (e) {
    //     $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    //   }).trigger('blur');
    // }
    this.fetchData();
  }

  fetchData = () => {
    axiosAction("/employees-user/" + this.username, GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
  }

  changeAction = () => {
    let role = this.state.data.user.role;
    if (role == "DOCTOR") {
      this.props.history.push("/doctor/profile/update/" + this.state.data.doctor.id);
    } else if (role == "RECEPTIONIST") {
      this.props.history.push("/reception/profile/update/" + this.state.data.id);
    } else if (role == "ADMIN") {
      this.props.history.push("/admin/profile/update/" + this.state.data.id);
    }
  }




  render() {
    const { data } = this.state

    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-7">
              <h4 className="page-title">My Profile</h4>
            </div>
            <div className="col-sm-5 col-8 text-right m-b-30">
              <button className="btn btn-primary btn-rounded" onClick={this.changeAction}><i className="fas fa-plus" /> Edit Profile </button>
            </div>
          </div>
          <div className="card-box">
            <h3 className="card-title">Basic Informations</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="profile-img-wrap">
                  <img className="inline-block" src={data.imageByteArr ? data.imageByteArr : User_img}
                    alt="user"
                    style={
                      {
                        border: "2px solid #E7E9EB",
                        borderRadius: "4px"
                      }} />
                </div>
                <div className="profile-basic">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus focused">
                        <label className="focus-label">First Name</label>
                        <input type="text" className="form-control floating" value={data.firstName} readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus focused">
                        <label className="focus-label">Last Name</label>
                        <input type="text" className="form-control floating" value={data.lastName} readOnly />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus focused">
                        <label className="focus-label">Birth Date</label>
                        <div className="cal-icon">
                          <input className="form-control floating" type="text" value={moment(data.dateOfBirth, false).format("DD-MM-YYYY")} readOnly />

                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus focused">
                        <label className="focus-label">Gender</label>
                        <input type="text" className="form-control floating" value={data.gender} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-box">
            <h3 className="card-title">Contact Informations</h3>
            <div className="row">
            <div className="col-md-4">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Identity Number</label>
                  <input type="text" className="form-control floating" value={data.cId} readOnly />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Email</label>
                  <input type="text" className="form-control floating" value={data.email} readOnly />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Phone Number</label>
                  <input type="text" className="form-control floating" value={data.phoneNumber} readOnly />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Address</label>
                  <input type="text" className="form-control floating" value={data.address?.line} readOnly />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus focused">
                  <label className="focus-label">State</label>
                  <input type="text" className="form-control floating" value={data.address?.province} readOnly />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Country</label>
                  <input type="text" className="form-control floating" value={data.address?.country} readOnly />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus focused">
                  <label className="focus-label">Postal Code</label>
                  <input type="text" className="form-control floating" value={data.address?.postalCode} readOnly />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-focus focused">
                  <label className="focus-label">District</label>
                  <input type="text" className="form-control floating" defaultValue={data.address?.district} readOnly />
                </div>
              </div>
            </div>
          </div>
          {data.doctor != null && data.doctor.educationDetails.filter(e => !e.retired).length > 0 && <div className="card-box">
            <h3 className="card-title">Education Informations</h3>
            <div className="experience-box">
              <ul className="experience-list">
                {data.doctor.educationDetails.filter(e => !e.retired).map(e => {
                  return (<li>
                    <div className="experience-user">
                      <div className="before-circle" />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a className="name">{e.instiution}</a>
                        <div>{e.degree}</div>
                        <span className="time">{moment(e.start).format("DD-MM-YYYY")}-{moment(e.end).format("DD-MM-YYYY")}</span>
                      </div>
                    </div>
                  </li>)
                })}                
              </ul>
            </div>
          </div>}
          {data.doctor != null && data.doctor.experienceDetails.filter(e => !e.retired).length > 0 && <div className="card-box m-b-0">
            <h3 className="card-title">Experience Informations</h3>
            <div className="experience-box">
              <ul className="experience-list">
                {data.doctor.experienceDetails.filter(e => !e.retired).map(e => {
                  return (<li>
                    <div className="experience-user">
                      <div className="before-circle" />
                    </div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <a className="name">{e.officeName}</a>
                        <div>{e.officeName}({e.jobPosition})</div>
                        <span className="time">{moment(e.start).format("DD-MM-YYYY")}-{moment(e.end).format("DD-MM-YYYY")}</span>
                      </div>
                    </div>
                  </li>)
                })}
              </ul>
            </div>
          </div>}
        </div>
      </div >
    );

  }
};
export default AdminProfile