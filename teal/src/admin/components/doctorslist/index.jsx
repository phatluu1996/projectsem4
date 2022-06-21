import React, { Component } from "react";
import {Link } from "react-router-dom";
import { Doctor_thumb_03,Sent_img } from "../imagepath"

class Doctors extends Component {
  
  render() {
    return (
      <>
       <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Doctors</h4>
              </div>
              <div className="col-sm-8 col-9 text-right m-b-20">
                <Link to="/add-doctor" className="btn btn-primary btn-rounded float-right"><i className="fas fa-plus" /> Add Doctor</Link>
              </div>
            </div>
            <div className="row doctor-grid">
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Cristina Groves</Link></h4>
                  <div className="doc-prof">Gynecologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Marie Wells</Link></h4>
                  <div className="doc-prof">Psychiatrist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Henry Daniels</Link></h4>
                  <div className="doc-prof">Cardiologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Mark Hunter</Link></h4>
                  <div className="doc-prof">Urologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <a className="avatar" href="#"><img alt="" src={Doctor_thumb_03} /></a>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Michael Sullivan</Link></h4>
                  <div className="doc-prof">Ophthalmologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Linda Barrett</Link></h4>
                  <div className="doc-prof">Dentist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Ronald Jacobs</Link></h4>
                  <div className="doc-prof">Oncologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Albert Sandoval</Link></h4>
                  <div className="doc-prof">Neurologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Diana Bailey</Link></h4>
                  <div className="doc-prof">General Surgery</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Shirley Willis</Link></h4>
                  <div className="doc-prof">Radiologist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Pamela Curtis</Link></h4>
                  <div className="doc-prof">Pediatrics</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-6 col-lg-3">
                <div className="profile-widget">
                  <div className="doctor-img">
                    <Link className="avatar" to="/profile"><img alt="" src={Doctor_thumb_03} /></Link>
                  </div>
                  <div className="dropdown profile-action">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="/edit-doctor"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i className="fas fa-trash m-r-5" /> Delete</a>
                    </div>
                  </div>
                  <h4 className="doctor-name text-ellipsis"><Link to="/profile">Justin Parker</Link></h4>
                  <div className="doc-prof">Physical Therapist</div>
                  <div className="user-country">
                    <i className="fas fa-map-marker-alt" /> United States, San Francisco
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="see-all">
                  <a className="see-all-btn" href="">Load More</a>
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
        <div id="delete_doctor" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={Sent_img} alt="" width={50} height={46} />
                <h3>Are you sure want to delete this Doctor?</h3>
                <div className="m-t-20"> <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                  <button type="submit" className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Doctors;
