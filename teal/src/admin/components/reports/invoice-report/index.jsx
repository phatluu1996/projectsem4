import React, { Component } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";
import OpenChat from "../../sidebar/openchatheader";
import { Link } from 'react-router-dom';

class InvoiceReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id:1,
          Invoice: 'Anaesthetic machine',
          client:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          due:'Tarah Shropshire',
          amount:'$62480',
          status:'Cheque',
          tags: "Paid",
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
 
    const columns = [
      {
        title: "#",
        dataIndex: "id",
        sorter: (a, b) => a.Invoice.length - b.Invoice.length,
      },
      {
        title: "Invoice Number",
        dataIndex: "Invoice",
        sorter: (a, b) => a.Invoice.length - b.Invoice.length,
      },
      {
        title: "Client",
        dataIndex: "client",
        sorter: (a, b) => a.client.length - b.client.length,
      },
      {
        title: "Created Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Due Date",
        dataIndex: "due",
        sorter: (a, b) => a.by.length - b.by.length,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <span className={`custom-badge status-${text === "Paid" ? "green" : "red"}`}>{text}</span>
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
            <a className="dropdown-item" href="#"><i className="fas fa-trash m-r-5" /> Delete</a>
          </div>
        </div>
        ),
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="page-title">Invoice Report</h4>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Patient</label>
              <select className="form-control select floating">
                <option>Select Client</option>
                <option>Jennifer Robinson</option>
                <option>Terry Baker</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <label className="focus-label">From</label>
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <label className="focus-label">To</label>
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <a href="#" className="btn btn-success btn-block">Search</a>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped right"
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
        </div>
        <OpenChat/>
      </div>
    );
  }
}

export default InvoiceReport;
