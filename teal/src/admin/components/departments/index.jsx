import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../sidebar/openchatheader"
import { Sent_img } from "../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { axiosAction, axiosActions, notify, numberSort, stringSort } from '../../../actions';
import { GET, DELETE } from "../../../constants";

class Departments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      filterData: [],
      selectId: ""
    };
    this.deleteData = this.deleteData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  filterData(e) {
    e.preventDefault();
    let form = e.target;
    let tmp = [...this.state.data];
    if (form.id.value) {
      tmp = tmp.filter(e => ("DEP-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => e.name.includes(form.name.value));
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
    $('.floating').on('focus blur', function (e) {
      $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
  }

  fetchData = () => {
    axiosAction("/departments", GET, res => {
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
  }

  deleteData() {
    const deleteReq = {
      url: "/departments/" + this.state.selectId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        notify('success', '', 'Success');
        this.setState({
          data: res.data,
          filterData: res.data,
          loading: false,
          selectId: 0
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
        render: (text, record) => <div>{`DEP-${record.id}`}</div>,
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Department Name",
        dataIndex: "name",
        render: (text, record) =>
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {record.imageByteArr && <img alt="" src={record.imageByteArr} />}
            </a>
            {record.name}
          </div>,
        sorter: (a, b) => stringSort(a.name, b.name)

      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <Tag color={text ? "green" : "red"} key={record.status} className="custom-badge">
            {record.status ? "Active" : "InActive"}
          </Tag>
        ),
        sorter: (a, b) => stringSort(a.status ? "Active" : "InActive", b.status ? "Active" : "InActive")

      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={"/admin/departments/update/" + record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" onClick={() => this.setState({selectId: record.id})} href="#" data-toggle="modal" data-target="#delete_department"><i className="fas fa-trash m-r-5" /> Delete</a>
          </div>
          </div >
        ),
  },
    ];

  return(
      <div className = "page-wrapper" >
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Departments</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/admin/departments/add"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Departments
              </Link>
            </div>
          </div>
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label" >Department ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group form-focus">
                <label className="focus-label">Department Name</label>
                <input type="text" className="form-control floating" name="name" />
              </div>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-success btn-block" type='submit'> Search </button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-danger btn-block" type='reset'> Reset </button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  loading={this.state.loading}
                  className="table-striped right-item"
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
        <div id="delete_department" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Department?</h3>
                <div className="m-t-20">
                  <a className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a className="btn btn-danger" onClick={this.deleteData} data-dismiss="modal">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Departments;
