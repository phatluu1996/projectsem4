import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import OpenChat from "../sidebar/openchatheader"
import { axiosAction, notify, countAge, numberSort, stringSort } from '../../../actions';
import { GET, DELETE } from "../../../constants";
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import { User_img, Sent_img } from "../imagepath";
import moment from "moment";
class Patients extends Component {


  constructor(props) {
    super(props);
    this.state = {
      show: null,
      idDtl: null,
      loading: true,
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
      tmp = tmp.filter(e => ("PAT-" + e.id).includes(form.id.value));
    }

    if (form.name.value) {
      tmp = tmp.filter(e => (e.firstName.trim() + " " + e.lastName.trim()).includes(form.name.value));
    }

    if (form.email.value) {
      tmp = tmp.filter(e => e.email.includes(form.email.value));
    }

    if (form.phone.value) {
      tmp = tmp.filter(e => e.phoneNumber.includes(form.phone.value));
    }

    this.setState({ filterData: tmp });
  }

  resetFilter(e) {
    let form = e.target;
    form.id.value = '';
    form.name.value = '';
    form.email.value = '';
    form.phone.value = '';
  }

  componentDidMount() {
    this.isComponentWillUnMount = true;
    this.fetchData();
    if ($('.floating').length > 0) {
      $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }).trigger('blur');
    }
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
  }

  fetchData = () => {
    axiosAction("/patients", GET, res => {
      console.log(res);
      this.setState({
        data: res.data,
        filterData: res.data,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
  }

  onClickDlt = () => {
    axiosAction("/patients/" + this.state.idDtl, DELETE, res => {
      notify('success', '', 'Success')
      this.fetchData();
    }, (err) => notify('error', "Error"));
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

  handleDel = (id) => {
    this.setState({
      idDtl: id,
    });
  };



  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        render: (text, record) => <div>{`PAT-${record.id}`}</div>,
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Patient Name",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              {record.imageByteArr && <img alt="" src={record.imageByteArr} />}
            </a>
            {record.lastName + " " + record.firstName}
          </div>
        ),
      },
      {
        title: "Age",
        dataIndex: "dateOfBirth",
        render: (text, record) => <div className="text-center">{countAge(record.dateOfBirth)}</div>,
        sorter: (a, b) => numberSort(countAge(a.dateOfBirth), countAge(b.dateOfBirth)),
      },
      {
        title: "Address",
        dataIndex: "address",
        render: (text, record) => (
          <div>
            {record.address?.line + " " + record.address?.city + " " + record.address?.province + " " + record.address?.country}
          </div>
        ),
        sorter: (a, b) => stringSort(a.address?.line + " " + a.address?.city + " " + a.address?.province + " " + a.address?.country, b.address?.line + " " + b.address?.city + " " + b.address?.province + " " + b.address?.country),
      },
      {
        title: "Phone",
        dataIndex: "phoneNumber",
        sorter: (a, b) => numberSort(a.phoneNumber, b.phoneNumber),
      },
      {
        title: "Email",
        dataIndex: "email",
        sorter: (a, b) => stringSort(a.email, b.email)
      },

      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <div className="dropdown dropdown-action">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-ellipsis-v" /></a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to={"/admin/patients/update/" + record.id}><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
              <a className="dropdown-item" onClick={() => this.handleDel(record.id)} href="#" data-toggle="modal" data-target="#delete_patient">
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
          <form className="row filter-row" noValidate onSubmit={this.filterData} onReset={this.resetFilter}>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label" >Patient ID</label>
                <input type="text" className="form-control floating" name="id" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group form-focus">
                <label className="focus-label">Patient Name</label>
                <input type="text" className="form-control floating" name="name" />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group form-focus">
                <label className="focus-label">Patient Email</label>
                <input type="text" className="form-control floating" name="email" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="form-group form-focus">
                <label className="focus-label">Patient Phone</label>
                <input type="text" className="form-control floating" name="phone" />
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
                  loading={this.state.loading}
                  className="table-striped"
                  style={{ overflowX: "scroll" }}
                  columns={columns}
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
        </div>
        <OpenChat />
        <div id="delete_patient" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Patient?</h3>
                <div className="m-t-20">
                  <a className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <a className="btn btn-danger" onClick={this.onClickDlt} data-dismiss="modal">Delete</a>
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
