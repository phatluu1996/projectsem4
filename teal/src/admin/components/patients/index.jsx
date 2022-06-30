import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import OpenChat from "../sidebar/openchatheader"
import { axiosAction,notify } from '../../../actions';
import { GET } from "../../../constants";
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img,Sent_img } from "../imagepath";

import moment from "moment";
class Patients extends Component {


  constructor(props) {
    super(props);
    this.state = {
      show: null,
      loading:false,
      data: []
    };
    this.fetchData = this.fetchData.bind(this);
  }



  componentDidMount() {
    this.isComponentWillUnMount = true;
    this.fetchData();
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
  }

  fetchData = () =>{
    axiosAction("/patients",GET, res => {
      console.log(res);
      this.setState({
        data: res.data,
        loading: false,
      });
    },(err) => notify('error', "Error"));
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
  
  countAge = (text) =>{
  const age = moment(text).fromNow().split(" ");
   return age[0];
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "First Name",
        dataIndex: "firstName",
        render: (text, record) => (
          <div className="text-center">{text}</div>
        ),
        sorter: (a, b) => a.Name.length - b.Name.length,
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        render: (text, record) => (
          <div className="text-center">{text}</div>
        ),
        sorter: (a, b) => a.Name.length - b.Name.length,
      },
      {
        title: "Age",
        dataIndex: "dateOfBirth",
        render: (text, record) => <div className="text-center">{this.countAge(text)}</div>,
        sorter: (a, b) => a.Age.length - b.Age.length,
      },
      {
        title: "Address",
        dataIndex: "address",
        sorter: (a, b) => a.Address.length - b.Address.length,
      },
      {
        title: "Phone",
        dataIndex: "phoneNumber",
        sorter: (a, b) => a.Phone.length - b.Phone.length,
      },
      {
        title: "Email",
        dataIndex: "email",
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

    return (!this.state.loading && 
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Patients</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link to="/admin/patients/add" className="btn btn btn-primary btn-rounded float-right" >
                <i className="fa fa-plus"></i> Add Patient
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  loading = {this.state.loading}
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
