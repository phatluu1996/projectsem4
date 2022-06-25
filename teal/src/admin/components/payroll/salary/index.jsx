import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../../sidebar/openchatheader" 
import { User_img,Sent_img } from "../../imagepath"
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';
import $ from "jquery"

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          image: User_img,
          employee: 'John Doe',
          employeeid: 'FT-0001',
          email:'johndoe@example.com',
          date:'1 Jan 2013',
          role:'Nurse',
          salary:'$59698',
          payslip:'Generate Slip',
         },
      ],
    };
  }
  componentDidMount(){    
    if ($('.floating').length > 0) {
			$('.floating').on('focus blur', function(e) {
				$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
			}).trigger('blur');
		}
    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY'
      });
    }
  }
  render() {
    const { data } = this.state;
    
    const columns = [
      {
        title: "Employee",
        dataIndex: "employee",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            {text}
          </div>
        ),
        sorter: (a, b) => a.employee.length - b.employee.length,
      },

        {
            title: "Employee ID",
            dataIndex: "employeeid",
            sorter: (a, b) => a.employeeid.length - b.employeeid.length,
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "Joining Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
        },
        {
          title: "Role",
          dataIndex: "role",
          render: (text, record) => (
            <div className="dropdown">
              <a href="#" className="custom-badge status-grey dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{text}</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Laboratorist</a>
                <a className="dropdown-item" href="#">Pharmacist</a>
                <a className="dropdown-item" href="#">Accountant</a>
                <a className="dropdown-item" href="#">Receptionist</a>
              </div>
            </div>
          ),        
        },  
        {
          title: "Salary",
          dataIndex: "salary",
          sorter: (a, b) => a.salary.length - b.salary.length,
        },
        {
          title: "payslip",
          dataIndex: "payslip",
          render: (text, record) => (
            <Link className="btn btn-sm btn-primary generate" to="/salary-view">Generate Slip</Link>
          ),        
        },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/edit-salary"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_salary"><i className="fas fa-trash m-r-5" /> Delete</a>
          </div>
        </div>
        ),
      
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
        <div className="row">
          <div className="col-sm-4 col-5">
            <h4 className="page-title">Employee Salary</h4>
          </div>
          <div className="col-sm-8 col-7 text-right m-b-30">
            <Link to="/add-salary" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Salary</Link>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <label className="focus-label">Employee Name</label>
              <input type="text" className="form-control floating" />
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Role</label>
              <select className="form-control select floating">
                <option> -- Select -- </option>
                <option>Employee</option>
                <option>Manager</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Leave Status</label>
              <select className="form-control select floating">
                <option> -- Select -- </option>
                <option> Pending </option>
                <option> Approved </option>
                <option> Rejected </option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <label className="focus-label">From</label>
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <label className="focus-label">To</label>
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
        <OpenChat/>
        <div id="delete_salary" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Salary?</h3>
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

export default Salary;
