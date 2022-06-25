import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BusinessRoute from './businessroute.jsx';
import AdminRoute from './adminroute.jsx';

import Header from "./user/components/header/index";
import Footer from "./user/components/footer";
//Home
import Home from "./user/components/home";
//Department
import Departments from "./user/components/departments";
import DepartmentDetails from "./user/components/departments/department_details";
//Service
import Service from "./user/components/service";
import ServiceDetails from "./user/components/service/service_details";
//Doctors
import Doctor from "./user/components/doctors";
import DoctorDetails from "./user/components/doctors/doctor_details";
//Blog
import Blog from "./user/components/blog/blog";
import BlogLeftSidebar from "./user/components/blog/blog_left_sidebar";
import BlogFullWidth from "./user/components/blog/blog_full_width";
import BlogDetails from "./user/components/blog/blog_details";
import BlogGrid from "./user/components/blog/blog_grid";
import AboutUs from "./user/components/aboutus";
import ContactUs from "./user/components/contactus";
import Appointment from "./user/components/appointment/index.jsx";
import Login from "./user/components/login";
import Register from "./user/components/register";
import ForgotPassword from "./user/components/forgotpassword";
import Error404 from "./user/components/error_404";

//Admin

import AdminHeader from './admin/components/header/index';
import AdminSidebarnav from './admin/components/sidebar';
import AdminChatSidebarNav from './admin/components/sidebar/chatsidebar';
import AdminComponentSidebar from './admin/components/sidebar/componentsidebar';
import AdminEmailSidebar from './admin/components/sidebar/emailsidebar';
import AdminSettingSidebar from './admin/components/sidebar/setting_sidebar';
//dashboard
import AdminDashboard from './admin/components/dashboard';
//doctors
import AdminDoctors from './admin/components/doctorslist';
import AdminAddDoctor from './admin/components/doctorslist/adddoctor';
import AdminEditDoctor from './admin/components/doctorslist/editdoctor';
//patients
import AdminPatients from './admin/components/patients';
import AdminAddPatient from './admin/components/patients/addpatients';
import AdminEditPatient from './admin/components/patients/editpatients';
//Appointments
import AdminAppointments from './admin/components/appointments';
import AdminAddAppointments from './admin/components/appointments/addappointment';
import AdminEditAppointments from './admin/components/appointments/editappointment';
//Schedule
import AdminSchedule from './admin/components/schedule';
import AdminAddSchedule from './admin/components/schedule/addschedule';
import AdminEditSchedule from './admin/components/schedule/editshedule';
//Departments
import AdminDepartments from './admin/components/departments';
import AdminAddDepartment from './admin/components/departments/adddepartments';
import AdminEditDepartment from './admin/components/departments/editdepartment';
//Employees
import AdminEmployeeList from './admin/components/employees/employeelist';
import AdminAddEmployee from './admin/components/employees/employeelist/add-employee';
import AdminEditEmployee from './admin/components/employees/employeelist/edit-employee';
import AdminLeave from './admin/components/employees/leave/index';
import AdminAddLeave from './admin/components/employees/leave/addleave';
import AdminEditLeave from './admin/components/employees/leave/editleave';
import AdminHolidays from './admin/components/employees/holidays';
import AdminAddHoliday from './admin/components/employees/holidays/addholidays';
import AdminEditHoliday from './admin/components/employees/holidays/editholidays';
import AdminAttendance from './admin/components/employees/attendance';
//Accounts
import AdminInvoice from './admin/components/accounts/invoices';
import AdminInvoiceEdit from './admin/components/accounts/invoices/edit';
import AdminInvoiceView from './admin/components/accounts/invoices/view';
import AdminCreateInvoice from './admin/components/accounts/invoices/create';
import AdminPayments from './admin/components/accounts/payments/index';
import AdminExpense from './admin/components/accounts/expense/index';
import AdminAddExpense from './admin/components/accounts/expense/add-expense';
import AdminEditExpense from './admin/components/accounts/expense/edit-expense';
import AdminTaxes from './admin/components/accounts/taxes';
import AdminAddTaxes from './admin/components/accounts/taxes/add-taxes';
import AdminEditTaxes from './admin/components/accounts/taxes/edit-taxes';
import AdminFund from './admin/components/accounts/fund';
import AdminAddFund from './admin/components/accounts/fund/add-fund';
import AdminEditFund from './admin/components/accounts/fund/edit-fund';
//Payroll
import AdminSalary from './admin/components/payroll/salary';
import AdminAddSalary from './admin/components/payroll/salary/add-salay';
import AdminEditSalary from './admin/components/payroll/salary/edit-salary';
import AdminSalaryView from './admin/components/payroll/salary/salary-view';
//Chat
import AdminChat from './admin/components/chat';
import AdminVoicecall from './admin/components/calls/voicecall';
import AdminVideocall from './admin/components/calls/videocall';
import AdminIncomingcall from './admin/components/calls/incomingcall';
import AdminComposeMail from './admin/components/mail';
import AdminInbox from './admin/components/mail/inbox';
import AdminMailView from './admin/components/mail/mail-view';
//Blog
import AdminBlog from './admin/components/blog';
import AdminBlogDetails from './admin/components/blog/blog-detail';
import AdminAddBlog from './admin/components/blog/blog-add';
import AdminBlogEdit from './admin/components/blog/blog-edit';
//Assets
import AdminAssets from './admin/components/assets';
import AdminEditAssets from './admin/components/assets/assets-edit';
import AdminAssetsAdd from './admin/components/assets/assets-add';
//Activities
import AdminActivities from './admin/components/activities';
//Report
import AdminExpenseReport from './admin/components/reports/expense-report';
import AdminInvoiceReport from './admin/components/reports/invoice-report';
//Setting
import AdminSetting from './admin/components/setting';
import AdminLocalization from './admin/components/setting/localization';
import AdminthemeSetting from './admin/components/setting/theme-settings';
import Adminrolepermission from './admin/components/setting/role-permission';
import Admineditrole from './admin/components/setting/role-permission/edit-role';
import Adminaddrole from './admin/components/setting/role-permission/add-role';
import AdminEmailSettings from './admin/components/setting/email-setting';
import AdminInvoiceSetting from './admin/components/setting/invoice-settings';
import AdminSalarySetting from './admin/components/setting/salary-settings';
import AdminnotificationSetting from './admin/components/setting/notifications-settings';
import AdminChangePassword from './admin/components/setting/change-password';
import AdminLeaveType from './admin/components/setting/leave-type';
import AdminLeaveEdit from './admin/components/setting/leave-type/edit-leave';
import AdminLeaveAdd from './admin/components/setting/leave-type/add-leave';
//Components
import Adminuikit from './admin/components/uielements/uikit';
import Admintypography from './admin/components/uielements/typo';
import Admintabs from './admin/components/uielements/tabs';
import AdminWidgets from './admin/components/uielements/widgets';
import AdminBasicInput from './admin/components/uielements/forms/basic-inputs';
import AdminFormInputGroup from './admin/components/uielements/forms/form-input-groups';
import AdminFormhorizontal from './admin/components/uielements/forms/form-horizontal';
import AdminFormVertical from './admin/components/uielements/forms/form-vertical';
import AdminTableBasic from './admin/components/uielements/tables/table-basic';
import AdminDataTable from './admin/components/uielements/tables/data-table';
import AdminCalendar from './admin/components/uielements/calendar';
//Pages
import AdminUserChangepassword from './admin/components/pages/changepassword';
import AdminLockScreen from './admin/components/pages/lock-screen';
import AdminProfile from './admin/components/pages/profile';
import AdminEditProfile from './admin/components/pages/edit-profile';
import AdminGallery from './admin/components/pages/gallery';
import AdminError500 from './admin/components/pages/error-500';
import AdminComingSoon from './admin/components/pages/comingsoon';
import AdminBlankPage from './admin/components/pages/blank';
import $ from 'jquery';
import { string } from "prop-types";

class AppUniversal extends Component {
  render() {
    const url = this.props.location.pathname.split("/")[1];
    if (url.includes("error-404") || url.includes("error-500")) {
      $('body').addClass('error-page');
    }
    return (
      <Router basename="/">
        <div className="main-wrapper">

          <Route render={(props) => <Header {...props} />} />
          <Switch>
            {/* <PublicRoute restricted={false} path="/" exact component={Home} />
            <PublicRoute restricted={false} path="/departments" exact component={Departments} />
            <PublicRoute restricted={false} path="/department-details" exact component={DepartmentDetails} />
            <PublicRoute restricted={false} path="/services" exact component={Service} />
            <PublicRoute restricted={false} path="/service-details" exact component={ServiceDetails} />
            <PublicRoute restricted={false} path="/doctors" exact component={Doctor} />
            <PublicRoute restricted={false} path="/doctor-details" exact component={DoctorDetails} />
            <PublicRoute restricted={false} path="/blog" exact component={Blog} />
            <PublicRoute restricted={false} path="/blog-left-sidebar" exact component={BlogLeftSidebar} />
            <PublicRoute restricted={false} path="/blog-full-width" exact component={BlogFullWidth} />
            <PublicRoute restricted={false} path="/blog-grid" exact component={BlogGrid} />
            <PublicRoute restricted={false} path="/blog-details" exact component={BlogDetails} />
            <PublicRoute restricted={false} path="/about-us" exact component={AboutUs} />
            <PublicRoute restricted={false} path="/contact-us" exact component={ContactUs} />
            <PublicRoute restricted={false} path="/appointment" exact component={Appointment} />
            <PublicRoute restricted={false} path="/login" exact component={Login} />
            <PublicRoute restricted={false} path="/register" exact component={Register} />
            <PublicRoute restricted={false} path="/forgot-password" exact component={ForgotPassword} />
            <PublicRoute restricted={false} path="/404" exact component={Error404} /> */}

            {/* <PublicRoute restricted={false} component={Home} path="/" exact />
            <PublicRoute restricted={true} component={Login} path="/login" exact />
            <PublicRoute restricted={true} component={Register} path="/register" exact />
            <PublicRoute restricted={true} component={ForgotPassword} path="/forgot-password" exact /> */}

            {/* <PrivateRoute component={AdminDashboard} path="/admin/dashboard" exact /> */}
            <BusinessRoute component={Home} path="/" exact />
            <AdminRoute component={AdminDashboard} path="/admin/dashboard" exact />

          </Switch>
          <Route render={(props) => <Footer {...props} />} />
        </div>
      </Router>
    );
  };
}
export default AppUniversal;