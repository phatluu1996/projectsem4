import React, { Component } from 'react';
import config from 'config';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/index';
import Sidebarnav from './components/sidebar';
import ChatSidebarNav from './components/sidebar/chatsidebar';
import ComponentSidebar from './components/sidebar/componentsidebar';
import EmailSidebar from './components/sidebar/emailsidebar';
import SettingSidebar from './components/sidebar/setting_sidebar';
//dashboard
import Dashboard from './components/dashboard';
//doctors
import Doctors from './components/doctorslist';
import AddDoctor from './components/doctorslist/adddoctor';
import EditDoctor from './components/doctorslist/editdoctor';
//patients
import Patients from './components/patients';
import AddPatient from './components/patients/addpatients';
import EditPatient from './components/patients/editpatients';
//Appointments
import Appointments from './components/appointments';
import AddAppointments from './components/appointments/addappointment';
import EditAppointments from './components/appointments/editappointment';
//Schedule
import Schedule from './components/schedule';
import AddSchedule from './components/schedule/addschedule';
import EditSchedule from './components/schedule/editshedule';
//Departments
import Departments from './components/departments';
import AddDepartment from './components/departments/adddepartments';
import EditDepartment from './components/departments/editdepartment';
//Employees
import EmployeeList from './components/employees/employeelist';
import AddEmployee from './components/employees/employeelist/add-employee';
import EditEmployee from './components/employees/employeelist/edit-employee';
import Leave from './components/employees/leave/index';
import AddLeave from './components/employees/leave/addleave';
import EditLeave from './components/employees/leave/editleave';
import Holidays from './components/employees/holidays';
import AddHoliday from './components/employees/holidays/addholidays';
import EditHoliday from './components/employees/holidays/editholidays';
import Attendance from './components/employees/attendance';
//Accounts
import Invoice from './components/accounts/invoices';
import InvoiceEdit from './components/accounts/invoices/edit';
import InvoiceView from './components/accounts/invoices/view';
import CreateInvoice from './components/accounts/invoices/create';
import Payments from './components/accounts/payments/index';
import Expense from './components/accounts/expense/index';
import AddExpense from './components/accounts/expense/add-expense';
import EditExpense from './components/accounts/expense/edit-expense';
import Taxes from './components/accounts/taxes';
import AddTaxes from './components/accounts/taxes/add-taxes';
import EditTaxes from './components/accounts/taxes/edit-taxes';
import Fund from './components/accounts/fund';
import AddFund from './components/accounts/fund/add-fund';
import EditFund from './components/accounts/fund/edit-fund';
//Payroll
import Salary from './components/payroll/salary';
import AddSalary from './components/payroll/salary/add-salay';
import EditSalary from './components/payroll/salary/edit-salary';
import SalaryView from './components/payroll/salary/salary-view';
//Chat
import Chat from './components/chat';
import Voicecall from './components/calls/voicecall';
import Videocall from './components/calls/videocall';
import Incomingcall from './components/calls/incomingcall';
import ComposeMail from './components/mail';
import Inbox from './components/mail/inbox';
import MailView from './components/mail/mail-view';
//Blog
import Blog from './components/blog';
import BlogDetails from './components/blog/blog-detail';
import AddBlog from './components/blog/blog-add';
import BlogEdit from './components/blog/blog-edit';
//Assets
import Assets from './components/assets';
import EditAssets from './components/assets/assets-edit';
import AssetsAdd from './components/assets/assets-add';
//Activities
import Activities from './components/activities';
//Report
import ExpenseReport from './components/reports/expense-report';
import InvoiceReport from './components/reports/invoice-report';
//Setting
import Setting from './components/setting';
import Localization from './components/setting/localization';
import themeSetting from './components/setting/theme-settings';
import rolepermission from './components/setting/role-permission';
import editrole from './components/setting/role-permission/edit-role';
import addrole from './components/setting/role-permission/add-role';
import EmailSettings from './components/setting/email-setting';
import InvoiceSetting from './components/setting/invoice-settings';
import SalarySetting from './components/setting/salary-settings';
import notificationSetting from './components/setting/notifications-settings';
import ChangePassword from './components/setting/change-password';
import LeaveType from './components/setting/leave-type';
import LeaveEdit from './components/setting/leave-type/edit-leave';
import LeaveAdd from './components/setting/leave-type/add-leave';
//Components
import uikit from './components/uielements/uikit';
import typography from './components/uielements/typo';
import tabs from './components/uielements/tabs';
import Widgets from './components/uielements/widgets';
import BasicInput from './components/uielements/forms/basic-inputs';
import FormInputGroup from './components/uielements/forms/form-input-groups';
import Formhorizontal from './components/uielements/forms/form-horizontal';
import FormVertical from './components/uielements/forms/form-vertical';
import TableBasic from './components/uielements/tables/table-basic';
import DataTable from './components/uielements/tables/data-table';
import Calendar from './components/uielements/calendar';
//Pages
import Login from './components/pages/login';
import Register from './components/pages/register';
import ForgotPassword from './components/pages/forgotpassword';
import UserChangepassword from './components/pages/changepassword';
import LockScreen from './components/pages/lock-screen';
import Profile from './components/pages/profile';
import EditProfile from './components/pages/edit-profile';
import Gallery from './components/pages/gallery';
import Error404 from './components/pages/error-404';
import Error500 from './components/pages/error-500';
import ComingSoon from './components/pages/comingsoon';
import BlankPage from './components/pages/blank';
import $ from 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css';
// import './assets/css/bootstrap.min.css';
// import './assets/plugins/fontawesome/css/fontawesome.min.css';
// import './assets/plugins/fontawesome/css/all.min.css';
// import './assets/css/fullcalendar.min.css';
// import './assets/plugins/datatables/datatables.min.css';
// import './assets/css/select2.min.css';
// import './assets/css/bootstrap-datetimepicker.min.css';
// import './assets/plugins/summernote/dist/summernote-bs4.css';
// import './assets/plugins/morris/morris.css';
// import './assets/css/tagsinput.css';
// import './assets/plugins/light-gallery/css/lightgallery.min.css';
// import './assets/css/style.css';

// import './assets/js/jquery-3.5.1.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.slimscroll.js';
// import './assets/js/select2.min.js';
// import './assets/js/moment.min.js';
// import './assets/js/bootstrap-datetimepicker.min.js';
// import './assets/plugins/summernote/dist/summernote-bs4.min.js';
// import './assets/plugins/light-gallery/js/lightgallery-all.min.js';
// import './assets/js/app.js';

class AppUniversal extends Component {
  componentDidMount(){
       
    var $sidebarOverlay = $(".sidebar-overlay");
    if ($('.main-wrapper').length > 0) {
			var $wrapper = $(".main-wrapper");
			$('#mobile_btn').on('click',function() {
        $wrapper.addClass('slide-nav');
				$wrapper.toggleClass('slide-nav');
				$('#chat_sidebar').removeClass('opened');
				$(".dropdown.open > .dropdown-toggle").dropdown("toggle");
				return false;
			});
      $sidebarOverlay.on("click", function(e) {
        console.log("entered")
        var $target = $($(this).attr("data-reff"));
        console.log($target.length)
        if ($target.length) {
          $target.removeClass("opened");
          $("html").removeClass("menu-opened");
          $(this).removeClass("opened");
          $(".main-wrapper").removeClass("slide-nav");
          $(".main-wrapper").toggleClass("slide-nav");
        }
        e.preventDefault();
      });
		}
  }
render() {
  const url = this.props.location.pathname.split("/")[1];
  const exclusionArray = ["login", "register", "forgot-password", "error-404", "error-500","coming-soon","lock-screen"];
  const settingsArray = ["settings", "localization", "theme-settings", "roles-permissions", "email-settings",
        "invoice-settings","salary-settings","notifications-settings","change-password","leave-type",
        "edit-leave-type","add-leave-type","add-role","edit-role"
         ];
  return (
    <Router basename="/admin">
      <div id="my_div_" className="main-wrapper">
        {exclusionArray.indexOf(this.props.location.pathname.split("/")[1]) <= 0 &&
        <Route render={(props) => <Header {...props} />} /> }
          { url === "components" ? <Route render={(props) => <ComponentSidebar {...props} />} /> : 
          settingsArray.indexOf(this.props.location.pathname.split("/")[1]) >= 0 ? 
          <Route render={(props) => <SettingSidebar {...props} />} /> :
          url === "inbox" || url === "mail-view" ? <Route render={(props) => <EmailSidebar {...props} />} /> :
          url === "chat" || url === "voice-call" || url === "video-call" || url === "incoming-call" ?
           <Route render={(props) => <ChatSidebarNav {...props} />} /> :
            <Route render={(props) => <Sidebarnav {...props} />} />
          }        
        <Switch>
          {/* Dashboard */}
          <Route path="/dashboard" exact component={Dashboard} />
          {/* Doctors */}
          <Route path="/doctors" component={Doctors} />
          <Route path="/add-doctor" component={AddDoctor} />
          <Route path="/edit-doctor" component={EditDoctor} />
          {/* Patients */}
          <Route path="/patients" component={Patients} />
          <Route path="/add-patients" component={AddPatient} />
          <Route path="/edit-patient" component={EditPatient} />
          {/* Appointments */}
          <Route path="/appointments" component={Appointments} />
          <Route path="/add-appointment" component={AddAppointments} />
          <Route path="/edit-appointment" component={EditAppointments} />
          {/* Schedule */}
          <Route path="/schedule" component={Schedule} />
          <Route path="/add-schedule" component={AddSchedule} />
          <Route path="/edit-schedule" component={EditSchedule} />
          {/* Departments */}
          <Route path="/departments" component={Departments} />
          <Route path="/add-department" component={AddDepartment} />
          <Route path="/edit-department" component={EditDepartment} />
          {/* EmployeeList */}
          <Route path="/employees" component={EmployeeList} />
          <Route path="/add-employee" component={AddEmployee} />
          <Route path="/edit-employee" component={EditEmployee} />
          <Route path="/leaves" component={Leave} />
          <Route path="/add-leave" component={AddLeave} />
          <Route path="/edit-leave" component={EditLeave} />
          <Route path="/holidays" component={Holidays} />
          <Route path="/add-holiday" component={AddHoliday} />
          <Route path="/edit-holiday" component={EditHoliday} />
          <Route path="/attendance" component={Attendance} />
          {/* Accounts */}          
          <Route path="/invoices" component={Invoice} />
          <Route path="/edit-invoice" component={InvoiceEdit} />
          <Route path="/invoice-view" component={InvoiceView} />
          <Route path="/create-invoice" component={CreateInvoice} />
          <Route path="/payments" component={Payments} />
          <Route path="/expenses" component={Expense} />
          <Route path="/add-expense" component={AddExpense} />        
          <Route path="/edit-expense" component={EditExpense} />
          <Route path="/taxes" component={Taxes} />
          <Route path="/add-tax" component={AddTaxes} />
          <Route path="/edit-tax" component={EditTaxes} />
          <Route path="/provident-fund" component={Fund} />
          <Route path="/add-provident-fund" component={AddFund} />
          <Route path="/edit-provident-fund" component={EditFund} />
          {/* Payroll */}          
          <Route path="/salary" component={Salary} />
          <Route path="/salary-view" component={SalaryView} />
          <Route path="/add-salary" component={AddSalary} />
          <Route path="/edit-salary" component={EditSalary} />
          {/* Chat */}          
          <Route path="/chat" component={Chat} />
          {/* Call */}          
          <Route path="/voice-call" component={Voicecall} />
          <Route path="/video-call" component={Videocall} />
          <Route path="/incoming-call" component={Incomingcall} />
          {/* Mail */}   
          <Route path="/compose" component={ComposeMail} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/mail-view" component={MailView} />  
          {/* Blog */}    
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/add-blog" component={AddBlog} />
          <Route path="/edit-blog" component={BlogEdit} /> 
          {/* Assets */}      
          <Route path="/assets" component={Assets} />
          <Route path="/edit-asset" component={EditAssets} />
          <Route path="/add-asset" component={AssetsAdd} /> 
          {/* Activities */}      
          <Route path="/activities" component={Activities} />
          <Route path="/expense-reports" component={ExpenseReport} />
          <Route path="/invoice-reports" component={InvoiceReport} />
          {/* Activities */}      
          <Route path="/settings" component={Setting} />
          <Route path="/localization" component={Localization} />
          <Route path="/theme-settings" component={themeSetting} />
          <Route path="/roles-permissions" component={rolepermission} />
          <Route path="/edit-role" component={editrole} />
          <Route path="/add-role" component={addrole} />
          <Route path="/email-settings" component={EmailSettings} />
          <Route path="/invoice-settings" component={InvoiceSetting} />
          <Route path="/salary-settings" component={SalarySetting} />
          <Route path="/notifications-settings" component={notificationSetting} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/leave-type" component={LeaveType} />
          <Route path="/edit-leave-type" component={LeaveEdit} />
          <Route path="/add-leave-type" component={LeaveAdd} />
          {/* Components */}     
          <Route path="/uikit" component={uikit} />
          <Route path="/typography" component={typography} />
          <Route path="/tabs" component={tabs} /> 
          <Route path="/widgets" component={Widgets} /> 
          <Route path="/form-basic-inputs" component={BasicInput} />
          <Route path="/form-input-groups" component={FormInputGroup} />
          <Route path="/form-horizontal" component={Formhorizontal} />
          <Route path="/form-vertical" component={FormVertical} />
          <Route path="/tables-basic" component={TableBasic} />
          <Route path="/tables-datatables" component={DataTable} />
          <Route path="/calendar" component={Calendar} />
          {/* Pages */}     
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/change-password2" component={UserChangepassword} />
          <Route path="/lock-screen" component={LockScreen} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/error-500" component={Error500} />
          <Route path="/error-404" component={Error404} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/blank-page" component={BlankPage} />
        </Switch>   
        </div> 
        <div className="sidebar-overlay" data-reff />
    </Router>
  );
};
}
export default AppUniversal;
