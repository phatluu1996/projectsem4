import React, { Component } from "react";
import { Table } from "antd";
import OpenChat from "../sidebar/openchatheader"
import { Sent_img } from "../imagepath"
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { axiosAction } from '../../../actions';
import { GET } from "../../../constants";
class Departments extends Component {

  constructor(props) {
    super(props);
    super();
    this.state = {
      isComponentWillUnMount: false,
      loading: true,
      data: [],
    };
    this.onChangeDlt = this.onChangeDlt.bind(this)
  }
   

  componentDidMount() {
    this.isComponentWillUnMount = true;
    axiosAction("/departments",GET, res => {
      this.setState({
        data: res.data,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
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

  onChangeDlt = (id) => {
    // axiosAction("/departments",GET, res => {
    //   this.setState({
    //     data: res.data,
    //     loading: false,
    //   });
    // });
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "#",
        dataIndex: "id",
      },
      {
        title: "Department Name",
        dataIndex: "name",
        render: (text, record) => <div>{text}</div>,
        sorter: (a, b) => a.Department.length - b.Department.length,
        
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <Tag color={text ? "green" : "red"} key={text} className="custom-badge">
            {text ? "Active" : "InActive"}
          </Tag>
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
              <Link className="dropdown-item" to={"/admin/departments/update/"+record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" href="#" onChange={this.onChangeDlt(record.id)} data-toggle="modal" data-target="#delete_department"><i className="fas fa-trash m-r-5" /> Delete</a>
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

export default Departments;
