import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from './../imagepath';
import $ from "jquery"
import { logout } from "../../../actions";
import { ADMIN, DOCTOR, PATIENT, RECEPTION } from "../../../constants";
import { Modal } from "antd";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAppointment = this.handleAppointment.bind(this);
  }

  componentDidMount() {
    // Mobile menu overlay

    $(".toggle-menu").on("click", function () {
      var $target = $($(this).attr("href"));
      if ($target.length) {
        $target.toggleClass("opened");
        $(".sidebar-overlay").toggleClass("opened");
        $("body").toggleClass("menu-opened");
        $(".sidebar-overlay").attr("data-reff", $(this).attr("href"));
      }
    });

    $(".sidebar-overlay").on("click", function () {
      var $target = $($(this).attr("data-reff"));
      if ($target.length) {
        $target.removeClass("opened");
        $("body").removeClass("menu-opened");
        $(this).removeClass("opened");
      }
    });

    // Mobile Menu

    $('.menu-toggle').on("click", function () {
      $(this).parents('li').children('.mobile-submenu-wrapper').slideToggle(300);
      return false;
    });
    // Header menu dropdown

    if ($('.header .dropdown').length > 0) {
      $('.header .dropdown').hover(
        function () {
          $(this).addClass('show').attr('aria-expanded', "true");
          $(this).find('.dropdown-menu').addClass('show');
        },
        function () {
          $(this).removeClass('show').attr('aria-expanded', "false");
          $(this).find('.dropdown-menu').removeClass('show');
        });
    }
  }

  handleLogout() {
    logout(() => setTimeout(() => { this.props.history.replace("/") }, 250));
  }

  handleAppointment() {
    if (localStorage.getItem("userToken") && localStorage.getItem("userRole") == PATIENT) {
      this.props.history.push("/appointment");
    } else {
      Modal.info({
        title: `Information`,
        content: (
          <>
            For your convenience, please register an account or log in.
            Thank you.
          </>
        ),
        onOk: () => {
          this.props.history.push("/login");
        }
      });
    }
  }

  render() {
    const pathname = this.props.location.pathname.split("/")[1];

    return (
      <>
        {/* Header */}
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-md-2 float-left">
                  <div className="logo" >
                    <Link to="/">
                      <img alt="Logo" src={Logo} width={200} height={50} />
                    </Link>
                  </div>
                </div>
                <div className="col-md-10">
                  <nav className="navbar navbar-expand-md p-0">
                    <div className="navbar-collapse collapse" id="navbar">
                      <ul className="nav navbar-nav main-nav float-right ml-auto">
                        <li className={`${pathname === "/" || pathname === "" ? "active" : ""} nav-item`} >
                          <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={`${pathname === "/" || pathname === "about-us" ? "active" : ""} nav-item`}>
                          <Link to="/aboutus" className="nav-link">About Us</Link>
                        </li>
                        <li className={`${pathname === "/" || pathname === "departments" || pathname === "department-details" ? "active" : ""} nav-item`}>
                          <Link to="/departments" className="nav-link">Departments</Link>
                        </li>
                        {/* <li className={`${pathname === "services" || pathname === "service-details" ? "active" : ""} nav-item`}>
                          <Link to="/services" className="nav-link">Services</Link>
                        </li> */}
                        <li className={`${pathname === "/" || pathname === "doctors" || pathname === "doctordetails" ? "active" : ""} nav-item`}>
                          <Link to="/doctors" className="nav-link">Doctors</Link>
                        </li>
                        <li className={`${pathname === "/" || pathname === "contact-us" ? "active" : ""} nav-item`}>
                          <Link to="/contact-us" className="nav-link">Contact Us</Link>
                        </li>
                        <li className={`${pathname === "/" || pathname === "appointments" ? "active" : ""} nav-item`}>
                          <a onClick={this.handleAppointment} className="btn btn-primary appoint-btn nav-link" hidden={localStorage.getItem("userRole") != PATIENT && localStorage.getItem("userRole") != null}>Appointment</a>
                        </li>
                        <li className="dropdown nav-item">
                          <a className="dropdown-toggle settings-icon nav-link" data-toggle="dropdown"><i className="fas fa-cog" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            {!localStorage.getItem('userToken') ?
                              <>
                                <a className="dropdown-item" href="/login">Login</a>
                                <Link className="dropdown-item" to="/register">Register</Link>
                                <Link className="dropdown-item" to="/forgot-password">Forgot Password</Link>
                              </> : <>
                                {localStorage.getItem("userRole") == ADMIN && <Link className="dropdown-item" to="/admin">Go to Admin</Link>}
                                {localStorage.getItem("userRole") == DOCTOR && <Link className="dropdown-item" to="/doctor/appointments">Workplace</Link>}
                                {localStorage.getItem("userRole") == RECEPTION && <Link className="dropdown-item" to="/reception/appointments">Workplace</Link>}
                                {localStorage.getItem("userRole") == PATIENT && <Link className="dropdown-item" to="/profile">User Profile</Link>}
                                {localStorage.getItem("userRole") == PATIENT && <Link className="dropdown-item" to="/appointments">My Appointments</Link>}
                                <a className="dropdown-item" onClick={this.handleLogout}>Logout</a>
                              </>}
                            {/* <Link className="dropdown-item" to="/404">404</Link> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
