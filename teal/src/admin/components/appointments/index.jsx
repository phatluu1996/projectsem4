import React, { Component } from "react";
import { Table } from "antd";
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { User_img, Sent_img } from "../imagepath"
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import OpenChat from "../sidebar/openchatheader";
import { axiosAction, axiosActions, notify } from '../../../actions';
import "../../../constants";
import { DELETE, GET } from "../../../constants";
import { toMoment } from "../../../utils";
import moment from 'moment';

class Appointments extends Component {
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
    axiosAction("/appointments", GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    }, ()=>{});
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
        notify('success', '','Success');
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
            {"APM-" + record.id}
          </div>
        ),
      },
      {
        title: "Patient Name",
        render: (text, record) => (
          <div>
            {record.patient?.lastName + " " + record.patient?.firstName}
          </div>
        ),

      },
      {
        title: "BirthDay",
        render: (text, record) => (
          <div>
            {record.patient?.dateOfBirth ? toMoment(record.patient?.dateOfBirth).format("DD-MM-YYYY") : ""}
          </div>
        ),

      },
      {
        title: "Doctor Name",
        render: (text, record) => (
          <div>
            {record.doctor?.lastName + " " + record.doctor?.firstName}
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
        title: "Appointment Date",
        render: (text, record) => (
          <div>
            {record.date ? toMoment(record.date).format('DD-MM-YYYY h:mm:ss') : ""}

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
              <Link className="dropdown-item" to={"/admin/appointments/update/" + record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appointment" onClick={() => this.setState({ selectdId: record.id })}><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),

      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3"> <h4 className="page-title">Appointments</h4> </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/admin/appointments/add" className="btn btn btn-primary btn-rounded float-right" >
                <i className="fa fa-plus"></i> Add Appointments
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

export default Appointments;
