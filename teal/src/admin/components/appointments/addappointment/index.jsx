import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { DatePicker, Select } from 'antd';
import { ADD, appointment_status, GET, UPDATE } from '../../../../constants';
import { axiosAction, axiosActions, isFormValid, isValid, notify } from '../../../../actions';
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
        status: 'approved',
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
    this.disabledHours = this.disabledHours.bind(this);
    this.disabledMinutes = this.disabledMinutes.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  disabledHours() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24];
  }

  disabledMinutes(selectHour) {
    if (selectHour == 18)
      return [0, 15, 30, 45];
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
    if (!isFormValid(e)) return;
    axiosAction("/appointments", ADD, (res) => {
      notify('success', '', 'Success')
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
    if (tmp.doctor && tmp.doctor.department && tmp.doctor.department.id != tmp.department.id) {
      tmp.doctor = null;
    }
    this.setState({ data: tmp });
  }

  onChangeDoctor(value) {
    const tmp = { ...this.state.data };
    // tmp.doctor =  { id : value};
    tmp.doctor = this.state.doctors.filter(elt => elt.id === value)[0];
    this.setState({ data: tmp });
  }

  onChangeDate(value) {
    const tmp = { ...this.state.data };
    tmp.date = value[0];
    tmp.dateEnd = value[1]
    this.setState({ data: tmp });
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

  showNotify() {
    console.log(this.props);
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
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
                      <label>Patient Name</label>
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
                      <label>Department</label>
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor</label>
                      <Select bordered={false} size={"small"} style={{ width: '100%' }} name='doctor' className={isValid(this.state.data.doctor != null)}
                        onChange={this.onChangeDoctor} value={this.state.data.doctor ? this.state.data.doctor.id : ""}>
                        {this.state.doctors?.filter(doc => doc.department?.id == this.state.data.department?.id)?.map(doctor => {
                          return (<Option key={doctor.id} value={doctor.id}>{doctor.employee.firstName + " " + doctor.employee.lastName}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Doctor cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Time Range</label>
                      <RangePicker name='date' className={isValid(this.state.data.date && this.state.data.dateEnd)} value={[this.state.data.date ?? "", this.state.data.dateEnd ?? ""]}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} minuteStep={30} showSecond={false} format="YYYY-MM-DD HH:mm" clearIcon={true}
                        allowClear={true} onChange={this.onChangeDate} onSelect={this.onChangeDate} inputReadOnly={true}
                        disabledHours={this.disabledHours} disabledMinutes={this.disabledMinutes}></RangePicker>
                      <div className="invalid-feedback">Time Range cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Email</label>
                      <input name='email' className={isValid(this.state.data.patient?.email != null)} type="email" value={this.state.data.patient?.email} onChange={this.onChange} />
                      <div className="invalid-feedback">Patient email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Patient Phone Number</label>
                      <input name='phone' className={isValid(this.state.data.patient?.phoneNumber != null)} type="tel" value={this.state.data.patient?.phoneNumber} onChange={this.onChange} />
                      <div className="invalid-feedback">Patient phone cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name='message' cols={30} rows={4} className="form-control" onChange={this.onChange} />
                </div>
                {!this.props.isReception && <div className="form-group">
                  <label>Status<span className="text-danger">*</span></label>
                  <Select bordered={false} size={"small"} style={{ width: '100%' }} value={this.state.data.status}
                    className={isValid(this.state.data.status)} onChange={this.onChangeStatus}>
                    {appointment_status.map((type, idx) => {
                      return (<Option key={idx} value={type.value}>{type.label}</Option>);
                    })}
                  </Select>
                  <div className="invalid-feedback">Status cannot be empty</div>
                </div>}

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