import React, { Component } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader";
import { Sent_img } from "../imagepath"

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          user: "John Doe",
          name: "Anaesthetic machine",
          assetid: "#AST-0001",
          date: "22 Jun 2018",
          warrenty: "4 Years",
          warrentyend: "22 Jun 2022",
          amount: "$62480",
          tags: "Pending",
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
        title: "Asset User",
        dataIndex: "user",
        sorter: (a, b) => a.user.length - b.user.length,
      },
      {
        title: "Asset Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Asset ID",
        dataIndex: "assetid",
        sorter: (a, b) => a.assetid.length - b.assetid.length,
      },
      {
        title: "Purchase Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Warrenty",
        dataIndex: "warrenty",
        sorter: (a, b) => a.warrenty.length - b.warrentylength,
      },
      {
        title: "Warrenty End",
        dataIndex: "warrentyend",
        sorter: (a, b) => a.warrentyend.length - b.warrentyend.length,
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
          <div className="dropdown action-label">
            <a className={`custom-badge status-${text === 'Approved' ? "green" : text === 'Pending' ? "red" : 'purple'} dropdown-toggle`} href="#" data-toggle="dropdown" aria-expanded="false">
              {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Pending</a>
              <a className="dropdown-item" href="#">Approved</a>
              <a className="dropdown-item" href="#">Returned</a>
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
            <Link className="dropdown-item" to="/edit-asset"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash m-r-5" /> Delete</a>
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
            <h4 className="page-title">Assets</h4>
          </div>
          <div className="col-sm-4 col-6 text-right m-b-30">
            <Link to="/add-asset" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Asset</Link>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <label className="focus-label">Employee Name</label>
              <input type="text" className="form-control floating" />
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
          <OpenChat/>
          <div id="delete_asset" className="modal fade delete-modal" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={Sent_img} alt="" width={50} height={46} />
                  <h3>Are you sure want to delete this Asset?</h3>
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

export default Assets;