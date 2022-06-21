import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Doctor_06 } from "../imagepath"

class DoctorDetails extends Component {

  render() {
    
    return (
        <>
        {/* Content */}
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title">
                  <span>Dr. Albert Sandoval MBBS, FRCS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 col-xl-4 doctor-sidebar">
                <div className="doctor-list doctor-view">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_06} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">Dr. Justin Parker MBBS, FDS</h4>
                        <p>
                          <span className="depart">Physical Therapist</span>
                        </p>
                      </div>
                      <ul className="social-list">
                        <li>
                          <a className="facebook" href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a className="twitter" href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a className="linkedin" href="#"><i className="fab fa-linkedin-in" /></a>
                        </li>
                        <li>
                          <a className="g-plus" href="#"><i className="fab fa-google-plus-g" /></a>
                        </li>
                      </ul>
                      <div className="book-appointment"> 
                        <Link to="/appointment">Book Appointment</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                <div className="about-doctor">
                  <h3 className="sub-title">About the Doctor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                    est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius
                    ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus
                    id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                    est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius
                    ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus
                    id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.</p>
                </div>
                <div className="experience-widget">
                  <h3 className="sub-title">Experience</h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      <li>
                        <div className="timeline-content">
                          <h4>Health Center Hospital - USA (2016 to 2018)</h4>
                          <div>Lorem ipsum dolor sit amet</div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-content">
                          <h4>Health Center Hospital - USA (2012 to 2016)</h4>
                          <div>Lorem ipsum dolor sit amet</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="education-widget">
                  <h3 className="sub-title">Education Informations</h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      <li>
                        <div className="timeline-content">
                          <h4>International College of Medical Science (PG) (2003 to 2008)</h4>
                          <div>FDS</div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-content">
                          <h4>International College of Medical Science (UG) (2000 to 2003)</h4>
                          <div>MBBS</div>
                        </div>
                      </li>
                    </ul>
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

export default DoctorDetails;
