import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../../sidebar/openchatheader"
import { User_img, Sent_img } from "../../imagepath"
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';
import $ from "jquery"
import { number, string } from "prop-types";
import { axiosAction, axiosActions, dateSort, numberSort, stringSort } from "../../../../actions";
import { DELETE, employeeRoles, GET } from "../../../../constants";
import { toMoment } from "../../../../utils";

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [],
      filterData: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  filterData(e) {
    e.preventDefault();
    let form = e.target;
    let tmp = [...this.state.data];
    if (form.id.value) {
      tmp = tmp.filter(e => ("SAL-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => e.employee.name.includes(form.name.value));
    }

    if (form.email.value) {
      tmp = tmp.filter(e => e.employee.email.includes(form.email.value));
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    let form = e.target;
    form.id.value = '';
    form.name.value = '';
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
    axiosAction("/salaries", GET, res => {
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/salaries/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/salaries",
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


  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        render: (text, record) => (
          <div>
            {`SAL-${record.id}`}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Employee",
        dataIndex: "employee",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {record.employee.imageByteArr && <img alt="" src={record.employee.imageByteArr} />}
            </a>
            {record.employee.lastName + " " + record.employee.firstName}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.lastName + " " + a.employee.firstName, b.employee.lastName + " " + b.employee.firstName)
      },
      {
        title: "Email",
        render: (text, record) => (
          <div>
            {record.employee.email}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.email - b.employee.email),
      },
      {
        title: "Joining Date",
        render: (text, record) => (
          <div>
            {toMoment(record.employee.joiningDate) ? toMoment(record.employee.joiningDate).format('LL') : ""}
          </div>
        ),
        sorter: (a, b) => dateSort(a.joiningDate, b.joiningDate),
      },
      {
        title: "Role",
        dataIndex: "role",
        render: (text, record) => (
          <div>
            {record.employee.employeeRole}
          </div>
        ),
        sorter: (a, b) => stringSort(employeeRoles.find(e => e.value == a.employee.employeeRole), employeeRoles.find(e => e.value == b.employee.employeeRole)),
      },
      {
        title: "Salary",
        render: (text, record) => (
          <div>
            {record.basicSalary}
          </div>
        ),
        sorter: (a, b) => numberSort(a.basicSalary, b.basicSalary),
      },
      {
        title: "Export to Payslip",
        render: (text, record) => (
          <Link className="btn btn-sm btn-primary generate" to="/salary-view">Generate Slip</Link>
        ),
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-salary"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_salary"><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),

      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-5">
              <h4 className="page-title">Employee Salary</h4>
            </div>
            <div className="col-sm-8 col-7 text-right m-b-30">
              <Link to="/admin/salaries/add" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" />Add Salary</Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label" >Salary ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" name="name" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Email</label>
                <input type="text" className="form-control floating" name="email" />
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
        <div id="delete_salary" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Salary?</h3>
                <div className="m-t-20"> <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Salary;
