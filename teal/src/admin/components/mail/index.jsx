import React, { Component } from "react";
import OpenChat from "../sidebar/openchatheader"

class ComposeMail extends Component {
  
  render() {
    return (
      <>
       <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div className="sidebar-menu">
              <ul>
                <li>
                  <a href="/admin-template/inbox"><i className="fas fa-home back-icon" /> Back to Inbox</a>
                </li>
                <li>
                  <a href="/admin-template/inbox">Inbox <span className="mail-count">(21)</span></a>
                </li>
                <li>
                  <a href="#">Starred</a>
                </li>
                <li>
                  <a href="#">Sent Mail</a>
                </li>
                <li>
                  <a href="#">Draft <span className="mail-count">(8)</span></a>
                </li>
                <li>
                  <a href="#">Trash</a>
                </li>
                <li className="menu-title">Label <a href="#" className="add-user-icon"><i className="fas fa-plus" /></a></li>
                <li>
                  <a href="#"><i className="fas fa-circle text-success mail-label" /> Work</a>
                </li>
                <li>
                  <a href="#"><i className="fas fa-circle text-danger mail-label" /> Office</a>
                </li>
                <li>
                  <a href="#"><i className="fas fa-circle text-warning mail-label" /> Personal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-12">
                <h4 className="page-title">Compose</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card-box">
                  <form>
                    <div className="form-group">
                      <input type="email" placeholder="To" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Cc" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Bcc" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" className="form-control" />
                    </div>
                    <div className="form-group">
                    <textarea rows={4} cols={5} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} />
                    </div>
                    <div className="form-group m-b-0">
                      <div className="text-center compose-btn">
                        <button className="btn btn-primary"><span>Send</span> <i className="far fa-paper-plane m-l-5" /></button>
                        <button className="btn btn-success m-l-5" type="button"><span>Draft</span> <i className="far fa-save m-l-5" /></button>
                        <button className="btn btn-success m-l-5" type="button"><span>Delete</span> <i className="fas fa-trash m-l-5" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <OpenChat/>
        </div>
      </>
    );
  }
}

export default ComposeMail;
