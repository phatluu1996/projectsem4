import React, { Component } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";
import OpenChat from "../../sidebar/openchatheader";
import { Link } from 'react-router-dom';

class ExpenseReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id:1,
          item: 'Anaesthetic machine',
          from:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          by:'Tarah Shropshire',
          amount:'$62480',
          paid:'Cheque',
          tags: "Approved",
         },
         {
           id:2,
          item: 'Stretcher',
          from:'Biomedical Equipment Inc',
          date:'28 Jun 2018',
          by:'	Loren Gatlin',
          amount:'$60480',
          paid:'Cash',
          tags: "Pending",
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
        title: "Item",
        dataIndex: "item",
        sorter: (a, b) => a.item.length - b.item.length,
      },
      {
        title: "Purchase type",
        dataIndex: "from",
        sorter: (a, b) => a.from.length - b.from.length,
      },
      {
        title: "Purchase Days",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Purchased By",
        dataIndex: "by",
        sorter: (a, b) => a.by.length - b.by.length,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Paid By",
        dataIndex: "paid",
        sorter: (a, b) => a.paid.length - b.paid.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className={`custom-badge status-${text === "Approved" ? "green" : "red"} dropdown-toggle`} href="#" data-toggle="dropdown" aria-expanded="false">
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
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-expense"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fas fa-trash m-r-5" /> Delete</a>
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
            <h4 className="page-title">Expense Report</h4>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Purchased By</label>
              <select className="form-control select floating">
                <option>Select buyer</option>
                <option>Loren Gatlin</option>
                <option>Tarah Shropshire</option>
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
            <a href="#" className="btn btn-success btn-block"> Search </a>
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

export default ExpenseReport;
