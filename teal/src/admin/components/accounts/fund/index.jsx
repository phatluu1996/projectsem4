import React, { Component } from "react";
import { Table } from "antd";
import { Sent_img } from "../../imagepath"
import { Link } from "react-router-dom";
import OpenChat from "../../sidebar/openchatheader" 
import { itemRender, onShowSizeChange } from "../../paginationfunction";

class Fund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          name: "Albina Simonis",
          type: "Percentage of Basic Salary",
          employeeshare: "2%",
          share: "2%",
          tags: "pending",
        },
      ],
    };
  }
  
  render() {
    const { data } = this.state;

    const columns = [      
      {
        title: "Employee Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Provident Fund Type",
        dataIndex: "type",
        sorter: (a, b) => a.type.length - b.type.length,
      },
      {
        title: "Employee Share",
        dataIndex: "employeeshare",
        sorter: (a, b) => a.employeeshare.length - b.employeeshare.length,
      },
      {
        title: "Organization Share",
        dataIndex: "share",
        sorter: (a, b) => a.share.length - b.share.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className={`custom-badge status-${text === 'Approved' ? "green" : text === 'Pending' ? "red" : 'purple'} dropdown-toggle`} href="#" data-toggle="dropdown" aria-expanded="false">
              {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Pending</a>
              <a className="dropdown-item" href="#">Approved</a>
            </div>
          </div>
        ),
        sorter: (a, b) => a.tags.length - b.tags.length,
      },
      {
        title: "Actions",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-provident-fund"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_pf"><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-5 col-4">
              <h4 className="page-title">Provident Fund</h4>
            </div>
            <div className="col-sm-7 col-8 text-right m-b-30">
              <Link to="/add-provident-fund" className="btn btn-primary btn-rounded"><i className="fas fa-plus" /> Add Provident Fund</Link>
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
        <div id="delete_pf" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this PF?</h3>
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

export default Fund;
