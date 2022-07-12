import React, { Component } from "react";
import { GET } from '../../../constants';
import { axiosActions, axiosAction } from '../../../actions';
import { DatePicker, Select } from "antd";

class Appointment extends Component {

  username = sessionStorage.getItem("userName");

  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      data: {
        id: null,
        department: null,
        patient: null,
        doctor: null,
        date: null,
        dateEnd: null,
        status: '',
        message: null,
        retired: false
      },
      patient: null,
      doctors: [],
      departments: []
    }
  }

  componentDidMount() {

    const patientsParam = {
      url: `/get-patient/${this.username}`,
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          patient: res.data
        });
      },
      data: {}
    }

    const doctorsParam = {
      url: "/doctors",
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          doctors: res.data
        });
      },
      data: {}
    }

    const departmentsParam = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          departments: res.data
        });
      },
      data: {}
    }

    axiosActions([patientsParam, doctorsParam, departmentsParam]);
  }

  render() {

    return (
      !this.state.loading &&
      <>
        {/* Content */}
        <div className="main-content account-content">
          <div className="content">
            <div className="container">
              <div id="appointment-box" className="account-box">
                <div className="appointment">
                  <h2 style={{textAlign: "center", margin: "20px"}}><strong>APPOINTMENT</strong></h2>
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="form-group col-sm-7">
                            <p><strong>Name:</strong> &ensp;{this.state.patient.firstName} {this.state.patient.lastName}</p>
                          </div>
                          <div className="form-group col-sm-5">
                            <p><strong>Gender:</strong> &ensp;{this.state.patient.gender}</p>
                          </div>
                        </div>
                        <div className="form-group">
                          <p><strong>Date Of Birth:</strong> &ensp;{this.state.patient.dateOfBirth}</p>
                        </div>
                        <div className="form-group">
                          <p><strong>Email:</strong> &ensp;{this.state.patient.email}</p>
                        </div>
                        <div className="form-group">
                          <p><strong>Phone number:</strong> &ensp;{this.state.patient.phoneNumber}</p>
                        </div>
                        <div className="form-group row">
                          <p className="col-2"><strong>Address:</strong></p>
                          <p className="col-10">&ensp;{this.state.patient.address.line}, {this.state.patient.address.city}, {this.state.patient.address.province}, {this.state.patient.address.country}</p>
                        </div>
                        <hr/>
                        <div className="form-group">
                          <label>Select Consultation Type <span className="text-red">*</span>
                          </label>
                          <Select 
                            bordered={true} 
                            size="large"
                            style={{ width: '100%' }} 
                            name='department' 
                            onChange={this.onChangeDepartment}>
                              {this.state.departments?.map(department => {
                                return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                              })}
                          </Select>
                        </div>
                        <div className="form-group">
                          <label>Choose the Doctor</label> <span className="text-red">*</span>
                          <Select 
                            bordered={true} 
                            size="large"
                            style={{ width: '100%' }} 
                            name='department' 
                            onChange={this.onChangeDepartment}>
                              {this.state.departments?.map(department => {
                                return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                              })}
                          </Select>
                        </div>
                        <div className="form-group">
                          <label>Message (optional)</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Choose the Date <span className="text-red">*</span>
                            </label> 
                          <div className="calendar">
                            <div className="input-wrapper">
                              <DatePicker 
                                style={{ width: '100%' }}
                              ></DatePicker>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="m-b-20">Choose your Convenient Time <span className="text-red">*</span></label>
                          <ul className="appoint-time">
                            <li>08:00am - 09:00am</li>
                            <li>09:00am - 10:00am</li>
                            <li>10:00am - 11:00am</li>
                            <li>11:00am - 12:00pm</li>
                            <li>01:00pm - 02:00pm</li>
                            <li>02:00pm - 03:00pm</li>
                            <li>03:00pm - 04:00pm</li>
                            <li>04:00pm - 05:00pm</li>
                          </ul>
                        </div>
                        <div className="form-group text-center m-t-3">
                          <button className="btn btn-primary account-btn" type="submit">Confirm Booking</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content /*/}
      </>
    );
  }
}

export default Appointment;
