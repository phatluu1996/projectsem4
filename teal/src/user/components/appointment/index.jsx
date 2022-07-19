import React, { Component } from "react";
import { ADD, appointment_timeranges, GET } from '../../../constants';
import { axiosActions, axiosAction, isFormValid, notify, isFormValidNoNotify } from '../../../actions';
import { DatePicker, Modal, Radio, Select } from "antd";
import moment from "moment";
const { Option } = Select;

class Appointment extends Component {

  username = localStorage.getItem("userName");

  disabledDate = (current) => {
    return (current && current < moment().startOf("day")) || !this.state.data.doctor?.doctorSchedules?.some(sche => sche.availableDays.includes(current.day()));
  }

  disableTime(option) {
    if (!this.state.data.doctor?.doctorSchedules || !this.state.dateTime.date) {
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
      dateTime: {
        day: null,
        date: null,
        time: null
      },
      patient: null,
      doctors: [],
      departments: []
    }

    this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
    this.handleChangeDoctor = this.handleChangeDoctor.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
    this.disableTime = this.disableTime.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  handleChangeDepartment = (value) => {
    const tmp = { ...this.state.data };
    tmp.department = this.state.departments.filter(elt => elt.id === value)[0];
    if (tmp.doctor && tmp.doctor.department && tmp.doctor.department.id != tmp.department.id) {
      tmp.doctor = null;
    }
    const datetime = { ...this.state.dateTime }
    datetime.date = '';
    datetime.day = null;
    datetime.time = null;
    this.setState({ data: tmp, dateTime: datetime });
  }

  handleChangeDoctor = (value) => {
    const tmp = { ...this.state.data };
    tmp.doctor = this.state.doctors.filter(elt => elt.id === value)[0];
    tmp.date = null;
    const datetime = { ...this.state.dateTime }
    datetime.date = '';
    datetime.day = null;
    datetime.time = null;
    this.setState({ data: tmp, dateTime: datetime });
  }

  handleChangeDate = (value) => {
    const tmp = { ...this.state.dateTime };
    tmp.date = value;
    tmp.day = moment(value).day();
    console.log(tmp);
    this.setState({ dateTime: tmp });

  }

  handleChangeTime = (e) => {
    const tmp = { ...this.state.data };
    const datetime = { ...this.state.dateTime };
    const value = e.target.value;
    datetime.time = value;
    tmp.date = moment(this.state.dateTime.date).set("hour", value.split(":")[0]).set("minute", value.split(":")[1]).set("second", 0);
    tmp.dateEnd = moment(this.state.dateTime.date).set("hour", value.split(":")[0]).set("minute", parseInt(value.split(":")[1]) + 30).set("second", 0);

    this.setState({ data: tmp, dateTime: datetime });
  }

  onChangeMessage(e) {
    const tmp = { ...this.state.data };
    tmp.message = e.target.value;
    this.setState({ data: tmp });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValidNoNotify(e)) {
      Modal.error({
        title: `Request Fail!`,
        content: (
          <>
            Your appointment request is not qualified enough to submit.
            Please try again.
          </>
        )
      });
    } else {
      axiosAction("/appointments", ADD, (res) => {
        if (res.data.success) {
          Modal.success({
            title: `Request Successfully !`,
            content: (
              <>
                Your appointment has been submitted and waiting for approval.
                Our receptionist will contact you to get confirmation.
                Thank you.
              </>
            ),
            onOk: () => {
              this.props.history.push("/appointments");
            }
          });
        } else {
          Modal.error({
            title: `Request Fail!`,
            content: (
              <>
                There is another appointment at the same time already booked
                Please choose another appointment time.
              </>
            )
          });
        }
      }, (err) => notify('error', '', 'Error'), this.state.data);
    }
  }

  componentDidMount() {

    const patientsParam = {
      url: `/get-patient/${this.username}`,
      method: GET,
      callback: (res) => {
        const tmp = { ...this.state.data };
        tmp.patient = res.data;
        this.setState({
          loading: false,
          data: tmp,
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
          doctors: res.data.filter(doc => doc.doctorSchedules.length > 0)
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
                  <h2 style={{ textAlign: "center", margin: "20px" }}><strong>APPOINTMENT</strong></h2>
                  <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
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
                          <p><strong>Date Of Birth:</strong> &ensp;{moment(this.state.patient.dateOfBirth).format("DD-MM-YYYY")}</p>
                        </div>
                        <div className="form-group">
                          <p><strong>Email:</strong> &ensp;{this.state.patient.email}</p>
                        </div>
                        <div className="form-group">
                          <p><strong>Phone number:</strong> &ensp;{this.state.patient.phoneNumber}</p>
                        </div>
                        <div className="form-group row">
                          <p className="col-2"><strong>Address:</strong></p>
                          <p className="col-10">&ensp;{this.state.patient.address.line}, {this.state.patient.address.district}, {this.state.patient.address.province}, {this.state.patient.address.country}</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          <label>Select Consultation Type <span className="text-red">*</span>
                          </label>
                          <Select className={this.state.data.department ? "form-control is-valid" : "form-control is-invalid"}
                            bordered={false}
                            size="large"
                            style={{ width: '100%' }}
                            name='department'
                            onChange={this.handleChangeDepartment}>
                            {this.state.departments?.map(department => {
                              return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Please choose your consultation type !</div>
                        </div>
                        <div className="form-group">
                          <label>Choose the Doctor</label> <span className="text-red">*</span>
                          <Select className={this.state.data.doctor ? "form-control is-valid" : "form-control is-invalid"}
                            bordered={false}
                            size="large"
                            style={{ width: '100%' }}
                            name='doctor'
                            onChange={this.handleChangeDoctor}
                            disabled={!this.state.data.department}
                            value={this.state.data.doctor ? this.state.data.doctor.id : ""}
                          >
                            {this.state.doctors?.filter(doc => doc.department?.id == this.state.data.department?.id)?.map(doctor => {
                              return (<Option key={doctor.id} value={doctor.id}>{doctor.employee.firstName + " " + doctor.employee.lastName}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Please input choose a doctor !</div>
                        </div>
                        <div className="form-group">
                          <label>Message (optional)</label>
                          <textarea name="message" className="form-control" onChange={this.onChangeMessage} />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Choose the Date <span className="text-red">*</span>
                          </label>
                          <div className="calendar">
                            <div className="input-wrapper">
                              <DatePicker className={this.state.dateTime.date ? "form-control is-valid" : "form-control is-invalid"}
                                style={{ width: '100%' }}
                                disabled={!this.state.data.doctor}
                                onChange={this.handleChangeDate}
                                value={this.state.dateTime.date}
                                disabledDate={this.disabledDate}
                                bordered={false}
                              />
                              <div className="invalid-feedback">Please input your appointment date !</div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="m-b-20">Choose your Convenient Time <span className="text-red">*</span></label>
                          <Radio.Group
                            size="large"
                            marginTop="20px"
                            className={`form-control ${this.state.dateTime.time ? "is-valid" : "is-invalid"}`}
                            // options={this.options}   
                            onChange={this.handleChangeTime}
                            value={this.state.dateTime.time}
                            optionType='button'
                          >
                            {appointment_timeranges.map((option, idx) => {
                              return (<Radio.Button key={idx} value={option.value} disabled={this.disableTime(option)}>{option.label}</Radio.Button>)
                            })}
                          </Radio.Group>
                          <div className="invalid-feedback">Please input your appointment time !</div>
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
