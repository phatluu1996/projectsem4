import React, { Component } from "react";
import { Table } from "antd";
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader"
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img, Sent_img } from "../imagepath"
import { axiosAction, axiosActions, notify } from '../../../actions';
import "../../../constants";
import { DELETE, GET, DayOptions } from "../../../constants";
import { toMoment } from "../../../utils";
import moment from 'moment';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      selectdId: 0
    };
    this.fetchData = this.fetchData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.availableDaysDisplay = this.availableDaysDisplay.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axiosAction("/schedules", GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    }, () => { });
  }

  deleteData() {
    const deleteReq = {
      url: "/schedules/" + this.state.selectdId,
      method: DELETE,
      callback: (res) => {
        axiosActions([fetchReq]);
      },
      data: {}
    }

    const fetchReq = {
      url: "/schedules",
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
        title: "Doctor Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {/* <img alt="" src={record.image} /> */}
            </a>
            {record.doctor?.lastName + " " + record.doctor?.firstName}
          </div>
        ),
      },

      {
        title: "Department",
        render: (text, record) => (
          <div>
            {record.doctor?.department?.name}
          </div>
        )

      },
      {
        title: "Available Days",
        render: (text, record) => (
          <div>
            {
              this.availableDaysDisplay(record.availableDays)
            }
          </div>
        )

      },
      {
        title: "Available Time",
        render: (text, record) =>
          (
            <div>
              {
                toMoment(record.start).format("LT") + "-" + toMoment(record.end).format("LT")
              }
            </div>
          )
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={`/admin/schedules/update/${record.id}`}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
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
                to="/admin/schedules/add"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Schedule
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  loading={this.state.loading}
                  className="table-striped"
                  style={{ overflowX: "auto" }}
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

export default Schedule;
