import React, { Component } from "react";
import { Link } from "react-router-dom";
import OpenChat from "../../sidebar/openchatheader";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";


class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          invoiceid: '#INV-0001',
          patient: 'Charles Ortega',
          paymenttype: 'Paypal',
          date: '	8 Aug 2017',
          amount:'$500',
        },
        {
          id: 2,
          invoiceid: '#INV-0002',
          patient: 'Denise Stevens',
          paymenttype: 'Paypal',
          date: '	10 Aug 2017',
          amount:'$500',
        }
   
      ],
    };
  }

  render() {
    const { data } = this.state;

    const columns = [
    
      {
        title: "Invoice Id",
        dataIndex: "invoiceid",
        render: (text, record) => <Link to="/invoice-view">{text}</Link>,
        sorter: (a, b) => a.invoiceid.length - b.invoiceid.length,
      },
      {
        title: "Patient",
        dataIndex: "patient",
        sorter: (a, b) => a.patient.length - b.patient.length,
      },
      {
        title: "Payment Type",
        dataIndex: "paymenttype",
        sorter: (a, b) => a.paymenttype.length - b.paymenttype.length,
      },
      {
        title: "Paid Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Paid Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount.length - b.amount.length,
      }, 
   
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Payments</h4>
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
      </div>
    );
  }
}

export default Payments;
