import React, { Component } from "react";
import { Table } from "antd";
import {Sent_img} from "../../imagepath";
import OpenChat from "../../sidebar/openchatheader";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";
import { Link } from 'react-router-dom';

class LeaveType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          leavetype: "Casual Leave",
          leavedays: "12days",
          tags: "Active",
        },

        {
          id: 2,
          leavetype: "Medical Leave",
          leavedays: "9days",
          tags:"Inactive",
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "#",
        dataIndex: "id",
      },
      {
        title: "Leave type",
        dataIndex: "leavetype",
      },
      {
        title: "Leave Days",
        dataIndex: "leavedays",
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className={`custom-badge status-${text === "Active" ? "green" : "red"} dropdown-toggle`} href="#" data-toggle="dropdown" aria-expanded="false">
              {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Active</a>
              <a className="dropdown-item" href="#">Inactive</a>
            </div>
          </div>
        ),
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
        <div className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="/edit-leave-type"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fas fa-trash m-r-5" /> Delete</a>
        </div>
      </div>
        ),
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-8 col-5">
              <h4 className="page-title">Leave Type</h4>
            </div>
            <div className="col-sm-4 col-7 text-right m-b-30">
              <Link to="/add-leave-type" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Leave Type</Link>
            </div>
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped right"
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
          <OpenChat/>
          <div id="delete_leavetype" className="modal fade delete-modal" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={Sent_img} alt="" width={50} height={46} />
                  <h3>Are you sure want to delete this Leave Type?</h3>
                  <div className="m-t-20"> <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                    <button type="submit" className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveType;
