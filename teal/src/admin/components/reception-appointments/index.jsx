import React, { Component } from "react";
import { DatePicker, Table } from "antd";
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { User_img, Sent_img } from "../imagepath"
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import OpenChat from "../sidebar/openchatheader";
import { axiosAction, axiosActions, dateSort, notify, numberSort, stringSort } from '../../../actions';
import "../../../constants";
import { appointment_status, DELETE, GET } from "../../../constants";
import { toMoment } from "../../../utils";
import moment from 'moment';

class ReceptionAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterData: [],
      selectdId: 0,
      from: null,
      to: null
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.disabledHours = this.disabledHours.bind(this);
    this.disabledMinutes = this.disabledMinutes.bind(this);
  }

  disabledHours() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24];
  }

  disabledMinutes(selectHour) {
    if (selectHour == 18)
      return [0, 15, 30, 45];
  }

  filterData(e) {
    e.preventDefault();
    let form = e.target;
    let tmp = [...this.state.data];
    if (form.id.value) {
      tmp = tmp.filter(e => ("APM-" + e.id).includes(form.id.value));
    }

    if (form.doctorName.value) {
      tmp = tmp.filter(e => (e.doctor.employee.firstName.trim() + " " + e.doctor.employee.lastName.trim()).includes(form.doctorName.value));
    }

    if (form.patientName.value) {
      tmp = tmp.filter(e => (e.patient.firstName.trim() + " " + e.patient.lastName.trim()).includes(form.patientName.value));
    }

    if (form.from.value) {
      const formStart = this.state.from;
      tmp = tmp.filter(e => moment(e.date).isAfter(formStart));
    }

    if (form.to.value) {
      const formEnd = this.state.to;
      tmp = tmp.filter(e => moment(e.dateEnd).isBefore(formEnd));
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    let form = e.target;
    form.id.value = '';
    form.doctorName.value = '';
    form.patientName.value = '';
    this.setState({ from: null, to: null });
  }

  fetchData() {
    axiosAction("/appointments", GET, res => {
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/appointments/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/appointments",
      method: GET,
      callback: (res) => {
        notify('success', '', 'Success');
        this.setState({
          data: res.data,
          filterData: res.data,
          loading: false,
          selectdId: 0
        });
      },
      data: {}
    }
    axiosActions([deleteReq]);
  }

  componentDidMount() {
    this.fetchData();
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "ID",
        render: (text, record) => (
          <div>
            {"APM-" + record.id}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Patient Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
            {record.patient.imageByteArr && <img alt="" src={record.patient.imageByteArr} />}
            </a>
            {record.patient?.lastName + " " + record.patient?.firstName}
          </div>
        ),
        sorter: (a, b) => stringSort(a.patient?.lastName + " " + a.patient?.firstName, b.patient?.lastName + " " + b.patient?.firstName)
      },
      {
        title: "Doctor Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
            {record.doctor.employee.imageByteArr && <img alt="" src={record.doctor.employee.imageByteArr} />}
            </a>
            {record.doctor?.employee.lastName + " " + record.doctor?.employee.firstName}
          </div>
        ),
        sorter: (a, b) => stringSort(a.doctor?.employee.lastName + " " + a.doctor?.employee.firstName, b.doctor?.employee.lastName + " " + b.doctor?.employee.firstName)
      },
      {
        title: "Start Time",
        render: (text, record) => (
          <div>
            {record.date ? toMoment(record.date).format('DD-MM-YYYY h:mm:ss') : ""}
          </div>
        ),
        sorter: (a, b) => dateSort(a.date, b.date)
      },
      {
        title: "End Time",
        render: (text, record) => (
          <div>
            {record.dateEnd ? toMoment(record.dateEnd).format('DD-MM-YYYY h:mm:ss') : ""}
          </div>
        ),
        sorter: (a, b) => dateSort(a.dateEnd, b.dateEnd)
      },
      {
        title: "Status",
        render: (text, record) => (record.status &&
          <span>
            <Tag color={appointment_status.find(e => e.value == record.status).color} className="custom-badge">
              {appointment_status.find(e => e.value == record.status).label}
            </Tag>
          </span>
        ),
        sorter: (a, b) => stringSort(appointment_status.find(e => e.value == a.status).label, appointment_status.find(e => e.value == b.status).label)
      },
      {
        title: "Action",
        render: (text, record) => (<>
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              {record.status == "pending" && <Link className="dropdown-item" to={"/reception/appointments/update/" + record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>}
              {record.status == "rejected" && <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appointment" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>}
            </div>
          </div>
          </>
        ),

      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3"> <h4 className="page-title">Appointments</h4> </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/reception/appointments/add" className="btn btn btn-primary btn-rounded float-right" >
                <i className="fa fa-plus"></i> Add Appointments
              </Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label" >Appointment ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label">Patient Name</label>
                <input type="text" className="form-control floating" name="patientName" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label">Doctor Name</label>
                <input type="text" className="form-control floating" name="doctorName" />
              </div>
            </div>            
            <div className="col-sm-2">
              <div className="form-group form-focus focused">
                <label className="focus-label">From</label>
                <DatePicker name='from' showSecond={false} format={"YYYY-MM-DD HH:mm"} showHour={true} showMinute={true} showTime={true} 
                  className="form-control" minuteStep={15} onChange={(val) => this.setState({ from: val })} 
                  onSelect={(val) => this.setState({ from: val })} value={this.state.from}></DatePicker>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus focused">
                <label className="focus-label">To</label>
                <DatePicker name='to' showSecond={false} format={"YYYY-MM-DD HH:mm"} showHour={true} showMinute={true} showTime={true} 
                  className="form-control" minuteStep={15} onChange={(val) => this.setState({ to: val })} 
                  onSelect={(val) => this.setState({ to: val })} value={this.state.to}></DatePicker>
              </div>
            </div>
            <div className="col-sm-1">
              <button className="btn btn-success btn-block" type='submit'> Search </button>
            </div>
            <div className="col-sm-1">
              <button className="btn btn-danger btn-block" type='reset'> Reset </button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-12">
              <Table
                loading={this.state.loading}

                className="table-striped"
                style={{ overflowX: "scroll" }}
                columns={columns}
                // bordered
                dataSource={this.state.filterData}
                rowKey={(record) => record.id}
                showSizeChanger={true}
                pagination={{
                  total: this.state.filterData.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
              />
            </div>
          </div>
        </div>
        <OpenChat />
        <div id="delete_appointment" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Appointment?</h3>
                <div className="m-t-20">
                  <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={this.deleteData}>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReceptionAppointments;
