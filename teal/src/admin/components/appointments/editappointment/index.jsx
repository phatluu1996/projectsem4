import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { DatePicker } from 'antd';
import { GET } from '../../../../constants';
import { appointmentAction, axiosActions } from '../../../../actions';
import moment from 'moment';
import { toMoment } from '../../../../utils';

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
    this.onSubmit = this.onSubmit.bind(this);
    this.toMoment = this.toMoment.bind(this);
  }

  componentDidMount() {
    const appointmentParam = {
      url: "/appointments/" + this.id,
      method: GET,
      callback: (res) => {
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
          patients: res.data
        });
      },
      data: {}
    }

    const doctorsParam = {
      url: "/doctors",
      method: GET,
      callback: (res) => {
        this.setState({
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
          departments: res.data
        });
      },
      data: {}
    }
    axiosActions([appointmentParam, patientsParam, doctorsParam, departmentsParam]);
  }

  toMoment(date) {
    return toMoment(date);
  }

  onSubmit(e) {

  }

  onChange(e){
    e.preventDefault();
    const tmp = {...this.state.data};
    switch(e.target.name){
      case 'patient':
        tmp.data.patient = this.state.patients.filter(pat => pat.id === e.target.value)[0];
        this.setState({data : tmp});
        break;
    }    
  }

  render() {


    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Appointment</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Appointment ID</label>
                      <input name='id' className="form-control" type="text" defaultValue={this.state.data.id} readOnly />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Name</label>
                      <select name='patient' className="form-control select" defaultValue={this.state.data.patient?.id} onChange={this.onChange}>
                        {this.state.patients?.map(patient => {
                          return (<option key={patient.id} value={patient.id}>{patient.firstName + " " + patient.lastName}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select name='department' className="form-control select" defaultValue={this.state.data.department?.id}>
                        {this.state.departments?.map(department => {
                          return (<option key={department.id} value={department.id}>{department.name}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor</label>
                      <select name='doctor' className="form-control select" defaultValue={this.state.data.doctor?.id}>
                        {this.state.doctors?.map(doctor => {
                          return (<option key={doctor.id} value={doctor.id}>{doctor.firstName + " " + doctor.lastName}</option>)
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <DatePicker name='date' className="form-control"
                        showTime={true} minuteStep={15} showSecond={false} format="YYYY-MM-DD HH:mm" clearIcon={true}
                        allowClear={true} defaultValue={this.toMoment(this.state.data.date)}></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input name='email' className="form-control" type="email" value={this.state.data.patient.email} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input name='phone' className="form-control" type="tel" value={this.state.data.patient.phoneNumber} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name='message' cols={30} rows={4} className="form-control" defaultValue={this.state.data.message} />
                </div>
                <div className="form-group">
                  <label className="display-block">Appointment Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue={true} defaultChecked={this.state.data.status} />
                    <label className="form-check-label" htmlFor="product_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue={false} defaultChecked={!this.state.data.status}/>
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