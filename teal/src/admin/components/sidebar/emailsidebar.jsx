import React, { Component } from "react";

class MailSidebar extends Component {
    render(){
        return(
            
            <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div className="sidebar-menu">
                <ul>
                  <li>
                    <a href="/admin-template/"><i className="fas fa-home back-icon" /> Back to Home</a>
                  </li>
                  <li className="menu-title"><a href="/admin-template/compose" className="btn btn-primary btn-block">Compose</a></li>
                  <li className="active">
                    <a href="/admin-template/inbox">Inbox <span className="mail-count">(21)</span></a>
                  </li>
                  <li>
                    <a href="#">Starred</a>
                  </li>
                  <li>
                    <a href="#">Sent Mail</a>
                  </li>
                  <li>
                    <a href="#">Trash</a>
                  </li>
                  <li>
                    <a href="#">Draft <span className="mail-count">(8)</span></a>
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
        );
    }
}

export default MailSidebar;