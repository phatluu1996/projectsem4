import React, { Component } from "react";
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { Sent_img } from "../../imagepath"
import OpenChat from "../../sidebar/openchatheader"

import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";


class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          Title: 'New Year',
          Holiday: '1 Jan 2018',
          Day: 'Monday',
          enabled: false
         },
         {
            id: 2,
            Title: 'New Year',
            Holiday: '13 Apr 2018',
            Day: 'Friday',
            enabled: false
           }, 
           {
            id: 3,
            Title: 'May Day',
            Holiday: '1 May 2018',
            Day: 'Tuesday',
            enabled: false
           },
           {
            id: 4,
            Title: 'Memorial Day',
            Holiday: '28 May 2018',
            Day: 'Monday',
            enabled: false
           },
           {
            id: 5,
            Title: 'Bakrid',
            Holiday: '23 Aug 2018',
            Day: 'Wednesday',
            enabled: true
           },
           {
            id: 6,
            Title: 'Deepavali',
            Holiday: '18 Oct 2018',
            Day: 'Wednesday',
            enabled: true
           },
      ],
    };
  }
  render() {
    const { data } = this.state;

    const columns = [

        {
            title: "#",
            dataIndex: "id",   
        },
        {
            title: "Title",
            dataIndex: "Title",
        },
        {
            title: "Holiday Date",
            dataIndex: "Holiday",
        },
        {
            title: "Day",
            dataIndex: "Day",
        },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/edit-holiday"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Holidays</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-holiday"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Holidays
              </Link>
            </div>
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  rowClassName={record => record.enabled === false && "disabled-row"}
                  className="table-striped right"
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
        <div id="delete_holiday" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Holiday?</h3>
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

export default Holidays;
