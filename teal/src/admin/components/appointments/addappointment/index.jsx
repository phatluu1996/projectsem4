import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { DatePicker, Modal, Radio, Select, TimePicker } from 'antd';
import { ADD, appointment_status, appointment_timeranges, GET, UPDATE } from '../../../../constants';
import { axiosAction, axiosActions, isFormValid, isValid, notify, range } from '../../../../actions';
import moment from 'moment';
import { toMoment } from '../../../../utils';
import $ from 'jquery';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const { Option } = Select;
const { RangePicker } = DatePicker;

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
        dateEnd: null,
        status: 'pending',
        message: null,
        retired: false
      },
      datetime: {
        day: null,
        date: null,
        time: null
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
    this.disabledTime = this.disabledTime.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
  }


  disabledTime(option) {
    if (!this.state.data.doctor?.doctorSchedules || !this.state.datetime.date) {
      return true;
    }
    const normalize = (val) => {
      const momentVal = moment(val);
      return moment().set("hour", momentVal.hour()).set("minute", momentVal.minute()).set("second", 0);
    }

    const result = !this.state.data.doctor.doctorSchedules.some(sche => {
      const scheStart = normalize(sche.start);
      const scheEnd = normalize(sche.end);
      const start = moment().set("hour", option.value.split(":")[0]).set("minute", option.value.split(":")[1]).set("second", 1);
      const end = moment().set("hour", option.value.split(":")[0]).set("minute", option.value.split(":")[1]).set("second", -1).add("minute", 30);
      return scheStart.isBefore(start) && scheEnd.isAfter(end)
    });

    return result;
  }

  disabledDate(current) {
    return (current && current < moment().startOf("day")) || !this.state.data.doctor?.doctorSchedules?.some(sche => sche.availableDays.includes(current.day()));
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
          doctors: res.data.filter(e => e.doctorSchedules.length > 0)
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
    if (!isFormValid(e)) return;
    axiosAction("/appointments", ADD, (res) => {
      if (res.data.success) {
        notify('success', '', 'Success')
        this.props.history.push(this.props.pushBack);
      } else {
        Modal.error({
          title: `Request Fail!`,
          content: (
            <>
              There is another appointment at the same time already booked.
            </>
          )
        });
      }      
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
    if (tmp.doctor && tmp.doctor.department && tmp.doctor.department.id != tmp.department.id) {
      tmp.doctor = null;
    }
    const datetime = { ...this.state.datetime };
    datetime.day = '';
    datetime.date = '';
    datetime.time = '';
    this.setState({ datetime: datetime });
    this.setState({ data: tmp });
  }

  onChangeDoctor(value) {
    const tmp = { ...this.state.data };
    // tmp.doctor =  { id : value};
    tmp.doctor = this.state.doctors.filter(elt => elt.id === value)[0];
    const datetime = { ...this.state.datetime };
    datetime.day = '';
    datetime.date = '';
    datetime.time = '';
    this.setState({ datetime: datetime });
    this.setState({ data: tmp });
  }

  onChangeDate(value) {
    const datetime = { ...this.state.datetime }
    datetime.date = value;
    datetime.day = value.day();
    datetime.time = '';
    this.setState({ datetime: datetime });
  }

  onChangeTime(value) {
    const tmp = { ...this.state.data };
    const datetime = { ...this.state.datetime };
    datetime.time = value;
    tmp.date = moment(this.state.datetime.date).set("hour", value.split(":")[0]).set("minute", value.split(":")[1]).set("second", 0);
    tmp.dateEnd = moment(this.state.datetime.date).set("hour", value.split(":")[0]).set("minute", parseInt(value.split(":")[1]) + 30).set("second", 0);

    this.setState({ data: tmp, datetime: datetime });
  }

  onChange(e) {
    const tmp = { ...this.state.data };
    switch (e.target.name) {
      case 'email':
        tmp.patient.email = e.target.value;
        break;

      case 'phone':
        tmp.patient.phoneNumber = e.target.value;
        break;

      case 'message':
        tmp.message = e.target.value;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeStatus(value) {
    const tmp = { ...this.state.data };
    tmp.status = value;
    this.setState({ data: tmp });
  }

  disabledDate = (checkDate) => {
    // Can not select days before today and today
    return (checkDate && checkDate < moment().startOf('day')) || !this.state.data.doctor?.doctorSchedules?.some(sche => sche.availableDays.includes(checkDate.day()));
  };

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
                      <label>Patient Name<span className="text-red">*</span></label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='patient' className={isValid(this.state.data.patient != null)} onChange={this.onChangePatient}>
                        {this.state.patients?.map(patient => {
                          return (<Option key={patient.id} value={patient.id}>{patient.firstName + " " + patient.lastName}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Patient cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department<span className="text-red">*</span></label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='department' className={isValid(this.state.data.department != null)} onChange={this.onChangeDepartment}>
                        {this.state.departments?.map(department => {
                          return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Department cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Doctor<span className="text-red">*</span></label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='doctor' className={isValid(this.state.data.doctor != null)}
                        onChange={this.onChangeDoctor} value={this.state.data.doctor ? this.state.data.doctor.id : ""} disabled={this.state.data.department == null}>
                        {this.state.doctors?.filter(doc => doc.department?.id == this.state.data.department?.id)?.map(doctor => {
                          return (<Option key={doctor.id} value={doctor.id}>{doctor.employee.firstName + " " + doctor.employee.lastName}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Doctor cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Appointment Date<span className="text-red">*</span></label>
                      <DatePicker name='date' className={isValid(this.state.datetime.date)} value={this.state.datetime.date ?? ""}
                        showTime={false} disabled={this.state.data.doctor == null}
                        format="YYYY-MM-DD" clearIcon={true} showNow={false}
                        allowClear={true} onChange={this.onChangeDate} onSelect={this.onChangeDate} inputReadOnly={true}
                        disabledDate={this.disabledDate}
                      ></DatePicker>
                      <div className="invalid-feedback">Appointment date cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Choose your Convenient Time<span className="text-red">*</span></label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }}
                        className={isValid(this.state.datetime.time)}
                        onChange={this.onChangeTime}
                        value={this.state.datetime.time}
                        disabled={this.state.datetime.date == null}
                      >
                        {appointment_timeranges.map((option, idx) => {
                          if (!this.disabledTime(option)) {
                            return (<Option key={idx} value={option.value}>{option.label}</Option>)
                          }
                        })}
                      </Select>
                      <div className="invalid-feedback">Time cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input name='email' className={isValid(this.state.data.patient?.email != null)} type="email" value={this.state.data.patient?.email} onChange={this.onChange} disabled={true}/>
                      <div className="invalid-feedback">Patient email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input name='phone' className={isValid(this.state.data.patient?.phoneNumber != null)} type="tel" value={this.state.data.patient?.phoneNumber} onChange={this.onChange} disabled={true}/>
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
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push(this.props.pushBack)}>Back</button>
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

export default AddAppointment;