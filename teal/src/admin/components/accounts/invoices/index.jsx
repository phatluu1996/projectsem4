import React, { Component } from "react";
import { Table } from "antd";
import { Sent_img } from "../../imagepath"
import { Tag } from 'antd';
import DatePicker from "react-datepicker";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          InvoiceNumber: '#INV-0001',
          Patient: 'Charles Ortega',
          Date: '1 Aug 2018',
          DueDate: '7 Aug 2018',
          Amount: '$20',
         tags: ['Paid'],
         },
         {
            id: 2,
            InvoiceNumber: '#INV-0001',
            Patient: 'Charles Ortega',
            Date: '1 Aug 2018',
            DueDate: '7 Aug 2018',
            Amount: '$20',
          tags: ['Sent'],
         },
         {
            id: 3,
            InvoiceNumber: '#INV-0001',
          Patient: 'Charles Ortega',
          Date: '1 Aug 2018',
          DueDate: '7 Aug 2018',
          Amount: '$20',
          tags: ['Partially Paid'],
         },
         {
            id: 4,
            InvoiceNumber: '#INV-0001',
            Patient: 'Charles Ortega',
            Date: '1 Aug 2018',
            DueDate: '7 Aug 2018',
            Amount: '$20',
          tags: ['Sent'],
         },
         {
            id: 5,
            InvoiceNumber: '#INV-0001',
          Patient: 'Charles Ortega',
          Date: '1 Aug 2018',
          DueDate: '7 Aug 2018',
          Amount: '$20',
          tags: ['Paid'],
         },

      ],
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  }; 
  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {


   const status = [
    { value: 'Jan', label: 'Jan' },
    { value: 'Feb', label: 'Feb' },
    { value: 'Mar', label: 'Mar' }
  ]
    const { data } = this.state;

    const columns = [
      
        {
            title: "#",
            dataIndex: "id",
        },
        {
            title: "Invoice Number",
            dataIndex: "InvoiceNumber",
            render: (text, record) => (
              <Link to="/invoice-view">{text}</Link>
            ),
        },
        {
            title: "Patient",
            dataIndex: "Patient",
        },
        {
            title: "Created Date",
            dataIndex: "Date",
        },
        {
          title: "Due Date",
          dataIndex: "DueDate",
      },
      {
        title: "Amount",
        dataIndex: "Amount",
    },
      {
        title: "Role",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag === 'Paid' ? "green" : tag === 'Sent' ? "blue" : 'orange';
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
              <Link className="dropdown-item" to="/edit-invoice"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <Link className="dropdown-item" to="/invoice-view"><i className="far fa-eye m-r-5" /> View</Link>
              <a className="dropdown-item" href="#"><i className="far fa-file-pdf-o m-r-5" /> Download</a>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_invoice"><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Invoices</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/create-invoice"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i>Create new Invoices
              </Link>
            </div>
        </div>
        <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">From</label>
                            <div className="cal-icon">
                            <DatePicker
                                  selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  className="form-control datetimepicker"
                                  />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">To</label>
                            <div className="cal-icon">
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              className="form-control datetimepicker"
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus focused custom_select">
                            <label className="focus-label">Status</label>
                            <select className="form-control select floating">
                              <option>Select Status</option>
                              <option>Pending</option>
                              <option>Paid</option>
                              <option>Partially Paid</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="#0" className="btn btn-success btn-block"> Search </a>
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
        <div id="delete_invoice" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Invoice?</h3>
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

export default Invoice;
