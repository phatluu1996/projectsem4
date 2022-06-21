
import React, { Component } from "react";

import { Table } from "antd";
import OpenChat from "../../../sidebar/openchatheader";

import {
  itemRender,
  onShowSizeChange,
} from "../../../../components/paginationfunction";


class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
           age: '33',
           date:'2008/11/28',
           salary:'	$162,700'
        },
        {
            id: 2,
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
             age: '40',
             date:'2009/10/09',
             salary:'$1,200,000'
          },
          {
            id: 3,
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
             age: '66',
             date:'2009/01/12',
             salary:'$86,000'
          },
          {
            id: 4,
            name: 'Bradley Greer',
            position: 'Software Engineer',
            office: 'London',
             age: '41',
             date:'2012/10/13',
             salary:'$86,000'
          },
          {
            id: 5,
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
             age: '33',
             date:'2008/11/28',
             salary:'	$162,700'
          },
          {
            id: 6,
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
             age: '40',
             date:'2009/10/09',
             salary:'$1,200,000'
          },
          {
            id: 7,
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
             age: '66',
             date:'2009/01/12',
             salary:'$86,000'
          },
          {
            id: 8,
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
             age: '66',
             date:'2009/01/12',
             salary:'$86,000'
          },
          {
            id: 9,
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'New York',
             age: '21',
             date:'	2011/12/12',
             salary:'$106,450'
          },
          {
            id: 10,
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
             age: '46',
             date:'2011/12/06',
             salary:'$145,600'
          },
          {
            id: 11,
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
             age: '22',
             date:'	2012/03/29',
             salary:'$433,060'
          },
      ],
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
    
      {
        title: "Position",
        dataIndex: "position",
        sorter: (a, b) => a.position.length - b.position.length,
       
      },
      {
        title: "Office",
        dataIndex: "office",
        sorter: (a, b) => a.office.length - b.office.length,
      },
      {
        title: "Age",
        dataIndex: "age",
        sorter: (a, b) => a.age.length - b.age.length,
      },
      {
        title: "Start Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Salary",
        dataIndex: "salary",
        sorter: (a, b) => a.salary.length - b.salary.length,
      },

    ];

    return (
      <div className="page-wrapper">
        <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Data Tables</h4>
                    </div>
                </div>
          <div className="row">
            <div className="col-md-12">
            <div className="card-box">
                <div className="card-block">
            <h6 className="card-title text-bold">Default Datatable</h6>
                <p className="content-group">
                  This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
             </p>
                <Table
                   className="table-striped"
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
        </div>
             <OpenChat/>
      </div>
    );
  }
}

export default DataTable;
