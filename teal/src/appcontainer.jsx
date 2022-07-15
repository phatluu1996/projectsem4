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
//User
import Profile from "./user/components/userprofile/profile/index.jsx";


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
import AdminAddAppointment from './admin/components/appointments/addappointment';
import AdminEditAppointment from './admin/components/appointments/editappointment';
//Schedule
import AdminSchedules from './admin/components/schedule';
import AdminAddSchedule from './admin/components/schedule/addschedule';
import AdminEditSchedule from './admin/components/schedule/editschedule';
//Departments
import AdminDepartments from './admin/components/departments';
import AdminAddDepartment from './admin/components/departments/adddepartments';
import AdminEditDepartment from './admin/components/departments/editdepartment';
//Employees
import AdminEmployees from './admin/components/employees/employeelist';
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
import AdminEditAsset from './admin/components/assets/assets-edit';
import AdminAddAsset from './admin/components/assets/assets-add';
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

import "./assets/css/bootstrap.min.css"
import "./assets/css/fontawesome/css/fontawesome.min.css"
import "./assets/css/fontawesome/css/all.min.css";
import "./assets/css/bootstrap-datetimepicker.min.css";

import "./assets/js/jquery-3.5.1.min.js";
import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";
import "./assets/js/bootstrap-datetimepicker.min.js";
import "./assets/js/datepicker.js";
import "./assets/js/theme.js";

import "antd/dist/antd.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css"
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/fullcalendar.min.css";
import "./assets/plugins/datatables/datatables.min.css";
import "./assets/css/select2.min.css";
import "./assets/plugins/summernote/dist/summernote-bs4.css";
import "./assets/plugins/morris/morris.css";
import "./assets/css/tagsinput.css";
import "./assets/plugins/light-gallery/css/lightgallery.min.css";


import "./assets/js/bootstrap.min.js";
import "./assets/js/jquery.slimscroll.js";
import "./assets/js/select2.min.js";
import "./assets/js/moment.min.js";
import "./assets/js/bootstrap-datetimepicker.min.js";
// import "./assets/plugins/summernote/dist/summernote-bs4.min.js";
import "./assets/plugins/light-gallery/js/lightgallery-all.min.js";
import "./assets/js/app.js";

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ReceptionAppointments from "./admin/components/reception-appointments/index.jsx";
import ReceptionPendingAppointments from "./admin/components/reception-appointments/pending/index.jsx";
import { ADMIN, DOCTOR, PATIENT, RECEPTION } from "./constants.js";
import DoctorSchedule from "./admin/components/doctor-schedule/index.jsx";



class AppUniversal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  componentDidMount() {

  }


  render() {
    const url = this.props.location.pathname.split("/")[1];
    if (url.includes("error-404") || url.includes("error-500")) {
      $('body').addClass('error-page');
    }

    const login_register_avai = [PATIENT, DOCTOR, RECEPTION, ADMIN];
    return (
      <Router basename="/">
        <div className="main-wrapper">
          <Switch>
            <BusinessRoute component={Home} path="/" exact restricted={true} />
            <BusinessRoute restricted={false} path="/appointment" exact component={Appointment} role={PATIENT} />
            <BusinessRoute restricted={localStorage.getItem("userToken") == null} path="/login" exact component={Login}/>
            <BusinessRoute restricted={localStorage.getItem("userToken") == null} component={Register} path="/register" exact />
            <BusinessRoute component={Profile} path="/profile" exact role={PATIENT} />
            <BusinessRoute component={AboutUs} path="/aboutus" exact restricted={true} />
            <BusinessRoute component={Departments} path="/departments" exact restricted={true} />
            <BusinessRoute component={Doctor} path="/doctors" exact restricted={true} />
            <BusinessRoute component={DoctorDetails} path="/doctordetails" exact restricted={true} />
            <BusinessRoute component={ContactUs} path="/contact-us" exact restricted={true} />
            <BusinessRoute component={ForgotPassword} path="/forgot-password" exact restricted={true} />

            <AdminRoute component={AdminDashboard} path="/admin" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminDoctors} path="/admin/doctors" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddDoctor} path="/admin/doctors/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditDoctor} path="/admin/doctors/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminSchedules} path="/admin/schedules" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddSchedule} path="/admin/schedules/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditSchedule} path="/admin/schedules/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminPatients} path="/admin/patients" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddPatient} path="/admin/patients/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditPatient} path="/admin/patients/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminDepartments} path="/admin/departments" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddDepartment} path="/admin/departments/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditDepartment} path="/admin/departments/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAppointments} path="/admin/appointments" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddAppointment} path="/admin/appointments/add" exact pushBack="/admin/appointments" restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditAppointment} path="/admin/appointments/update/:id" exact pushBack="/admin/appointments" restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAssets} path="/admin/assets" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddAsset} path="/admin/assets/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditAsset} path="/admin/assets/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEmployees} path="/admin/employees" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddEmployee} path="/admin/employees/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditEmployee} path="/admin/employees/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminLeave} path="/admin/leaves" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddLeave} path="/admin/leaves/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditLeave} path="/admin/leaves/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminSalary} path="/admin/salaries" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminAddSalary} path="/admin/salaries/add" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditSalary} path="/admin/salaries/update/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminEditProfile} path="/admin/profile" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminSalaryView} path="/admin/salaries/export/:id" exact restricted={false} role={ADMIN} />
            <AdminRoute component={AdminCalendar} path="/doctor/appointments" exact restricted={false} role={DOCTOR} />
            <AdminRoute component={DoctorSchedule} path="/doctor/schedules" exact restricted={false} role={DOCTOR}/>
            <AdminRoute component={AdminAddSchedule} path="/doctor/schedules/add" exact restricted={false} role={DOCTOR} pushBack="/doctor/schedules" isDoctor={true}/>
            <AdminRoute component={AdminEditSchedule} path="/doctor/schedules/update/:id" exact restricted={false} role={DOCTOR} pushBack="/doctor/schedules" isDoctor={true}/>
            <AdminRoute component={ReceptionAppointments} path="/reception/appointments" exact role={RECEPTION} />
            <AdminRoute component={AdminAddAppointment} path="/reception/appointments/add" exact pushBack="/reception/appointments" isReception={true} restricted={false} role={RECEPTION} />
            <AdminRoute component={AdminEditAppointment} path="/reception/appointments/update/:id" exact pushBack="/reception/appointments" isReception={true} restricted={false} role={RECEPTION} />
            <AdminRoute component={ReceptionPendingAppointments} path="/reception/appointments/pending" exact restricted={false} role={RECEPTION} />
          </Switch>
        </div>

      </Router>
    );
  };
}
export default AppUniversal;
