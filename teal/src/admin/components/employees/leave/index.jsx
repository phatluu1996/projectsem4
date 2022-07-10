import React, { Component } from "react";
import { DatePicker, Table } from "antd";
import { User_img, Sent_img } from "../../imagepath"
import { Tag } from 'antd';
import OpenChat from "../../sidebar/openchatheader"
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';
import { axiosAction, axiosActions, dateSort, notify, numberSort, stringSort } from "../../../../actions";
import { DELETE, GET, leave_type, leave_status } from "../../../../constants";
import { toMoment } from "../../../../utils";
import moment from "moment";

class Leave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterData: [],
      selectdId: 0,
      from: '',
      to: ''
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  fetchData() {
    axiosAction("/leaves", GET, res => {
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/leaves/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/leaves",
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

  filterData(e) {
    e.preventDefault();
    let form = e.target;
    let tmp = [...this.state.data];

    if (form.id.value) {

    }

    if (form.name.value) {
      tmp = tmp.filter(e => (e.firstName.trim() + " " + e.lastName.trim()).includes(form.name.value));
    }

    if (form.type.value) {
      tmp = tmp.filter(e => e.leaveType == form.type.value);
    }

    if (form.status.value) {
      tmp = tmp.filter(e => e.status == form.status.value);
    }

    if (form.from.value) {

    }

    if (form.to.value) {

    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    // e.target.from.value = '';
    // e.target.to.value = '';
    e.target.status.value = '';
    e.target.type.value = '';
    this.setState({ from: '', to: '' })
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
        title: "Leave ID",
        render: (text, record) => (
          <div>
            {"LEA-" + record.id}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Employee Name",
        dataIndex: "Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {/* <img alt="" src={record.image} /> */}
            </a>
            {record.employee.firstName + " " + record.employee.lastName}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.firstName + " " + a.employee.lastName, b.employee.firstName + " " + b.employee.lastName),
      },
      {
        title: "Leave Type",
        dataIndex: "Leave",
        render: (text, record) => (
          <div>
            {leave_type.find(e => e.value == record.leaveType).label}
          </div>
        ),
        sorter: (a, b) => stringSort(leave_type.find(e => e.value == a.leaveType).label, leave_type.find(e => e.value == b.leaveType).label),
      },
      {
        title: "From",
        dataIndex: "From",
        render: (text, record) => (
          <div>
            {toMoment(record.startFrom).format("YYYY-MM-DD")}
          </div>
        ),
        sorter: (a, b) => dateSort(a.startFrom, b.startFrom),
      },
      {
        title: "To",
        dataIndex: "To",
        render: (text, record) => (
          <div>
            {moment(record.startFrom).add(record.leaveDay, "days").format("YYYY-MM-DD")}
          </div>
        ),
        sorter: (a, b) => dateSort(moment(a.startFrom).add(a.leaveDay, "days").format("YYYY-MM-DD"), moment(b.startFrom).add(b.leaveDay, "days").format("YYYY-MM-DD")),
      },
      {
        title: "Leave days",
        dataIndex: "Days",
        render: (text, record) => (
          <div>
            {record.leaveDay}
          </div>
        ),
        sorter: (a, b) => numberSort(a.leaveDay, b.leaveDay),
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <Tag color={leave_status.find(e => e.value == record.status).color} key={text} className="custom-badge">
            {leave_status.find(e => e.value == record.status).label}
          </Tag>
        ),
        sorter: (a, b) => stringSort(leave_status.find(e => e.value == a.status).label, leave_status.find(e => e.value == b.status).label),

      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={`/admin/leaves/update/${record.id}`}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),

      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-8 col-6">
              <h4 className="page-title">Leave Request</h4>
            </div>
            <div className="col-sm-4 col-6 text-right m-b-30">
              <Link to="/admin/leaves/add" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Leave</Link>
            </div>
          </div>
          <form className="row filter-row" onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-1">
              <div className="form-group form-focus">
                <label className="focus-label">Leave ID</label>
                <input type="text" name="id" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" name="name" className="form-control floating" />
              </div>
            </div>

            <div className="col-sm-1">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Leave Type</label>
                <select name="type" className="form-control floating">
                  <option value=''>None</option>
                  {leave_type?.map((e, idx) => {
                    return (<option key={idx} value={e.value}>{e.label}</option>)
                  })}
                </select>
              </div>
            </div>
            <div className="col-sm-1">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Leave Status</label>
                <select name="status" className="form-control floating">
                  <option value=''>None</option>
                  {leave_status?.map((e, idx) => {
                    return (<option key={idx} value={e.value}>{e.label}</option>)
                  })}
                </select>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus focused">
                <label className="focus-label">From</label>
                <DatePicker name='from' className="form-control" disabledTime={true}
                  showTime={false} format="YYYY-MM-DD" clearIcon={true}
                  allowClear={true} value={this.state.from} onChange={(val) => this.setState({ from: val })}></DatePicker>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus focused">
                <label className="focus-label">To</label>
                <DatePicker name='to' className="form-control" disabledTime={true}
                  showTime={false} format="YYYY-MM-DD" clearIcon={true}
                  allowClear={true} value={this.state.to} onChange={(val) => this.setState({ to: val })}></DatePicker>
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
        <div id="delete_approve" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Leave Request?</h3>
                <div className="m-t-20">
                  <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a href="#" className="btn btn-danger mr-0" data-dismiss="modal" onClick={this.deleteData}>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leave;
