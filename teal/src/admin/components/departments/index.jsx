import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../sidebar/openchatheader"
import { Sent_img } from "../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { axiosAction,notify, numberSort, stringSort } from '../../../actions';
import { GET,DELETE } from "../../../constants";
import { buildQueries } from "@testing-library/react";
 
class Departments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isComponentWillUnMount: false,
      loading: true,
      data: [],
      idDtl:""
    };
    this.handleDel = this.handleDel.bind(this);
    this.onClickDlt = this.onClickDlt.bind(this);
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
    axiosAction("/departments",GET, res => {
      console.log(res);
      this.setState({
        data: res.data,
        loading: false,
      });
    },(err) => notify('error', "Error"));
  }

  handleClose = () => {
    this.setState({
      loading: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      loading: id,
    });
  };

  handleDel = (id) => {
    this.setState({
      idDtl: id,
    });
  };

  onClickDlt = () => {
    axiosAction("/departments/"+this.state.idDtl,DELETE, res => {
      notify('success', '','Success')
      this.fetchData();
    },(err) => notify('error', "Error"));
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        render: (text, record) => <div>{`DEP-${record.id}`}</div>,
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Department Name",
        dataIndex: "name",
        render: (text, record) => <div>{record.name}</div>,
        sorter: (a, b) => stringSort(a.name, b.name)
        
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <Tag color={text ? "green" : "red"} key={record.status} className="custom-badge">
            {record.status ? "Active" : "InActive"}
          </Tag>
        ),
        sorter: (a, b) => stringSort(a.status ? "Active" : "InActive", buildQueries.status ? "Active" : "InActive")

      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={"/admin/departments/update/"+record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" onClick={() => this.handleDel(record.id)} href="#" data-toggle="modal" data-target="#delete_department"><i className="fas fa-trash m-r-5" /> Delete</a>
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
              <h4 className="page-title">Departments</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/admin/departments/add"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Departments
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  loading = {this.state.loading}
                  className="table-striped right-item"
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.id}
                  showSizeChanger={true}
                  onChange={(e)=>handleProceed(e)}
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
        <OpenChat />
        <div id="delete_department" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Department?</h3>
                <div className="m-t-20"> 
                  <a  className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a  className="btn btn-danger" onClick={this.onClickDlt} data-dismiss="modal">Delete</a>
                  {/* <button onClick={() => this.onClickDlt()} className="btn btn-danger">Delete</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Departments;
