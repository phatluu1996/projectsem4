import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer";
//Home
import Home from "./components/home";
//Department
import Departments from "./components/departments";
import DepartmentDetails from "./components/departments/department_details";
//Service
import Service from "./components/service";
import ServiceDetails from "./components/service/service_details";
//Doctors
import Doctor from "./components/doctors";
import DoctorDetails from "./components/doctors/doctor_details";
//Blog
import Blog from "./components/blog/blog";
import BlogLeftSidebar from "./components/blog/blog_left_sidebar";
import BlogFullWidth from "./components/blog/blog_full_width";
import BlogDetails from "./components/blog/blog_details";
import BlogGrid from "./components/blog/blog_grid";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Appointment from "./components/appointment/index.jsx";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import Error404 from "./components/error_404";

// import "./assets/css/bootstrap.min.css"
// import "./assets/css/fontawesome/css/fontawesome.min.css"
// import "./assets/css/fontawesome/css/all.min.css";
// import "./assets/css/bootstrap-datetimepicker.min.css";
// import "./assets/css/style.css";

// import "./assets/js/jquery-3.5.1.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/bootstrap-datetimepicker.min.js";
// import "./assets/js/datepicker.js";
// import "./assets/js/theme.js";

class AppUniversal extends Component {
 
render() {
  const url = this.props.location.pathname.split("/")[1];
  if (url.includes("error-404") || url.includes("error-500") ) {
    $('body').addClass('error-page');
  }
  return (
    <Router basename="/">
      {/* <div className="main-wrapper"> */}
        <Route render={(props) => <Header {...props} />} />         
          <Switch>
            {/* Home */}
            <Route path="/" exact component={Home} />
            {/* Department */}
            <Route path="/departments" exact component={Departments} />
            <Route path="/department-details" exact component={DepartmentDetails} />
            {/* Service */}
            <Route path="/services" exact component={Service} />
            <Route path="/service-details" exact component={ServiceDetails} />
            {/* Doctors */}
            <Route path="/doctors" exact component={Doctor} />
            <Route path="/doctor-details" exact component={DoctorDetails} />
            {/* Blog */}
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog-left-sidebar" exact component={BlogLeftSidebar} />
            <Route path="/blog-full-width" exact component={BlogFullWidth} />
            <Route path="/blog-grid" exact component={BlogGrid} />
            <Route path="/blog-details" exact component={BlogDetails} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/appointment" exact component={Appointment} />


            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/404" exact component={Error404} />

            
            
          </Switch>
        <Route render={(props) => <Footer {...props} />} />  
      {/* </div> */}
    </Router>
  );
};
}
export default AppUniversal;
