import React, { Component } from "react";
import { Table } from "antd";
import { User_img, Sent_img } from "../../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import OpenChat from "../../sidebar/openchatheader"
import { axiosAction, axiosActions, dateSort, notify, numberSort, stringSort } from '../../../../actions';
import { DELETE, GET, employeeRoles } from "../../../../constants";
import { toMoment } from "../../../../utils";

import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterData: [],
      selectdId: 0
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  fetchData() {
    axiosAction("/employees-admin", GET, res => {
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/employees/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/employees-admin",
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
      tmp = tmp.filter(e => ("EMP-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => (e.firstName.trim() + " " + e.lastName.trim()).includes(form.name.value));
    }

    if (form.role.value) {
      tmp = tmp.filter(e => e.employeeRole == form.role.value);
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    e.target.id.value = '';
    e.target.role.value
    e.target.name.value = '';
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
            {"EMP-" + record.id}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Employee Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {record.imageByteArr && <img alt="" src={record.imageByteArr} />}
            </a>
            {record.lastName + " " + record.firstName}
          </div>
        ),
        sorter: (a, b) => stringSort((a.lastName + " " + a.firstName), (b.lastName + " " + b.firstName)),
      },
      {
        title: "Gender",
        render: (text, record) => (
          <div>
            {record.gender}
          </div>
        ),
        sorter: (a, b) => stringSort(a.gender, b.gender)
      },
      {
        title: "BirthDay",
        render: (text, record) => (
          <div>
            {toMoment(record.dateOfBirth).format("DD-MM-YYYY")}
          </div>
        ),
        sorter: (a, b) => dateSort(a.dateOfBirth, b.dateOfBirth),
      },
      {
        title: "Email",
        render: (text, record) => (
          <div>
            {record.email}
          </div>
        ),
        sorter: (a, b) => stringSort(a.email, b.email),
      },
      {
        title: "Phone",
        render: (text, record) => (
          <div>
            {record.phoneNumber}
          </div>
        ),
        sorter: (a, b) => stringSort(a.phoneNumber, b.phoneNumber)
      },
      {
        title: "Role",
        render: (text, record) => (
          <div>
            {record.employeeRole}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employeeRole, b.employeeRole)
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={`/admin/employees/update/${record.id}`}><i className="fas fa-pencil-alt m-r-5" />Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Employee</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/admin/employees/add" className="btn btn-primary float-right btn-rounded"><i className="fas fa-plus" /> Add Employee</Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label" >Employee ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" name="name" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Role</label>
                <select className="form-control floating" name="role">
                  <option value={""}>None</option>
                  {employeeRoles.map((role, idx) => { return (<option key={idx} value={role.value}>{role.label}</option>) })}
                </select>
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
                    pageSize: 10,
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
        <div id="delete_employee" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Employee?</h3>
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

export default EmployeeList;
