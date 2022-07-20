import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Doctor_01,Doctor_02,Doctor_03,Doctor_04,Doctor_05,Doctor_06,
  Doctor_07,Doctor_08,Doctor_09 } from "../imagepath"

class Doctor extends Component {

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
                  <span>Our Doctors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h3 className="header-title">Our Physician Lists</h3>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="row doctors-list">
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_06} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name"><a>Dr. Justin Parker MBBS, FDS</a></h4>
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
                      <div className="view-profie"> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_09} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Ronald Jacobs MBBS, FDS</Link></h4>
                        <p>
                          <span className="depart">Oncologist</span>
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
                      <div className="view-profie"> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_01} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name"><Link to="/doctor-details">Dr. Albert Sandoval MBBS, FDS</Link></h4>
                        <p>
                          <span className="depart">Neurologist</span>
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
                      <div className="view-profie"> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_02} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name"><Link to="/doctor-details">Dr. Linda Barrett MBBS, FDS</Link></h4>
                        <p>
                          <span className="depart">Dentist</span>
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
                      <div className="view-profie"> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_03} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Cristina Groves MBBS, FDS</Link>
                        </h4>
                        <p>
                          <span className="depart">Gynecologist</span>
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
                      <div className="view-profie"> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_04} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Henry Daniels MBBS, FDS</Link>
                        </h4>
                        <p>
                          <span className="depart">Cardiologist</span>
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
                      <div className="view-profie">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_05} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Diana Bailey MBBS, FDS</Link>
                        </h4>
                        <p>
                          <span className="depart">General Surgery</span>
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
                      <div className="view-profie"> 
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_07} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Marie Wells MBBS, FDS</Link>
                        </h4>
                        <p>
                          <span className="depart">Psychiatrist</span>
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
                      <div className="view-profie">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="doctor-list">
                  <div className="doctor-inner">
                    <img className="img-fluid" alt="" src={Doctor_08} />
                    <div className="doctor-details">
                      <div className="doctor-info">
                        <h4 className="doctor-name">
                          <Link to="/doctor-details">Dr. Pamela Curtis MBBS, FDS</Link>
                        </h4>
                        <p>
                          <span className="depart">Pediatrics</span>
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
                      <div className="view-profie">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center"> 
                <a href="#" className="btn btn-primary load-more">Load More</a>
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

export default Doctor;
