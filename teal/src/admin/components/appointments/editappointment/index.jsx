import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { DatePicker, Select } from 'antd';
import { GET, UPDATE } from '../../../../constants';
import { appointmentAction, axiosAction, axiosActions } from '../../../../actions';
import moment from 'moment';
import { toMoment } from '../../../../utils';
import $ from 'jquery';
const { Option } = Select;

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

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeDoctor = this.onChangeDoctor.bind(this);
    this.onChangePatient = this.onChangePatient.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onSubmit(e) {
    e.preventDefault();
    axiosAction("/appointments/"+this.id, UPDATE, (res) => {
      console.log(res);
    }, this.state.data);
  }

  onChangePatient(value) {
    const tmp = { ...this.state.data };
    tmp.patient = this.state.patients.filter(elt => elt.id === value)[0];
    this.setState({ data: tmp });
  }

  onChangeDepartment(value) {
    const tmp = { ...this.state.data };
    tmp.department = this.state.departments.filter(elt => elt.id === value)[0];
    this.setState({ data: tmp });
  }

  onChangeDoctor(value) {
    const tmp = { ...this.state.data };
    tmp.doctor = this.state.doctors.filter(elt => elt.id === value)[0];
    this.setState({ data: tmp });
  }
  
  onChangeDate(value) {
    const tmp = { ...this.state.data };
    tmp.date = value;
    this.setState({ data: tmp });
  }

  onChange(e) {
    const tmp = { ...this.state.data };
    const value = e.target.value;
    switch (e.target.name) {
      case 'email':
        tmp.patient.email = value;
        break;

      case 'phone':
        tmp.patient.phoneNumber = value;
        break;

      case 'message':
        tmp.message = value;
        break;

      case 'status':
        tmp.status = value;
        break;
    }
    this.setState({ data: tmp });
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
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='patient' className="form-control" value={this.state.data.patient?.id} onSelect={this.onChangePatient}>
                        {this.state.patients?.map(patient => {
                          return (<Option key={patient.id} value={patient.id}>{patient.firstName + " " + patient.lastName}</Option>)
                        })}
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='department' className="form-control" value={this.state.data.department?.id} onSelect={this.onChangeDepartment}>
                        {this.state.departments?.map(department => {
                          return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                        })}
                      </Select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='doctor' className="form-control" value={this.state.data.doctor?.id} onSelect={this.onChangeDoctor}>
                        {this.state.doctors?.map(doctor => {
                          return (<Option key={doctor.id} value={doctor.id}>{doctor.firstName + " " + doctor.lastName}</Option>)
                        })}
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <DatePicker name='date' className="form-control"
                        showTime={true} minuteStep={15} showSecond={false} format="YYYY-MM-DD HH:mm" clearIcon={true}
                        allowClear={true} value={toMoment(this.state.data.date)} onChange={this.onChangeDate} onSelect={this.onChangeDate}></DatePicker>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input name='email' className="form-control" type="email" value={this.state.data.patient?.email} onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input name='phone' className="form-control" type="tel" value={this.state.data.patient?.phoneNumber} onChange={this.onChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name='message' cols={30} rows={4} className="form-control" value={this.state.data.message} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label className="display-block">Appointment Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue={true} defaultChecked={this.state.data?.status} onChange={this.onChange} />
                    <label className="form-check-label" htmlFor="product_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue={false} defaultChecked={!this.state.data?.status} onChange={this.onChange} />
                    <label className="form-check-label" htmlFor="product_inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn" type='submit'>Save</button>
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