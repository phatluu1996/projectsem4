import React, { Component } from "react";
import OpenChat from "../../sidebar/openchatheader"

class Inbox extends Component {
    render() {
        return (
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="page-title">Inbox</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card-box">
                    <div className="email-header">
                      <div className="row">
                        <div className="col-sm-10 col-md-8 col-8 top-action-left">
                          <div className="float-left">
                            <div className="btn-group dropdown-action">
                              <button type="button" className="btn btn-white dropdown-toggle mr-0" data-toggle="dropdown">Select <i className="fas fa-angle-down" /></button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">None</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Read</a>
                                <a className="dropdown-item" href="#">Unread</a>
                              </div>
                            </div>
                            <div className="btn-group dropdown-action">
                              <button type="button" className="btn btn-white dropdown-toggle mr-0" data-toggle="dropdown">Actions <i className="fas fa-angle-down" /></button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Reply</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Archive</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Mark As Read</a>
                                <a className="dropdown-item" href="#">Mark As Unread</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="btn-group dropdown-action">
                              <button type="button" className="btn btn-white dropdown-toggle mr-0" data-toggle="dropdown"><i className="far fa-folder" /> <i className="fas fa-angle-down" /></button>
                              <div role="menu" className="dropdown-menu">
                                <a className="dropdown-item" href="#">Social</a>
                                <a className="dropdown-item" href="#">Forums</a>
                                <a className="dropdown-item" href="#">Updates</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Spam</a>
                                <a className="dropdown-item" href="#">Trash</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">New</a>
                              </div>
                            </div>
                            <div className="btn-group dropdown-action">
                              <button type="button" data-toggle="dropdown" className="btn btn-white dropdown-toggle mr-0"><i className="fas fa-tags" /> <i className="fas fa-angle-down" /></button>
                              <div role="menu" className="dropdown-menu">
                                <a className="dropdown-item" href="#">Work</a>
                                <a className="dropdown-item" href="#">Family</a>
                                <a className="dropdown-item" href="#">Social</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Primary</a>
                                <a className="dropdown-item" href="#">Promotions</a>
                                <a className="dropdown-item" href="#">Forums</a>
                              </div>
                            </div>
                          </div>
                          <div className="float-left d-none d-sm-block">
                            <input type="text" placeholder="Search Messages" className="form-control search-message" />
                          </div>
                        </div>
                        <div className="col-sm-2 col-md-4 col-4 top-action-right">
                          <div className="text-right">
                            <span className="text-muted d-none d-md-inline-block mr-0">Showing 10 of 112 </span>
                            <button type="button" title="Refresh" data-toggle="tooltip" className="btn btn-white d-none d-md-inline-block mr-0"><i className="fas fa-sync-alt" /></button>
                            <div className="btn-group">
                              <a className="btn btn-white"><i className="fas fa-angle-left" /></a>
                              <a className="btn btn-white"><i className="fas fa-angle-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="email-content">
                      <div className="table-responsive">
                        <table className="table table-inbox table-hover">
                          <thead>
                            <tr>
                              <th colSpan={6}>
                                <input type="checkbox" className="checkbox-all" />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="unread clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="fas fa-star starred" /></span></td>
                              <td className="name">John Doe</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td><i className="fas fa-paperclip" /></td>
                              <td className="mail-date">13:14</td>
                            </tr>
                            <tr className="unread clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">Envato Account</td>
                              <td className="subject">Important account security update from Envato</td>
                              <td />
                              <td className="mail-date">8:42</td>
                            </tr>
                            <tr className="clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">Twitter</td>
                              <td className="subject">HRMS Bootstrap Admin Template</td>
                              <td />
                              <td className="mail-date">30 Nov</td>
                            </tr>
                            <tr className="unread clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">Richard Parker</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td />
                              <td className="mail-date">18 Sep</td>
                            </tr>
                            <tr className="clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">John Smith</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td />
                              <td className="mail-date">21 Aug</td>
                            </tr>
                            <tr className="clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">me, Robert Smith (3)</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td />
                              <td className="mail-date">1 Aug</td>
                            </tr>
                            <tr className="unread clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">Codecanyon</td>
                              <td className="subject">Welcome To Codecanyon</td>
                              <td />
                              <td className="mail-date">Jul 13</td>
                            </tr>
                            <tr className="clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">Richard Miles</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td><i className="fas fa-paperclip" /></td>
                              <td className="mail-date">May 14</td>
                            </tr>
                            <tr className="unread clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="far fa-star" /></span></td>
                              <td className="name">John Smith</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td />
                              <td className="mail-date">11/11/16</td>
                            </tr>
                            <tr className="clickable-row" data-href="/admin-template/mail-view">
                              <td>
                                <input type="checkbox" className="checkmail" />
                              </td>
                              <td><span className="mail-important"><i className="fas fa-star starred" /></span></td>
                              <td className="name">Mike Litorus</td>
                              <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                              <td />
                              <td className="mail-date">10/31/16</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <OpenChat/>
            </div></div>
        );
    }
}

export default Inbox;