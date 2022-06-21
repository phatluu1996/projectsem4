import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import OpenChat from "../sidebar/openchatheader"

import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img,Sent_img } from "../imagepath"

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          image: User_img,
          Name: "Dr. Ruby",
          Age: "32",
          Address: "3169 Birch Street, El Paso, TX, 79915",
          Phone: "(380) 141 1885",
          Email: "charlesortega@example.com",
        },
        {
          id: 2,
          image: User_img,
          Name: "Denise",
          Age: "30",
          Address: "1603 Old York Rd, Abington, PA, 19001",
          Phone: "(836) 257 1379",
          Email: "denisestevens@example.com",
        },
        {
          id: 3,
          image: User_img,
          Name: "Dennis",
          Age: "25",
          Address: "891 Juniper Drive, Saginaw, MI, 48603",
          Phone: "(933) 137 6201",
          Email: "dennissalazar@example.com",
        },
        {
          id: 4,
          image: User_img,
          Name: "Jennifer",
          Age: "35",
          Address: "1545 Dorsey Ln NE, Leland, NC, 28451",
          Phone: "(207) 808 8863",
          Email: "jenniferrobinson@example.com"	
          ,
        },
        {
          id: 5,
          image: User_img,
          Name: "Joshua",
          Age: "32",
          Address: "4712 Spring Creek Dr, Bonita Springs, FL, 34134",
          Phone: "(407) 554 4146",
          Email: "joshuaguzman@example.com",
        },
        {
          id: 6,
          image: User_img,
          Name: "Judy Clark",
          Age: "22",
          Address: "4093 Woodside Circle, Pensacola, FL, 32514",
          Phone: "(359) 969 3594",
          Email: "judy.clark@example.com",
        },
        {
          id: 7,
          image: User_img,
          Name: "Julia Sims",
          Age: "27",
          Address: "517 Walker Dr, Houma, LA, 70364, United States",
          Phone: "(680) 432 2662",
          Email: "juliasims@example.com",
        },
        {
          id: 8,
          image: User_img,
          Name: "Kyle Bowman",
          Age: "32",
          Address: "5060 Fairways Cir #APT 207, Vero Beach, FL, 32967",
          Phone: "(981) 756 6128",
          Email: "kylebowman@example.com",
        },
        {
          id: 9,
          image: User_img,
          Name: "Linda",
          Age: "32",
          Address: "3169 Birch Street, El Paso, TX, 79915",
          Phone: "(380) 141 1885",
          Email: "charlesortega@example.com",
        },
        {
          id: 10,
          image: User_img,
          Name: "Marie Howard",
          Age: "32",
          Address: "3169 Birch Street, El Paso, TX, 79915",
          Phone: "(380) 141 1885",
          Email: "charlesortega@example.com",
        },
        {
          id: 11,
          image: User_img,
          Name: "Marie Howard",
          Age: "32",
          Address: "3169 Birch Street, El Paso, TX, 79915",
          Phone: "(380) 141 1885",
          Email: "charlesortega@example.com",
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
        title: "Age",
        dataIndex: "Age",
        render: (text, record) => <div className="text-center">{text}</div>,
        sorter: (a, b) => a.Age.length - b.Age.length,
      },
      {
        title: "Address",
        dataIndex: "Address",
        sorter: (a, b) => a.Address.length - b.Address.length,
      },
      {
        title: "Phone",
        dataIndex: "Phone",
        sorter: (a, b) => a.Phone.length - b.Phone.length,
      },
      {
        title: "Email",
        dataIndex: "Email",
        sorter: (a, b) => a.Email.length - b.Email.length,
      },

      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/edit-patient"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_patient">
                <i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Patients</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/add-patients" className="btn btn btn-primary btn-rounded float-right" >
                <i className="fa fa-plus"></i> Add Patient
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
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
        <OpenChat/>
        <div id="delete_patient" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Patient?</h3>
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

export default Patients;
