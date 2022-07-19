import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo_Hospital, User_img } from './../imagepath.jsx';
import $ from "jquery"
import { logout } from "../../../actions.js";
import { Modal } from "antd";
import { ADMIN, DOCTOR, RECEPTION } from "../../../constants.js";

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {

    if ($('.main-wrapper').length > 0) {
      var $wrapper = $(".main-wrapper");
      $('#mobile_btn').on('click', function () {
        $wrapper.addClass('slide-nav');
        $wrapper.toggleClass('slide-nav');
        $('#chat_sidebar').removeClass('opened');
        $(".dropdown.open > .dropdown-toggle").dropdown("toggle");
        return false;
      });
      $('#open_msg_box').on('click', function () {

        if ($('.main-wrapper').hasClass('open-msg-box')) {
          $wrapper.removeClass('open-msg-box');
          $wrapper.toggleClass('open-msg-box');
          $('.dropdown').removeClass('open');
        }
        else {
          $wrapper.addClass('open-msg-box');
          $wrapper.toggleClass('open-msg-box');
          $('.dropdown').removeClass('open');
        }
        return false;
      });
    }
    // Mail important

    if ($('.mail-important').length > 0) {
      $(".mail-important").click(function () {
        $(this).find('i.fa').toggleClass("fa-star");
        $(this).find('i.fa').toggleClass("fa-star-o");
      });
    }

    if ($('.dropdown-toggle').length > 0) {
      $('.dropdown-toggle').on('click', function () {
        if ($('.main-wrapper').hasClass('open-msg-box')) {
          $('.main-wrapper').removeClass('open-msg-box');
        }
      });
    }
    const url = this.props.location.pathname;
  }

  handleLogout() {
    logout(() => this.props.history.push("/login"));
  }

  render() {
    const exclusionArray = ["login", "register", "forgot-password", "error-404", "error-500"];
    if (
      exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    ) {
      return "";
    }
    const url = this.props.location.pathname.split("/")[1];
    // console.log('url', url);

    return (
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={Logo_Hospital} width={35} height={35} alt="" />
          </Link>
        </div>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fas fa-bars" /></a>
        <ul className="nav user-menu float-right">          
          <li className="nav-item dropdown has-arrow">
            <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
              <span className="user-img">
                <img className="rounded-circle" src={localStorage.getItem("userAvatar") ? localStorage.getItem("userAvatar") : User_img} width={24} alt="Admin" />
                <span className="status online" />
              </span>
              <span>{localStorage.getItem("headerName")}</span>
            </a>
            <div className="dropdown-menu">
              {localStorage.getItem("userRole") == DOCTOR && <Link className="dropdown-item" to="/doctor/profile">Profile</Link>}
              {localStorage.getItem("userRole") == ADMIN && <Link className="dropdown-item" to="/admin/profile">Profile</Link>}
              {localStorage.getItem("userRole") == RECEPTION && <Link className="dropdown-item" to="/reception/profile">Profile</Link>}
              <Link className="dropdown-item" to="/">Back</Link>
              <a className="dropdown-item" onClick={this.handleLogout}>Logout</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
