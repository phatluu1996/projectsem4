import React, { Component } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader";
import { Sent_img } from "../imagepath"
import { axiosAction, GET, DELETE, numberSort, stringSort, notify } from "../../../actions";
// import { DatePicker } from 'antd';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      idDtl: null,
      data: [],
      filterData: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.onClickDlt = this.onClickDlt.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.filterData = this.filterData.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  filterData(e) {
    e.preventDefault();
    let form = e.target;
    let tmp = [...this.state.data];
    if (form.id.value) {
      tmp = tmp.filter(e => ("AST-" + e.id).includes(form.id.value));
    }

    if (form.assetName.value) {
      tmp = tmp.filter(e => e.assetName.includes(form.assetName.value));
    }

    if (form.employeeName.value) {
      tmp = tmp.filter(e => (e.employee?.lastName + " " + e.employee?.firstName).includes(form.employeeName.value));
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    let form = e.target;
    form.id.value = '';
    form.employeeName.value = '';
    form.assetName.value = '';
  }

  componentDidMount() {
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
    this.fetchData();
  }

  fetchData = () => {
    axiosAction("/assets", GET, res => {
      console.log(res);
      this.setState({
        data: res.data,
        loading: false,
        filterData: res.data,
      });
    }, (err) => notify('error', "Error"));
  }

  onClickDlt = () => {
    axiosAction("/assets/" + this.state.idDtl, DELETE, res => {
      notify('success', '', 'Success')
      this.fetchData();
    }, (err) => notify('error', "Error"));
  }

  handleDel = (id) => {
    this.setState({
      idDtl: id,
    });
  };

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Asset ID",
        render: (text, record) => (
          <div>
            {"AST-" + record.id}
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id),
      },
      {
        title: "Assigned Employee",
        render: (text, record) => (
          (record.employee != null && <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {record.employee.imageByteArr && <img alt="" src={record.employee.imageByteArr} />}
            </a>
            {record.employee?.lastName + " " + record.employee?.firstName}
          </div>)
        ),
        sorter: (a, b) => stringSort(a.employee?.lastName + " " + a.employee?.firstName, b.employee?.lastName + " " + b.employee?.firstName),
      },
      {
        title: "Asset Name",
        render: (text, record) => (
          <div>
            {record.assetName}
          </div>
        ),
        sorter: (a, b) => stringSort(a.assetName, b.assetName),
      },
      {
        title: "Cost($)",
        render: (text, record) => (
          <div>
            {record.cost}
          </div>
        ),
        sorter: (a, b) => numberSort(a.cost, b.cost),
      },
      {
        title: "Warranty(month)",
        render: (text, record) => (
          <div>
            {record.warranty}
          </div>
        ),
        sorter: (a, b) => numberSort(a.warranty, b.warranty),
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className={`custom-badge status-${record.status === 'Available' ? "green" : record.status === 'Unavailable' ? "red" : ""}`} href="#" data-toggle="dropdown" aria-expanded="false">
              {record.status}
            </a>
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
              <Link className="dropdown-item" to={"/admin/assets/update/" + record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" onClick={() => this.handleDel(record.id)} href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash m-r-5" /> Delete</a>
            </div>
          </div>
        ),
      },
    ];

    return (!this.state.loading && <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-sm-8 col-6">
            <h4 className="page-title">Assets</h4>
          </div>
          <div className="col-sm-4 col-6 text-right m-b-30">
            <Link to="/admin/assets/add" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Asset</Link>
          </div>
        </div>
        <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
          <div className="col-sm-2">
            <div className="form-group form-focus">
              <label className="focus-label" >Asset ID</label>
              <input type="text" className="form-control floating" name="id" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group form-focus">
              <label className="focus-label">Employee Name</label>
              <input type="text" className="form-control floating" name="employeeName" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group form-focus">
              <label className="focus-label">Asset Name</label>
              <input type="text" className="form-control floating" name="assetName" />
            </div>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-success btn-block" type='submit'> Search </button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-danger btn-block" type='reset'> Reset </button>
          </div>
        </form>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "auto" }}
                columns={columns}
                loading={this.state.loading}
                // bordered
                dataSource={this.state.filterData}
                rowKey={(record) => record.id}
                showSizeChanger={true}
                pagination={{
                  total: this.state.filterData.length,
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
        <OpenChat />
        <div id="delete_asset" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Asset?</h3>
                <div className="m-t-20">
                  <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a className="btn btn-danger" onClick={this.onClickDlt} data-dismiss="modal">Delete</a>
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
