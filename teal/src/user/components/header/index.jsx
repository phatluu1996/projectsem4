import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from '../imagepath';
import $ from "jquery"

class Header extends Component {
  componentDidMount(){
    // Mobile menu overlay
	
	$(".toggle-menu").on("click", function() {
		var $target = $($(this).attr("href"));
		if ($target.length) {
			$target.toggleClass("opened");
			$(".sidebar-overlay").toggleClass("opened");
			$("body").toggleClass("menu-opened");
			$(".sidebar-overlay").attr("data-reff", $(this).attr("href"));
		}
	});
	
	$(".sidebar-overlay").on("click", function() {
		var $target = $($(this).attr("data-reff"));
		if ($target.length) {
			$target.removeClass("opened");
			$("body").removeClass("menu-opened");
			$(this).removeClass("opened");
		}
	});
	
	// Mobile Menu
	
	$('.menu-toggle').on("click", function() {
		$(this).parents('li').children('.mobile-submenu-wrapper').slideToggle(300);
		return false;
	});
  // Header menu dropdown

	if($('.header .dropdown').length > 0 ){
		$('.header .dropdown').hover(
			function() {
				$(this).addClass('show').attr('aria-expanded',"true");
				$(this).find('.dropdown-menu').addClass('show');
			},
			function() {
				$(this).removeClass('show').attr('aria-expanded',"false");
				$(this).find('.dropdown-menu').removeClass('show');
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
                  <div className="logo">
                    <Link to="/"><img alt="Logo" src={Logo} width={56} height={50} /></Link>
                  </div>
                </div>
                <div className="col-md-10">
                  <nav className="navbar navbar-expand-md p-0">
                    <div className="navbar-collapse collapse" id="navbar">
                      <ul className="nav navbar-nav main-nav float-right ml-auto">
                        <li className={`${pathname === "/" || pathname === "" ? "active" : ""} nav-item`} >
                          <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={`${pathname === "/" ||pathname === "about-us" ? "active" : ""} nav-item`}>
                          <Link to="/user/aboutus" className="nav-link">About Us</Link>
                        </li>
                        <li className={`${pathname === "/" ||pathname === "departments" || pathname === "department-details" ? "active" : ""} nav-item`}>
                          <Link to="/user/departments" className="nav-link">Departments</Link>
                        </li>
                        {/* <li className={`${pathname === "services" || pathname === "service-details" ? "active" : ""} nav-item`}>
                          <Link to="/services" className="nav-link">Services</Link>
                        </li> */}
                        <li className={`${pathname === "/" ||pathname === "doctors" || pathname === "doctordetails" ? "active" : ""} nav-item`}>
                          <Link to="/user/doctors" className="nav-link">Doctors</Link>
                          
                        </li>
                        {/* <li className={`${pathname === "blog" || pathname === "blog-left-sidebar" || pathname === "blog-full-width" ||
                                pathname === "blog-grid" || pathname === "blog-details" ? "active" : ""} dropdown nav-item`}> 
                          <a className="dropdown-toggle nav-link" data-toggle="dropdown">Blog <b className="caret" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className={`${pathname === "blog" ? "active" : ""} dropdown-item`} to="/blog">Right Sidebar</Link>
                            <Link className={`${pathname === "blog-left-sidebar" ? "active" : ""} dropdown-item`} to="/blog-left-sidebar">Left Sidebar</Link>
                            <Link className={`${pathname === "blog-full-width" ? "active" : ""} dropdown-item`} to="/blog-full-width">Full Width</Link>
                            <Link className={`${pathname === "blog-grid" ? "active" : ""} dropdown-item`} to="/blog-grid">Blog Grid</Link>
                            <Link className={`${pathname === "blog-details" ? "active" : ""} dropdown-item`} to="/blog-details">Blog Details</Link>
                          </div>
                        </li> */}
                        <li className={`${pathname === "/" ||pathname === "contact-us" ? "active" : ""} nav-item`}>
                          <Link to="/user/contact-us" className="nav-link">Contact Us</Link>
                        </li>
                        <li className={`${pathname === "/" ||pathname === "appointments" ? "active" : ""} nav-item`}>
                          <Link to="/user/appointments" className="nav-link">Appointment</Link>
                        </li>
                        <li className="dropdown nav-item"> 
                          <a className="dropdown-toggle settings-icon nav-link" data-toggle="dropdown"><i className="fas fa-cog" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="/login">Login</Link>
                            <Link className="dropdown-item" to="/register">Register</Link>
                            <Link className="dropdown-item" to="/forgot-password">Forgot Password</Link>
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
        {/* Header /*/}
        {/* Mobile Header */}
        <header className="mobile-header">
          <div className="panel-control-left">
            <a className="toggle-menu" href="#side_menu"><i className="fas fa-bars" /></a>
          </div>
          <div className="page_title">
            <Link to="/"><img src={Logo} alt="Logo" className="img-fluid" width={60} height={60} /></Link>
          </div>
        </header>
        {/* Mobile Header /*/}
        {/* Mobile Sidebar */}
        <div className="sidebar sidebar-menu" id="side_menu">
          <div className="sidebar-inner slimscroll">
            <a id="close_menu" href="#"><i className="fas fa-times" /></a>
            <ul className="mobile-menu-wrapper" style={{display: 'block'}}>
              <li className={`${pathname === "/" || pathname === "" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li className={`${pathname === "about-us" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/about-us">About Us</Link>
                </div>
              </li>
              <li className={`${pathname === "departments" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix">
                  <Link to="/departments">Departments</Link>
                </div>
              </li>
              <li className={`${pathname === "services" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/services">Services</Link>
                </div>
              </li>
              <li className={`${pathname === "doctors" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/doctors">Doctors</Link>
                </div>
              </li>
              <li className={`${pathname === "blog" || pathname === "blog-left-sidebar" || pathname === "blog-full-width" ||
                                pathname === "blog-grid" || pathname === "blog-details" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <a href="" className="menu-toggle">Blog <i className="fas fa-sort-down  menu-toggle" /></a>
                </div>
                <ul className="mobile-submenu-wrapper" style={{display: 'none'}}>
                  <li>
                    <Link className={`${pathname === "blog" ? "active" : ""}`} to="/blog">Right Sidebar</Link>
                  </li>
                  <li>
                    <Link className={`${pathname === "blog-left-sidebar" ? "active" : ""}`} to="/blog-left-sidebar">Left Sidebar</Link>
                  </li>
                  <li>
                    <Link className={`${pathname === "blog-full-width" ? "active" : ""}`} to="/blog-full-width">Full Width</Link>
                  </li>
                  <li>
                    <Link className={`${pathname === "blog-grid" ? "active" : ""}`} to="/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link className={`${pathname === "blog-details" ? "active" : ""}`} to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className={`${pathname === "contact-us" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix">
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </li>
              <li className={`${pathname === "appointment" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/appointment">Appointment</Link>
                </div>
              </li>
              <li className={`${pathname === "login" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix">
                  <Link to="/login">Login</Link>
                </div>
              </li>
              <li className={`${pathname === "register" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix">
                  <Link to="/register">Register</Link>
                </div>
              </li>
              <li className={`${pathname === "forgot-password" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix">
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
              </li>
              <li className={`${pathname === "404" ? "active" : ""}`}>
                <div className="mobile-menu-item clearfix"> 
                  <Link to="/404">404</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Sidebar /*/}
          </>
    );
  }
}

export default Header;
