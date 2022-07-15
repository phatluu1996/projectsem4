import React, { Component } from "react";
import { DatePicker, Table, TimePicker } from "antd";
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader"
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img, Sent_img } from "../imagepath"
import { axiosAction, axiosActions, dateSort, notify, stringSort } from '../../../actions';
import "../../../constants";
import { DELETE, GET, DayOptions } from "../../../constants";
import { toMoment } from "../../../utils";
import moment from 'moment';

class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filterData: [],
      data: [],
      selectdId: 0,
      from: null,
      to: null
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.availableDaysDisplay = this.availableDaysDisplay.bind(this);
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
      tmp = tmp.filter(e => ("SCH-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => (e.doctor.employee.firstName.trim() + " " + e.doctor.employee.lastName.trim()).includes(form.name.value));
    }

    if (form.department.value) {
      tmp = tmp.filter(e => e.doctor.department.id == form.department.value);
    }

    if (form.from.value) {
      const start = (e) => { return moment(e.start) };
      const formStart = this.state.from;
      tmp = tmp.filter(e => moment().set({ hour: start(e).hour(), minute: start(e).minute(), second: 0, millisecond: 0 }).isAfter(moment().set({ hour: formStart.hour(), minute: formStart.minute(), second: 0, millisecond: 0 })));
    }

    if (form.to.value) {
      const end = (e) => { return moment(e.end) };
      const formEnd = this.state.to;
      tmp = tmp.filter(e => moment().set({ hour: end(e).hour(), minute: end(e).minute(), second: 0, millisecond: 0 }).isBefore(moment().set({ hour: formEnd.hour(), minute: formEnd.minute(), second: 0, millisecond: 0 })));
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    let form = e.target;
    form.id.value = '';
    form.name.value = '';
    form.department.value = '';
    this.setState({ from: null, to: null });
  }

  componentDidMount() {
    this.fetchData();
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }

  fetchData() {
    const fetchReq = {
      url: `/schedules-doctor/${localStorage.getItem("userName")}`,
      method: GET,
      callback: (res) => {
        this.setState({
          data: res.data,
          filterData: res.data,
          loading: false,
          selectdId: 0
        });
      },
      data: {}
    }

    const fetchDepartment = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          departments: res.data,
          loading: false
        });
      },
      data: {}
    }
    axiosActions([fetchReq, fetchDepartment]);
  }

  deleteData() {
    const deleteReq = {
      url: "/schedules/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq, fetchDepartment]);
      },
      data: {}
    }

    const fetchReq = {
      url: `/schedules-doctor/${localStorage.getItem("userName")}`,
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

    const fetchDepartment = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          departments: res.data,
          loading: false
        });
      },
      data: {}
    }

    axiosActions([deleteReq]);
  }

  availableDaysDisplay(days) {
    var daysDisplay = [];
    if (days && days.includes("/")) {
      days.split("/").sort((a, b) => a - b).map(rec => {
        daysDisplay.push(DayOptions.filter(day => day.value === rec)[0].label)
      });
      return daysDisplay.join(", ")
    }
    return DayOptions.filter(day => day.value === days)[0]?.label;
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        render: (text, record) => <div>{`SCH-${record.id}`}</div>,
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Department",
        render: (text, record) => (
          <div>
            {record.doctor?.department?.name}
          </div>
        ),
        sorter: (a, b) => stringSort(a.doctor?.department?.name, b.doctor?.department?.name)
      },
      {
        title: "Available Days",
        render: (text, record) => (
          <div>
            {
              this.availableDaysDisplay(record.availableDays)
            }
          </div>
        ),
        sorter: (a, b) => a.availableDays.length - b.availableDays.length
      },
      {
        title: "Start From",
        render: (text, record) =>
        (
          <div>
            {
              toMoment(record.start).format("LT")
            }
          </div>
        ),
        sorter: (a, b) => dateSort(toMoment(a.start), toMoment(b.start))
      },
      {
        title: "End at",
        render: (text, record) =>
        (
          <div>
            {
              toMoment(record.end).format("LT")
            }
          </div>
        ),
        sorter: (a, b) => dateSort(toMoment(a.end), toMoment(b.end))
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={`/doctor/schedules/update/${record.id}`}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),

      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Schedule</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/doctor/schedules/add"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Schedule
              </Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label" >Schedule ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Department</label>
                <select className="form-control floating" name="department">
                  <option value={''}>None</option>
                  {this.state.departments?.map((dep, idx) => {
                    return (<option key={idx} value={dep.id}>{dep.name}</option>)
                  })}
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group form-focus focused">
                <label className="focus-label">From</label>
                <TimePicker name='from' showSecond={false} format={"HH:mm"} disabledHours={this.disabledHours} disabledMinutes={this.disabledMinutes} className="form-control"
                  minuteStep={15} onChange={(val) => this.setState({ from: val })} onSelect={(val) => this.setState({ from: val })} value={this.state.from}></TimePicker>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group form-focus focused">
                <label className="focus-label">To</label>
                <TimePicker name='to' showSecond={false} format={"HH:mm"} disabledHours={this.disabledHours} disabledMinutes={this.disabledMinutes} className="form-control"
                  minuteStep={15} onChange={(val) => this.setState({ to: val })} onSelect={(val) => this.setState({ to: val })} value={this.state.to}></TimePicker>
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
              <div className="table-responsive">
                <Table
                  loading={this.state.loading}
                  className="table-striped"
                  style={{ overflowX: "auto" }}
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
        </div>
        <OpenChat />
        <div id="delete_schedule" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Schedule?</h3>
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

export default DoctorSchedule;
