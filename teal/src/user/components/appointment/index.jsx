import React, { Component } from "react";
import { GET } from '../../../constants';
import { axiosAction, notify } from '../../../actions';

class Appointment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data:{
        username : null,
        password : null
      },
      statusChange:{
        username : false,
        password : false
      }
    }
  }

  componentDidMount(){
    axiosAction("/doctors", GET, (res) => {
      notify('success', "Success")
      }, (err) => notify('error', 'Error'));
  }
  
  render() {
    
    return (
      <>
      {/* Content */}
      <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div id="appointment-box" className="account-box">
              <div className="appointment">
                <ul className="nav nav-tabs nav-justified">
                  <li className="nav-item"> 
                    <a href="#clinic-consultation" data-toggle="tab" aria-expanded="false" className="nav-link active"><span>Clinic Consultation</span></a>
                  </li>
                  <li className="nav-item"> 
                    <a href="#online-consultation" data-toggle="tab" aria-expanded="true" className="nav-link"><span>Online Consultation</span></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="clinic-consultation">
                    <form>
                      <div className="form-group">
                        <label>Name <span className="text-red">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Email <span className="text-red">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Mobile <span className="text-red">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Select Consultation Type <span className="text-red">*</span>
                        </label>
                        <select className="form-control select">
                          <option value>Please select</option>
                          <option value="Blood Checkup">Blood Checkup</option>
                          <option value="Diabetology">Diabetology</option>
                          <option value="Endocrinology">Endocrinology</option>
                          <option value="Vaccination Center">Vaccination Center</option>
                          <option value="Interventional Cardiology">Interventional Cardiology</option>
                          <option value="Pulmonology">Pulmonology</option>
                          <option value="Gastro Entorology">Gastro Entorology</option>
                          <option value="Nephrology">Nephrology</option>
                          <option value="Psychiatry">Psychiatry</option>
                          <option value="Obstetrics & Gynaecology">Obstetrics &amp; Gynaecology</option>
                          <option value="Urology">Urology</option>
                          <option value="Physiotherapy">Physiotherapy</option>
                          <option value="Premarital Counseling">Premarital Counseling</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Message (optional)</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                      <div className="form-group text-center m-b-0">
                        <input type="submit" className="btn btn-primary account-btn" defaultValue="Submit" />
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="online-consultation">
                    <form>
                      <div className="form-group">
                        <label>Choose the Date</label>
                        <div className="calendar">
                          <div className="input-wrapper">
                            <input data-date-format="dd/mm/yyyy" id="datepicker" className="cal-input" />	<i className="far fa-calendar-alt input-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="m-b-20">Choose your Convenient Time</label>
                        <ul className="appoint-time">
                          <li>08:00am - 09:00am</li>
                          <li>09:00am - 10:00am</li>
                          <li>10:00am - 11:00am</li>
                          <li>11:00am - 12:00pm</li>
                          <li>01:00pm - 02:00pm</li>
                          <li>02:00pm - 03:00pm</li>
                          <li>03:00pm - 04:00pm</li>
                          <li>04:00pm - 05:00pm</li>
                        </ul>
                      </div>
                      <div className="form-group">
                        <label>Select the Treatment Name</label>
                        <select className="form-control select">
                          <option value>Blood Checkup</option>
                          <option value>Cardiology</option>
                          <option value>Heart attack</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Choose the Doctor</label>
                        <select className="form-control select">
                          <option value>Option 1</option>
                          <option value>Option 1</option>
                          <option value>Option 1</option>
                        </select>
                      </div>
                      <div className="form-group text-center m-b-0">
                        <button className="btn btn-primary account-btn" type="submit">Confirm Booking</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content /*/}
      </>
    );
  }
}

export default Appointment;
