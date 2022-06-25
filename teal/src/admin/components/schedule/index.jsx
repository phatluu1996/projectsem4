import React, { Component } from "react";
import { Table } from "antd";
import { Tag } from 'antd';
import {Link} from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader" 
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img,Sent_img } from "../imagepath"

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          image: User_img,
          Name: "Denise Stevens",
          Department: "Cardiology",
          Days: 'Sunday, Monday, Tuesday',
          Time: '10:00 AM - 7:00 PM',
          tags: ['Inactive'],
         }

      ],
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const { data } = this.state;

    const columns = [

      {
        title: "Doctor Name",
        dataIndex: "Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            {text}
          </div>
        ),
       
      },
      
      {
        title: "Department",
        dataIndex: "Department",
       
      },
      {
        title: "Available Days",
        dataIndex: "Days",
        
      },
      {
        title: "Available Time",
        dataIndex: "Time",
        
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 6 ? "green" : "red";
              return (
                <Tag color={color} key={tag} className="custom-badge">
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
       
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-schedule"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_schedule"><i className="fas fa-trash m-r-5" /> Delete</a>
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
                to="/add-schedule"
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
        <OpenChat/>
        <div id="delete_schedule" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Schedule?</h3>
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

export default Schedule;
