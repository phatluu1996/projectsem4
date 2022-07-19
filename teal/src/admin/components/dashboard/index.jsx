import React, { Component } from "react";
import { Link } from "react-router-dom";
import { User_img } from '../imagepath';
import LineChart from "./linechart";
import BarChart from "./barchart";
import { GET } from '../../../constants';
import { axiosAction, notify } from '../../../actions';
import { Table } from "antd";
import { toMoment } from "../../../utils";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount() {
    $('.bar-chart').find('.item-progress').each(function () {
      var itemProgress = $(this),
        itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
      itemProgress.css('width', itemProgressWidth);
    });

    axiosAction("/dashboard-info", GET, (res) => {
      this.setState({ data: res.data });
      this.setState({ loading: false });
    }, (err) => notify('error', 'Error'));
  }
  render() {
    const columns = [
      {
        title: "Patient Name",
        render: (text, record) => (
          <div>
            <div className="table-avatar">
              <a href="#0" className="avatar avatar-sm mr-2">
                {record.patient?.imageByteArr && <img alt="" src={record.patient?.imageByteArr} />}
              </a>
              {record.patient?.lastName + " " + record.patient?.firstName}
            </div>
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Doctor Name",
        render: (text, record) => (
          <div>
            <div className="table-avatar">
              <a href="#0" className="avatar avatar-sm mr-2">
                {record.doctor.employee.imageByteArr && <img alt="" src={record.doctor.employee.imageByteArr} />}
              </a>
              {record.doctor?.employee.lastName + " " + record.doctor?.employee.firstName}
            </div>
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      },
      {
        title: "Timing",
        render: (text, record) => (
          <div>
            <p>{record.date ? toMoment(record.date).format('DD-MM-YYYY HH:mm') : ""}</p>
          </div>
        ),
        sorter: (a, b) => numberSort(a.id, b.id)
      }
    ];

    return (

      !this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1"><i className="fas fa-stethoscope" aria-hidden="true" /></span>
                <div className="dash-widget-info text-right">
                  <h3>{this.state.data?.totalDoctor}</h3>
                  <span className="widget-title1">Doctors <i className="fas fa-check" aria-hidden="true" /></span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg2"><i className="fas fa-user" /></span>
                <div className="dash-widget-info text-right">
                  <h3>{this.state.data?.totalPatient}</h3>
                  <span className="widget-title2">Patients <i className="fas fa-check" aria-hidden="true" /></span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg3"><i className="fas fa-user-md" aria-hidden="true" /></span>
                <div className="dash-widget-info text-right">
                  <h3>{this.state.data?.totalEmployee}</h3>
                  <span className="widget-title3">Employee <i className="fas fa-check" aria-hidden="true" /></span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg4"><i className="fas fa-heartbeat" aria-hidden="true" /></span>
                <div className="dash-widget-info text-right">
                  <h3>{this.state.data?.totalPending}</h3>
                  <span className="widget-title4">Pending <i className="fas fa-check" aria-hidden="true" /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title">
                    <h4 className="title is-3">Patient Total</h4>
                  </div>
                  <LineChart data={this.state.data?.patientYear} />
                  {/* <canvas id="canvas" /> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title">
                    <h4 className="title is-3">Patients In June</h4>
                  </div>
                  <BarChart data={this.state.data?.patientMonth} />
                  {/* <canvas id="bargraph" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Upcoming Appointments</h4>
                </div>
                <div className="card-body p-0">
                  <Table
                    loading={this.state.loading}

                    className="table-striped"
                    style={{ overflowX: "scroll" }}
                    columns={columns}
                    // bordered
                    dataSource={this.state.data?.appointments?.content}
                    rowKey={(record) => record.id}
                    showSizeChanger={true}
                    pagination={{
                      pageSize: 5,
                      total: this.state.data?.appointments?.content.length,
                      showTotal: (total, range) =>
                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card member-panel">
                <div className="card-header bg-white">
                  <h4 className="card-title m-b-0">Doctors</h4>
                </div>
                <div className="card-body">
                  <ul className="contact-list">
                    {this.state.data?.doctors.map((doctor) => {
                      return (<li>
                        <div className="contact-cont">
                          <div className="float-left user-img m-r-10">
                            <a><img src={doctor.employee.imageByteArr} alt="" className="w-40 rounded-circle" /><span className="status online" /></a>
                          </div>
                          <div className="contact-info">
                            <span className="contact-name text-ellipsis">{doctor.employee.lastName + " " + doctor.employee.firstName}</span>
                            <span className="contact-date">{doctor.department?.name}</span>
                          </div>
                        </div>
                      </li>);
                    })}

                  </ul>
                </div>
                <div className="card-footer text-center bg-white">
                  <Link to="/admin/doctors" className="text-muted">View all Doctors</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">New Patients </h4>
                </div>
                <div className="card-block">
                  <div className="table-responsive">
                    <table className="table m-b-0 new-patient-table">
                      <thead>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                      </thead>
                      <tbody>
                        <tr></tr>
                        {this.state.data?.newPatients?.map((patient) => {
                          return (
                            <tr>
                              <td>
                                <img width={28} height={28} className="rounded-circle" src={patient.imageByteArr} />
                                <h2>{patient.lastName + " " + patient.firstName}</h2>
                              </td>
                              <td>{patient.email}</td>
                              <td>{patient.phoneNumber}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <div className="hospital-barchart">
                <h4 className="card-title d-inline-block">Hospital Management</h4>
              </div>
              <div className="bar-chart">
                <div className="legend">
                  <div className="item">
                    <h4>Level1</h4>
                  </div>
                  <div className="item">
                    <h4>Level2</h4>
                  </div>
                  <div className="item text-right">
                    <h4>Level3</h4>
                  </div>
                  <div className="item text-right">
                    <h4>Level4</h4>
                  </div>
                </div>
                <div className="chart clearfix">
                  <div className="item">
                    <div className="bar">
                      <span className="percent">{this.state.data?.countDoctor}%</span>
                      <div className="item-progress" data-percent={12}>
                        <span className="title">Doctor</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bar">
                      <span className="percent">{this.state.data?.countReceptionist}%</span>
                      <div className="item-progress" data-percent={71}>
                        <span className="title">Receptionist</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bar">
                      <span className="percent">{this.state.data?.countNurse}%</span>
                      <div className="item-progress" data-percent={82}>
                        <span className="title">Nurse</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bar">
                      <span className="percent">{this.state.data?.countAccountant}%</span>
                      <div className="item-progress" data-percent={67}>
                        <span className="title">Accountant</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bar">
                      <span className="percent">{this.state.data?.countOther}%</span>
                      <div className="item-progress" data-percent={20}>
                        <span className="title">Orthers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll">
              <ul className="list-box">
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Tarah Shropshire </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Catherine Manseau </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">D</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Domenic Houston </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">B</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Buster Wigton </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Rolland Webber </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">C</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Claire Mapes </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">M</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Melita Faucher</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Jeffery Lalor</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">L</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Loren Gatlin</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Tarah Shropshire</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="/chat">See all messages</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
