import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { User_img } from "../imagepath"

class ChatSidebarNav extends Component {
     
  render() {

   return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="/admin-template/"><i className="fas fa-home back-icon" /> Back to Home</a>
          </li>
          <li className="menu-title">Chat Groups <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_group"><i className="fas fa-plus" /></a></li>
          <li>
            <a href="/admin-template/chat">#General</a>
          </li>
          <li>
            <a href="/admin-template/chat">#Video Responsive Survey</a>
          </li>
          <li>
            <a href="/admin-template/chat">#500rs</a>
          </li>
          <li>
            <a href="/admin-template/chat">#warehouse</a>
          </li>
          <li className="menu-title">Direct Chats <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_chat_user"><i className="fas fa-plus" /></a></li>
          <li>
            <a href="/admin-template/chat"><span className="chat-avatar-sm user-img"><img src={User_img} alt="" className="rounded-circle" /><span className="status online" /></span> John Doe <span className="badge badge-pill bg-danger float-right">1</span></a>
          </li>
          <li>
            <a href="/admin-template/chat"><span className="chat-avatar-sm user-img"><img src={User_img} alt="" className="rounded-circle" /><span className="status offline" /></span> Richard Miles <span className="badge badge-pill bg-danger float-right">18</span></a>
          </li>
          <li>
            <a href="/admin-template/chat"><span className="chat-avatar-sm user-img"><img src={User_img} alt="" className="rounded-circle" /><span className="status away" /></span> John Smith</a>
          </li>
          <li className="active">
            <a href="/admin-template/chat"><span className="chat-avatar-sm user-img"><img src={User_img} alt="" className="rounded-circle" /><span className="status online" /></span> Jennifer Robinson <span className="badge badge-pill bg-danger float-right">108</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
}

export default withRouter(ChatSidebarNav);
