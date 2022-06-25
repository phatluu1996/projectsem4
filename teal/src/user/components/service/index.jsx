import React, { Component } from "react";
import { Link } from "react-router-dom";

class Service extends Component {

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
                  <span>Our Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header /*/}
        <section className="content service-list">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h3 className="header-title">Featured Services</h3>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="row service-row">
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-medkit" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/service-details">First Aid Treatment</Link>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-tint" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/service-details">Blood Bank</Link>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-wheelchair" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">For Disable</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-heartbeat" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">Heart Specialist</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                    est interdum
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details"><i className="far fa-eye" aria-hidden="true" /></Link>
                  </div>
                  <h4><Link to="/service-details">Eye Care Specialist</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details"><i className="fas fa-h-square" aria-hidden="true" /></Link>
                  </div>
                  <h4><Link to="/service-details">Multi Speciality</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="other-services">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h3 className="header-title">Other Services</h3>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="row service-row">
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-hospital-symbol" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">Intensive Care</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-stethoscope" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/service-details">Medical Consultation</Link>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-wheelchair" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">Appointment</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-user-md" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">Professional Doctors</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="far fa-handshake" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">Health Care</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services-box">
                  <div className="service-icon">
                    <Link to="/service-details">
                      <i className="fas fa-ambulance" aria-hidden="true" />
                    </Link>
                  </div>
                  <h4><Link to="/service-details">24/7 Ambulance</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest interdum</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Content /*/}
        </>
      
    );
  }
}

export default Service;
