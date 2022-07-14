import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from './../imagepath';
import $ from "jquery"
import { logout } from "../../../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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
    logout();
    this.props.history.push("/")
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
                          <Link to="/appointment" className="btn btn-primary appoint-btn nav-link">Appointment</Link>
                        </li>
                        <li className="dropdown nav-item">
                          <a className="dropdown-toggle settings-icon nav-link" data-toggle="dropdown"><i className="fas fa-cog" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            {!localStorage.getItem('userToken') ?
                              <>
                                <Link className="dropdown-item" to="/login">Login</Link>
                                <Link className="dropdown-item" to="/register">Register</Link>
                              </> : <>
                                <Link className="dropdown-item" to="/forgot-password">Forgot Password</Link>
                                <Link className="dropdown-item" to="/profile">User Profile</Link>
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
