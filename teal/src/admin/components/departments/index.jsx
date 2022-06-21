import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../sidebar/openchatheader"
import { Sent_img } from "../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          Department: 'Cancer Department',
          tags: 'active',
         },
         {
          id: 2,
          Department: 'Dentists',
          tags: 'Inactive',
         },
         {
          id: 3,
          Department: 'ENT Department',
          tags: 'active',
         },
         {
          id: 4,
          Department: 'Neurology',
          tags: 'Inactive',
         },
         {
          id: 5,
          Department: 'Opthalmology',
          tags: 'Inactive',
         },

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
        title: "#",
        dataIndex: "id",
      },
      {
        title: "Department Name",
        dataIndex: "Department",
        render: (text, record) => <div>{text}</div>,
        sorter: (a, b) => a.Department.length - b.Department.length,
       
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <Tag color={text.length > 6 ? "green" : "red"} key={text} className="custom-badge">
            {text}
          </Tag>
        ),
        sorter: (a, b) => a.tags.length - b.tags.length,
       
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-department"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_department"><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Departments</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-department"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Departments
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped right-item"
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
        <div id="delete_department" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Department?</h3>
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

export default Departments;
