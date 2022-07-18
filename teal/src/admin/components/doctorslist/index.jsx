import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Tag, Select } from "antd";
import { Sent_img } from "../imagepath"
import { itemRender, onShowSizeChange } from "../../components/paginationfunction";
import OpenChat from "../sidebar/openchatheader";
import { axiosAction, axiosActions, dateSort, notify, numberSort, stringSort } from '../../../actions';
import { DELETE, GET } from "../../../constants";
import { toMoment } from "../../../utils";
const { Option } = Select;

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterData: [],
      selectdId: 0,
      departments: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  fetchData() {
    // axiosAction("/doctors", GET, res => {
    //   this.setState({
    //     data: res.data,
    //     filterData: res.data,
    //     loading: false,
    //   });
    // }, () => { });
    const fetchReq = {
      url: "/doctors",
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
      url: "/doctors/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq, fetchDepartment]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/doctors",
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
          departments: res.data
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
      tmp = tmp.filter(e => ("DTR-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => (e.firstName.trim() + " " + e.lastName.trim()).includes(form.name.value));
    }

    if (form.department.value) {
      tmp = tmp.filter(e => e.department.id == form.department.value);
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    e.target.department.value = '';
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
            {"DTR-" + record.id}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Doctor Name",
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
        title: "Gender",
        render: (text, record) => (
          <div>
            {record.employee.gender}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.gender, b.employee.gender)
      },
      {
        title: "BirthDay",
        render: (text, record) => (
          <div>
            {toMoment(record.employee.dateOfBirth).format("DD-MM-YYYY")}
          </div>
        ),
        sorter: (a, b) => dateSort(a.employee.dateOfBirth, b.employee.dateOfBirth)
      },
      {
        title: "Email",
        render: (text, record) => (
          <div>
            {record.employee.email}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.email, b.employee.email)
      },
      {
        title: "Phone",
        render: (text, record) => (
          <div>
            {record.employee.phoneNumber}
          </div>
        ),
        sorter: (a, b) => stringSort(a.employee.phoneNumber, b.employee.phoneNumber)
      },
      {
        title: "Department",
        render: (text, record) => (
          <div>
            {record.department?.name}
          </div>
        ),
        sorter: (a, b) => stringSort(a.department?.name, b.department?.name)
      },
      {
        title: "Status",
        render: (text, record) => (
          <span>
            <Tag color={record.employee.status ? "green" : "red"} className="custom-badge">
              {record.employee.status ? "Active" : "Inactive"}
            </Tag>
          </span>
        ),
        sorter: (a, b) => stringSort(a.employee.status ? "Active" : "Inactive", b.employee.status ? "Active" : "Inactive")
      },
      {
        title: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={`/admin/doctors/update/${record.id}`}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),

      },
    ];

    return (<>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3"> <h4 className="page-title">Doctors</h4> </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/admin/doctors/add" className="btn btn btn-primary btn-rounded float-right" >
                <i className="fa fa-plus"></i> Add Doctor
              </Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label" >Doctor ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label">Doctor Name</label>
                <input type="text" className="form-control floating" name="name" />
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
        <OpenChat />
        <div id="delete_doctor" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this doctor profile?</h3>
                <div className="m-t-20">
                  <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a href="#" className="btn btn-danger" data-dismiss="modal" onClick={this.deleteData}>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
  }
}

export default Doctors;
