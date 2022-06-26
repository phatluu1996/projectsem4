import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery"
import MenuItem from "./ext_menuitem";

class SidebarNav extends Component {
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

    }
    this.$menuItem = $("#sidebar-menu a");
    this.$menuItem.on('click', function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });
    $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
  }
  render() {
    const exclusionArray = ["login", "register", "forgot-password", "error-404", "error-500", "email", "mail-view", "components",
      "coming-soon", "lock-screen"];
    if (
      exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0
    ) {
      return "";
    }
    const path = this.props.location.pathname;
    const urlArr = this.props.location.pathname.split("/");
    const url = urlArr.at(-1);
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <MenuItem to="/admin" icon="fas fa-tachometer-alt" title="Dashboard" />
              
              <MenuItem to="/admin/doctors" icon="fas fa-user-md" title="Doctors" />
              <MenuItem to="/admin/appointments" icon="far fa-calendar-alt" title="Appointments" />
              <MenuItem to="/admin/departments" icon="far fa-hospital" title="Departments List" />
              

              {/* <li className={`${url === "patients" || url === "add-patients" || url === "edit-patient" ? "active" : ""}`}>
                <Link to="/admin/patients"><i className="fas fa-wheelchair" /> Patients</Link>
              </li>
              <li className={`${url === "appointments" || url === "add-appointment" || url === "edit-appointment" ? "active" : ""}`}>
                <Link to="/admin/appointments"><i className="far fa-calendar-alt" /> Appointments</Link>
              </li>
              <li className={`${url === "schedule" || url === "add-schedule" || url === "edit-schedule" ? "active" : ""}`}>
                <Link to="/admin/schedule"><i className="far fa-calendar-check" /> Doctor Schedule</Link>
              </li>
              <li className={`${url === "departments" || url === "add-department" || url === "edit-department" ? "active" : ""}`}>
                <Link to="/admin/departments"><i className="far fa-hospital" /> Departments</Link>
              </li> */}
              {/* <li className="submenu">
            <a href="#"><i className="fas fa-user" /> <span> Employees </span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "employees" || url === "add-employee"|| url === "edit-employee" ? "active" : ""}`} to="/employees">Employees List</Link></li>
              <li><Link className={`${url === "leaves" || url === "add-leave" || url === "edit-leave" ? "active" : ""}`} to="/leaves">Leaves</Link></li>
              <li><Link className={`${url === "holidays" || url === "add-holiday"|| url === "edit-holiday" ? "active" : ""}`} to="/holidays">Holidays</Link></li>
              <li><Link className={`${url === "attendance" ? "active" : ""}`} to="/attendance">Attendance</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="far fa-money-bill-alt" /> <span> Accounts </span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "invoices" || url === "create-invoice" ||url === "edit-invoice" || 
                    url === "invoice-view" ? "active" : ""}`} to="/invoices">Invoices</Link></li>
              <li><Link className={`${url === "payments" ? "active" : ""}`} to="/payments">Payments</Link></li>
              <li><Link className={`${url === "expenses" || url === "add-expense" || url === "edit-expense"
                   ? "active" : ""}`} to="/expenses">Expenses</Link></li>
              <li><Link className={`${url === "taxes" || url === "add-tax" || url === "edit-tax" ? "active" : ""}`} to="/taxes">Taxes</Link></li>
              <li><Link className={`${url === "provident-fund" || url === "add-provident-fund" || url === "edit-provident-fund"
               ? "active" : ""}`} to="/provident-fund">Provident Fund</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="fas fa-book" /> <span> Payroll </span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "salary" || url === "add-salary" || url === "edit-salary" ? "active" : ""}`} to="/salary"> Employee Salary </Link></li>
              <li><Link className={`${url === "salary-view" ? "active" : ""}`} to="/salary-view"> Payslip </Link></li>
            </ul>
          </li>
          <li className={`${url === "chat" ? "active" : ""}`}>
            <a href="/admin-template/chat"><i className="fas fa-comments" /> Chat <span className="badge badge-pill bg-primary float-right">5</span></a>
          </li>
          <li className="submenu">
            <a href="#"><i className="fas fa-video" /> <span> Calls</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><a className={`${url === "voice-call" ? "active" : ""}`} href="/admin-template/voice-call">Voice Call</a></li>
              <li><a className={`${url === "video-call" ? "active" : ""}`} href="/admin-template/video-call">Video Call</a></li>
              <li><a className={`${url === "incoming-call" ? "active" : ""}`} href="/admin-template/incoming-call">Incoming Call</a></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="fas fa-envelope" /> <span> Email</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "compose" ? "active" : ""}`} to="/compose">Compose Mail</Link></li>
              <li><Link className={`${url === "inbox" ? "active" : ""}`} to="/inbox">Inbox</Link></li>
              <li><Link className={`${url === "mail-view" ? "active" : ""}`} to="/mail-view">Mail View</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="far fa-comment-dots" /> <span> Blog</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "blog" ? "active" : ""}`} to="/blog">Blog</Link></li>
              <li><Link className={`${url === "blog-details" ? "active" : ""}`} to="/blog-details">Blog View</Link></li>
              <li><Link className={`${url === "add-blog" ? "active" : ""}`} to="/add-blog">Add Blog</Link></li>
              <li><Link className={`${url === "edit-blog" ? "active" : ""}`} to="/edit-blog">Edit Blog</Link></li>
            </ul>
          </li>
          <li className={`${url === "assets" || url === "add-asset" || url === "edit-asset" ? "active" : ""}`}>
            <Link to="/assets"><i className="fas fa-cube" /> Assets</Link>
          </li>
          <li className={`${url === "activities" ? "active" : ""}`}>
            <Link to="/activities"><i className="far fa-bell" /> Activities</Link>
          </li>
          <li className="submenu">
            <a href="#"><i className="far fa-flag" /> <span> Reports </span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "expense-reports" ? "active" : ""}`} to="/expense-reports"> Expense Report </Link></li>
              <li><Link className={`${url === "invoice-reports" ? "active" : ""}`} to="/invoice-reports"> Invoice Report </Link></li>
            </ul>
          </li>
          <li>
            <a href="/admin-template/settings"><i className="fas fa-cog" /> Settings</a>
          </li>
          <li className="menu-title">UI Elements</li>
          <li className="submenu">
            <a href="#"><i className="fas fa-laptop" /> <span> Components</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "uikit" ? "active" : ""}`} to="/uikit">UI Kit</Link></li>
              <li><Link className={`${url === "typography" ? "active" : ""}`} to="/typography">Typography</Link></li>
              <li><Link className={`${url === "tabs" ? "active" : ""}`} to="/tabs">Tabs</Link></li>
            </ul>
          </li>
          <li className={`${url === "widgets" ? "active" : ""}`}>
            <Link to="/widgets"><i className="fas fa-th" /> Widgets</Link>
          </li>
          <li className="submenu">
            <a href="#"><i className="far fa-edit" /> <span> Forms</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "form-basic-inputs" ? "active" : ""}`} to="/form-basic-inputs">Basic Inputs</Link></li>
              <li><Link className={`${url === "form-input-groups" ? "active" : ""}`} to="/form-input-groups">Input Groups</Link></li>
              <li><Link className={`${url === "form-horizontal" ? "active" : ""}`} to="/form-horizontal">Horizontal Form</Link></li>
              <li><Link className={`${url === "form-vertical" ? "active" : ""}`} to="/form-vertical">Vertical Form</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#"><i className="fas fa-table" /> <span> Tables</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={`${url === "tables-basic" ? "active" : ""}`} to="/tables-basic">Basic Tables</Link></li>
              <li><Link className={`${url === "tables-datatables" ? "active" : ""}`} to="/tables-datatables">Data Table</Link></li>
            </ul>
          </li>
          <li className={`${url === "calendar" ? "active" : ""}`}>
            <Link to="/calendar"><i className="far fa-calendar-alt" /> Calendar</Link>
          </li>
          <li className="menu-title">Extras</li>
          <li className="submenu">
            <a href="#"><i className="fas fa-columns" /> <span>Pages</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link to="/login"> Login </Link></li>
              <li><Link to="/register"> Register </Link></li>
              <li><Link to="/forgot-password"> Forgot Password </Link></li>
              <li><Link to="/change-password2"> Change Password </Link></li>
              <li><Link to="/lock-screen"> Lock Screen </Link></li>
              <li><Link className={`${url === "profile" || url === "edit-profile" ? "active" : ""}`} to="/profile"> Profile </Link></li>
              <li><Link className={`${url === "gallery" ? "active" : ""}`} to="/gallery"> Gallery </Link></li>
              <li><Link to="/error-404">404 Error </Link></li>
              <li><Link to="/error-500">500 Error </Link></li>
              <li><Link to="/coming-soon">Coming Soon </Link></li>
              <li><Link className={`${url === "blank-page" ? "active" : ""}`} to="/blank-page"> Blank Page </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <a href=""><i className="fas fa-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li className="submenu">
                <a href=""><span>Level 1</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href=""><span>Level 2</span></a></li>
                  <li className="submenu">
                    <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href="">Level 3</a></li>
                      <li><a href="">Level 3</a></li>
                    </ul>
                  </li>
                  <li><a href=""><span>Level 2</span></a></li>
                </ul>
              </li>
              <li>
                <a href=""><span>Level 1</span></a>
              </li>
            </ul>
          </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarNav);
