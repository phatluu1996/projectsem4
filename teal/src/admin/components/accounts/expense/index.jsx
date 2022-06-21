import React, { Component } from "react";
import { Table } from "antd";
import { Sent_img } from "../../imagepath"
import OpenChat from "../../sidebar/openchatheader" 
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      show: null,
      data: [
        {
          id: 1,
          item: 'Anaesthetic machine',
          from: 'Biomedical Equipment Inc',
          date: '22 Jun 2018',
          by: 'Tarah Shropshire',
          amount:'$62480',
          paidby:'Cheque',
         tags: 'Approved',
         },
         {
          id: 2,
          item: 'Aspiration/Suction Pump',
          from: 'Medi Pro Service',
          date: '24 Jul 2018',
          by: 'Tarah Shropshire',
          amount:'$3250',
          paidby:'Cheque',
         tags: 'Pending',
         },
         {
          id: 3,
          item: 'Stretcher',
          from: 'Hospital Equipment In',
          date: '17 Aug 2018',
          by: 'Tarah Shropshire',
          amount:'$3250',
          paidby:'Cheque',
         tags: 'Approved',
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
            title: "Item",
            dataIndex: "item",
            sorter: (a, b) => a.item.length - b.item.length,
        },
        {
            title: "Purchase From",
            dataIndex: "from",
            sorter: (a, b) => a.from.length - b.from.length,
        },
        {
            title: "Purchase Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
        },
        {
            title: "Purchase By",
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
        dataIndex: "paidby",
        sorter: (a, b) => a.paidby.length - b.paidby.length,
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
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/edit-expense"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_expense"><i className="fas fa-trash m-r-5" /> Delete</a>
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
            <h4 className="page-title">Expenses</h4>
          </div>
          <div className="col-sm-4 col-7 text-right m-b-30">
            <Link to="/add-expense" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Expense</Link>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <label className="focus-label">Item Name</label>
              <input type="text" className="form-control floating" />
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Purchased By</label>
              <select className="form-control select floating">
                <option> -- Select -- </option>
                <option>Loren Gatlin</option>
                <option>Tarah Shropshire</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <label className="focus-label">Paid By</label>
              <select className="form-control select floating">
                <option> -- Select -- </option>
                <option> Cash </option>
                <option> Cheque </option>
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
        <div id="delete_expense" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this expense?</h3>
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

export default Expense;
