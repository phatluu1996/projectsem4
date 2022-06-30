import React, { Component } from "react";
import { Table } from "antd";
import { User_img, Sent_img } from "../../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import OpenChat from "../../sidebar/openchatheader"
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          image: User_img,
          Name: 'Albina Simonis',
          EmployeeID: 'NS-0001',
          Email: 'albinasimonis@example.com',
          Mobile: '	828-634-2744',
          Date: '7 May 2015',
          tags: 'Nurse'
        },
        {
          id: 2,
          image: User_img,
          Name: 'Cristina Groves',
          EmployeeID: 'NS-0002',
          Email: 'cristinagroves@example.com',
          Mobile: '928-344-5176',
          Date: '7 May 2015',
          tags: 'Doctor',
        },
        {
          id: 3,
          image: User_img,
          Name: 'Mary Mericle',
          EmployeeID: 'NS-0003',
          Email: 'marymericle@example.com',
          Mobile: '603-831-4983',
          Date: '7 May 2015',
          tags: 'Accountant',
        },
        {
          id: 4,
          image: User_img,
          Name: 'Haylie Feeney',
          EmployeeID: 'NS-0004',
          Email: 'hayliefeeney@example.com',
          Mobile: '828-634-2744',
          Date: '7 May 2015',
          tags: 'Accountant',
        },
        {
          id: 5,
          image: User_img,
          Name: 'Zoe Butler',
          EmployeeID: 'NS-0005',
          Email: 'zoebutler@example.com',
          Mobile: '444-555-9999',
          Date: '7 May 2015',
          tags: 'Accountant',
        },

      ],
    };
  }
  componentDidMount() {

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
        title: "Name",
        dataIndex: "Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            {text}
          </div>
        ),
        sorter: (a, b) => a.Name.length - b.Name.length,

      },
      {
        title: "Employee ID",
        dataIndex: "EmployeeID",
        sorter: (a, b) => a.EmployeeID.length - b.EmployeeID.length,
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.length - b.Email.length,
      },
      {
        title: "Mobile",
        dataIndex: "Mobile",
        sorter: (a, b) => a.Mobile.length - b.Mobile.length,
      },
      {
        title: "Join Date",
        dataIndex: "Date",
        sorter: (a, b) => a.Date.length - b.Date.length,
      },
      {
        title: "Role",
        dataIndex: "tags",
        render: (text, record) => (
          <Tag color={text === 'Nurse' ? "green" : text === 'Accountant' ? "purple" : 'red'} key={text} className="custom-badge">
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
              <Link className="dropdown-item" to="/edit-employee"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Employee</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/add-employee" className="btn btn-primary float-right btn-rounded"><i className="fas fa-plus" /> Add Employee</Link>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Employee ID</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Role</label>
                <select className="form-control select floating">
                  <option>Select Role</option>
                  <option>Nurse</option>
                  <option>Pharmacist</option>
                  <option>Laboratorist</option>
                  <option>Accountant</option>
                  <option>Receptionist</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block"> Search </a>
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
        <OpenChat />
        <div id="delete_employee" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Employee?</h3>
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

export default EmployeeList;
