import React, { Component } from "react";
import { Table } from "antd";
import { User_img,Sent_img } from "../../imagepath"
import { Tag } from 'antd';
import OpenChat from "../../sidebar/openchatheader"
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';

class Leave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          image: User_img,
          Name:'Haylie Feeney',
          Employee: 'Laboratorist',
          Leave: 'Casual Leave',
          From:'13 May 2018',
          To:'13 May 2018',
          Days: "2 days",
          Reason: 'Not feeling well',
         tags: 'New',
         },
         {
            id: 2,
            image: User_img,
            Name:'Cristina Groves',
            Employee: 'Doctor',
            Leave: 'Medical Leave',
            From:'13 Jul 2018',
            To:'15 Jul 2018',
            Days: "3 days",
            Reason: 'Going to Vacation',
           tags: 'Declined',
           },
           {
            id: 3,
            image: User_img,
            Name:'Mary Mericle',
            Employee: 'Accountant',
            Leave: 'Casual Leave',
            From:'27 Jun 2018',
            To:'28 Jun 2018',
            Days: "2 days",
            Reason: 'Going to Native Place',
           tags: 'Approved',
           },
           {
            id: 4,
            image: User_img,
            Name:'Albina Simonis',
            Employee: 'Nurse',
            Leave: 'Casual Leave',
            From:'8 Aug 2018',
            To:'8 Aug 2018',
            Days: "1 days",
            Reason: 'Family Function',
           tags: 'New',
           },


      ],
    };
  }
  componentDidMount(){
    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY'
      });
    }
    if ($('.floating').length > 0) {
			$('.floating').on('focus blur', function(e) {
				$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
			}).trigger('blur');
		}
  }
  render() {
    const { data } = this.state;
    const type = [
      { value: 'select', label: 'select' },
      { value: 'Casual Leave', label: 'Casual Leave' },
      { value: 'Medical Leave', label: 'Medical Leave' }
    ]
    const status = [
      { value: 'Pending', label: 'Pending' },
      { value: 'Approved', label: 'Approved' },
      { value: 'Rejected', label: 'Rejected' }
    ]
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
            title: "Leave Type",
            dataIndex: "Leave",
            sorter: (a, b) => a.Leave.length - b.Leave.length,
        },
        {
            title: "From",
            dataIndex: "From",
            sorter: (a, b) => a.From.length - b.From.length,
        },
        {
            title: "To",
            dataIndex: "To",
            sorter: (a, b) => a.To.length - b.To.length,
        },
        {
            title: "No of Days",
            dataIndex: "Days",
            sorter: (a, b) => a.Days.length - b.Days.length,
        },
        {
            title: "Reason",
            dataIndex: "Reason",
            sorter: (a, b) => a.Reason.length - b.Reason.length,
        },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (          
          <Tag color={text === 'Approved' ? "green" : text === 'Declined' ? "red" : "purple"} key={text} className="custom-badge">
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
          <Link className="dropdown-item" to="/edit-leave"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
          <a className="dropdown-item" href="#" title="Decline" data-toggle="modal" data-target="#delete_approve"><i className="fas fa-trash m-r-5" /> Delete</a>
        </div>
      </div>
        ),
       
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
        <div className="row">
          <div className="col-sm-8 col-6">
            <h4 className="page-title">Leave Request</h4>
          </div>
          <div className="col-sm-4 col-6 text-right m-b-30">
            <Link to="/add-leave" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Leave</Link>
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
              <label className="focus-label">Leave Type</label>
              <select className="form-control select floating">
                <option> -- Select -- </option>
                <option>Casual Leave</option>
                <option>Medical Leave</option>
                <option>Loss of Pay</option>
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
        <div id="delete_approve" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Leave Request?</h3>
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

export default Leave;
