import React, { Component } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader";
import { Sent_img } from "../imagepath"
import { axiosAction, GET , DELETE } from "../../../actions";
// import { DatePicker } from 'antd';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      idDtl:null,
      data: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.onClickDlt = this.onClickDlt.bind(this);
    this.handleDel = this.handleDel.bind(this);
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
      });
    }, (err) => notify('error', "Error"));
  }

  onClickDlt = () => {
    axiosAction("/assets/"+this.state.idDtl,DELETE, res => {
      notify('success', '','Success')
      this.fetchData();
    },(err) => notify('error', "Error"));
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
        dataIndex: "id",
        sorter: (a, b) => a.id.length - b.id.length,
      },
      {
        title: "Asset Name",
        dataIndex: "assetName",
        sorter: (a, b) => a.assetName.length - b.assetName.length,
      },
      {
        title: "Model",
        dataIndex: "model",
        sorter: (a, b) => a.model.length - b.model.length,
      },
      {
        title: "Supplier",
        dataIndex: "supplier",
        sorter: (a, b) => a.supplier.length - b.supplier.length,
      },
      {
        title: "Cost",
        dataIndex: "cost",
        sorter: (a, b) => a.cost.length - b.cost.length,
      },
      {
        title: "Warranty",
        dataIndex: "warranty",
        sorter: (a, b) => a.warranty.length - b.warranty.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (text, record) => (
          <div className="dropdown action-label">
            <a className={`custom-badge status-${record.status === 'Available' ? "green" : record.status === 'Unavailable' ? "red":""}`} href="#" data-toggle="dropdown" aria-expanded="false">
            {record.status}
            </a>
            {/* <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"></a>
            </div> */}
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
              <Link className="dropdown-item" to={"/admin/assets/update/"+record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
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
                {/* <DatePicker  className={isValid(this.state.data.dateOfBirth)} aria-required
                  showTime={true} format="YYYY-MM-DD" clearIcon={true}
                  allowClear={true}></DatePicker> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <label className="focus-label">To</label>
              <div className="cal-icon">
                {/* <DatePicker className={isValid(this.state.data.dateOfBirth)} aria-required
                  showTime={true} format="YYYY-MM-DD" clearIcon={true}
                  allowClear={true} ></DatePicker> */}
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
                loading={this.state.loading}
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
        <OpenChat />
        <div id="delete_asset" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Asset?</h3>
                <div className="m-t-20"> 
                  <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a  className="btn btn-danger" onClick={this.onClickDlt} data-dismiss="modal">Delete</a>
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
