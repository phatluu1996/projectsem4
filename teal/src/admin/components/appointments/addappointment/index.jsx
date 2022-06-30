import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { DatePicker, Select } from 'antd';
import { ADD, GET, UPDATE } from '../../../../constants';
import { axiosAction, axiosActions, isFormValid, notify } from '../../../../actions';
import moment from 'moment';
import { toMoment } from '../../../../utils';
import $ from 'jquery';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const { Option } = Select;

class AddAppointment extends Component {
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
        status: true,
        message: null,
        retired: false
      },
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
    this.showNotify = this.showNotify.bind(this);
  }


  componentDidMount() {
    const patientsParam = {
      url: "/patients",
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
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

  onSubmit(e) {
    e.preventDefault();
    if(!isFormValid(e)) return;
    axiosAction("/appointments", ADD, (res) => {
      notify('success', '','Success')
      this.props.history.push("/admin/appointments");
    }, (err) => notify('error', '', 'Error'), this.state.data);
  }

  onChangePatient(value) {
    const tmp = { ...this.state.data };
    tmp.patient = this.state.patients.filter(elt => elt.id === value)[0];
    this.setState({ data: tmp });
  }

  onChangeDepartment(value) {
    const tmp = { ...this.state.data };
    tmp.department = this.state.departments.filter(elt => elt.id === value)[0];
    if(tmp.doctor && tmp.doctor.department && tmp.doctor.department.id != tmp.department.id){
      tmp.doctor = null;      
    }
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
    }
    this.setState({ data: tmp });
  }

  showNotify() {
    console.log(this.props);
  }

  render() {
    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Add Appointment</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Name</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='patient' className={this.state.data.patient != null ? "form-control is-valid" : "form-control is-invalid"} onChange={this.onChangePatient}>
                        {this.state.patients?.map(patient => {
                          return (<Option key={patient.id} value={patient.id}>{patient.firstName + " " + patient.lastName}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Patient cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='department' className={this.state.data.department != null ? "form-control is-valid" : "form-control is-invalid"} onChange={this.onChangeDepartment}>
                        {this.state.departments?.map(department => {
                          return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Department cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='doctor' className={this.state.data.doctor != null ? "form-control is-valid" : "form-control is-invalid"} onChange={this.onChangeDoctor} value={this.state.data.doctor ? this.state.data.doctor.id : "" }>
                        {this.state.doctors?.filter(doc => doc.department?.id == this.state.data.department?.id) ?.map(doctor => {
                          return (<Option key={doctor.id} value={doctor.id}>{doctor.firstName + " " + doctor.lastName}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Doctor cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <DatePicker name='date' className={this.state.data.date != null ? "form-control is-valid" : "form-control is-invalid"}
                        showTime={true} minuteStep={15} showSecond={false} format="YYYY-MM-DD HH:mm" clearIcon={true}
                        allowClear={true} onChange={this.onChangeDate} onSelect={this.onChangeDate} inputReadOnly={true}></DatePicker>
                      <div className="invalid-feedback">Date cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input name='email' className={this.state.data.patient?.email != null ? "form-control is-valid" : "form-control is-invalid"} type="email" value={this.state.data.patient?.email} onChange={this.onChange} />
                      <div className="invalid-feedback">Patient email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input name='phone' className={this.state.data.patient?.phoneNumber != null ? "form-control is-valid" : "form-control is-invalid"} type="tel" value={this.state.data.patient?.phoneNumber} onChange={this.onChange} />
                      <div className="invalid-feedback">Patient phone cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name='message' cols={30} rows={4} className="form-control" onChange={this.onChange} />
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn" type='submit'>Create Appointment</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/appointments")}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div>
    );
  }
};

export default AddAppointment;