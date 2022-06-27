import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { DatePicker } from 'antd';
import { GET } from '../../../../constants';
import { appointmentAction, axiosActions } from '../actions';
import moment from 'moment';

class EditAppointment extends Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      patients: [],
      doctors: [],
      departments: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const appointmentParam = {
      url: "/appointments/" + this.id,
      method: GET,
      callback: (res) => {
        console.log(this.state.data.date);

        this.setState({
          data: res.data,
          loading: false,
        });
      },
      data: {}
    }

    const patientsParam = {
      url: "/patients",
      method: GET,
      callback: (res) => {
        this.setState({
          patients: res.data,
          loading: false,
        });
      },
      data: {}
    }

    const doctorsParam = {
      url: "/doctors",
      method: GET,
      callback: (res) => {
        this.setState({
          doctors: res.data,
          loading: false,
        });
      },
      data: {}
    }

    const departmentsParam = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          departments: res.data,
          loading: false,
        });
      },
      data: {}
    }
    axiosActions([appointmentParam, patientsParam, doctorsParam, departmentsParam]);
  }

  onChange(e){
    console.log(e.target);
  }

  render() {

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Appointment</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Appointment ID</label>
                      <input className="form-control" type="text" value={this.state.data.id} readOnly />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Name</label>
                      <select className="form-control select">
                        {this.state.patients?.map(patient => {
                          return (<option key={patient.id} value={patient.id} className={this.state.data.patient?.id === patient.id ? "selected" : ""}>{patient.firstName + " " + patient.lastName}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="form-control select">
                        {this.state.departments?.map(department => {
                          return (<option key={department.id} value={department.id} className={this.state.data.department?.id === department.id ? "selected" : ""}>{department.name}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor</label>
                      <select className="form-control select">
                        {/* <option>Select</option>
                        <option>Cristina Groves</option>
                        <option>Marie Wells</option>
                        <option value="">Henry Daniels</option> */}
                        {this.state.doctors?.map(doctor => {
                          return (<option key={doctor.id} value={doctor.id} className={this.state.data.doctor?.id === doctor.id ? "selected" : ""}>{doctor.firstName + " " + doctor.lastName}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <DatePicker className="form-control" showTime={true} showSecond={false} format="YYYY-MM-DD HH:mm" clearIcon={true} allowClear={true} onChange={this.onChange}></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea cols={30} rows={4} className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label className="display-block">Appointment Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="product_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="product_inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Save</button>
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

export default EditAppointment;