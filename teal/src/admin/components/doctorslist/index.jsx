import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Tag } from "antd";
import { Sent_img } from "../imagepath"
import { itemRender, onShowSizeChange } from "../../components/paginationfunction";
import OpenChat from "../sidebar/openchatheader";
import { axiosAction, axiosActions, notify } from '../../../actions';
import { DELETE, GET } from "../../../constants";
import { toMoment } from "../../../utils";
import moment from 'moment';

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      selectdId: 0
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  fetchData() {
    axiosAction("/doctors", GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/doctors/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
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
      },
      {
        title: "Doctor Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {/* <img alt="" src={record.image} /> */}
            </a>
            {record.lastName + " " + record.firstName}
          </div>
        ),

      },
      {
        title: "Gender",
        render: (text, record) => (
          <div>
            {record.gender}
          </div>
        ),
      },
      {
        title: "BirthDay",
        render: (text, record) => (
          <div>
            {toMoment(record.dateOfBirth).format("DD-MM-YYYY")}
          </div>
        ),
      },
      {
        title: "Email",
        render: (text, record) => (
          <div>
            {record.email}
          </div>
        ),
      },
      {
        title: "Phone",
        render: (text, record) => (
          <div>
            {record.phoneNumber}
          </div>
        ),
      },
      {
        title: "Department",
        render: (text, record) => (
          <div>
            {record.department?.name}
          </div>
        ),
      },
      {
        title: "Status",
        render: (text, record) => (
          <span>
            <Tag color={record.status ? "green" : "red"} className="custom-badge">
              {record.status ? "Active" : "Inactive"}
            </Tag>
          </span>
        ),
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
          <div className="row">
            <div className="col-md-12">
              <Table
                loading={this.state.loading}

                className="table-striped"
                style={{ overflowX: "scroll" }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={(record) => record.id}
                showSizeChanger={true}
                pagination={{
                  total: data.length,
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
