import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo_Hospital,User_img } from '../imagepath';
import $ from "jquery"

class Header extends Component {
  componentDidMount(){
    
    if ($('.main-wrapper').length > 0) {
			var $wrapper = $(".main-wrapper");
			$('#mobile_btn').on('click',function() {
        $wrapper.addClass('slide-nav');
				$wrapper.toggleClass('slide-nav');
				$('#chat_sidebar').removeClass('opened');
				$(".dropdown.open > .dropdown-toggle").dropdown("toggle");
				return false;
			});
			$('#open_msg_box').on('click',function() {        
				      
        if ($('.main-wrapper').hasClass('open-msg-box')) {
          $wrapper.removeClass('open-msg-box');
          $wrapper.toggleClass('open-msg-box');
          $('.dropdown').removeClass('open');
				}
        else{
          $wrapper.addClass('open-msg-box');
          $wrapper.toggleClass('open-msg-box');
          $('.dropdown').removeClass('open');
        }
				return false;
			});
		}
    // Mail important

		if ($('.mail-important').length > 0) {
			$(".mail-important").click(function() {
				$(this).find('i.fa').toggleClass("fa-star");
				$(this).find('i.fa').toggleClass("fa-star-o");
			});
		}

		if ($('.dropdown-toggle').length > 0) {
			$('.dropdown-toggle').on('click',function() {
				if ($('.main-wrapper').hasClass('open-msg-box')) {
					$('.main-wrapper').removeClass('open-msg-box');
				}
			});
		}
    const url = this.props.location.pathname;
    // if (url.includes("login") || url.includes("register") || url.includes("forgotpassword")
    // || url.includes("otp")|| url.includes("lockscreen") ) {
    //     $('body').addClass('account-page');
    // }else if (url.includes("error-404") || url.includes("error-500") ) {
    //     $('body').addClass('error-page');
    // }
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
        <li className="nav-item dropdown d-none d-sm-block">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="far fa-bell" /> <span className="badge badge-pill bg-danger float-right">3</span></a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span>Notifications</span>
            </div>
            <div className="drop-scroll">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link to="/activities">
                    <div className="media">
                      <span className="avatar">
                        <img alt="John Doe" src={User_img} className="img-fluid" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/activities">
                    <div className="media">
                      <span className="avatar">V</span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                        <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/activities">
                    <div className="media">
                      <span className="avatar">L</span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                        <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/activities">
                    <div className="media">
                      <span className="avatar">G</span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                        <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/activities">
                    <div className="media">
                      <span className="avatar">V</span>
                      <div className="media-body">
                        <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                        <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="/activities">View all Notifications</Link>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown d-none d-sm-block">
          <a href="#" id="open_msg_box" className="hasnotifications nav-link"><i className="far fa-comment" /> <span className="badge badge-pill bg-danger float-right">8</span></a>
        </li>
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
            <span className="user-img">
              <img className="rounded-circle" src={User_img} width={24} alt="Admin" />
              <span className="status online" />
            </span>
            <span>Admin</span>
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/profile">My Profile</Link>
            <Link className="dropdown-item" to="/edit-profile">Edit Profile</Link>
            <a className="dropdown-item" href="/admin-template/settings">Settings</a>
            <Link className="dropdown-item" to="/login">Logout</Link>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu float-right">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
        <div className="dropdown-menu dropdown-menu-right">
          <Link className="dropdown-item" to="/profile">My Profile</Link>
          <Link className="dropdown-item" to="/edit-profile">Edit Profile</Link>
          <a className="dropdown-item" href="/admin-template/settings">Settings</a>
          <Link className="dropdown-item" to="/login">Logout</Link>
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
