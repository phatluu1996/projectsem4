import React, { Component } from "react";

class ContactUs extends Component {

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
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="contact-left">
                  <div className="contact-address">
                    <h3 className="company-name">Mediapp</h3>
                    <p>590 CMT8 Ward 11 Disttrict 3,
                      <br />HCMC,
                      <br />VIETNAM, 723564</p>
                    <p className="m-b-0"><strong>Phone</strong>:
                      <a href="tel:+84981578920">+84 981578920</a>,
                      <br /> <strong>Fax</strong>: <a href="tel:+84981578920">+84 981578920</a>
                      <br /> <strong>Email</strong>: <a href="mailto:mediapp@example.com">mediapp@gmail.com</a>
                    </p>
                  </div>
                  <div className="working-hours">
                    <h3>Working Hours</h3>
                    <ul>
                      <li>
                        <span>Monday</span>  <b>9.00 AM To 5.00 PM</b>
                      </li>
                      <li>
                        <span>Tuesday</span>  <b>9.00 AM To 5.00 PM</b>
                      </li>
                      <li>
                        <span>Wednesday</span>  <b>9.00 AM To 5.00 PM</b>
                      </li>
                      <li>
                        <span>Thursday</span>  <b>9.00 AM To 5.00 PM</b>
                      </li>
                      <li>
                        <span>Friday</span>  <b>9.00 AM To 5.00 PM</b>
                      </li>
                      <li>
                        <span>Saturday</span>  <b>11.00 AM To 3.00 PM</b>
                      </li>
                      <li>
                        <span>Sunday</span>  <b>Closed</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <div className="col-md-8 map-frame">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.2773997461!2d106.6662743!3d10.7868348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2ecb62e0d050fe9!2zRlBUIEFwdGVjaCBIQ00gLSBI4buHIFRo4buRbmcgxJDDoG8gVOG6oW8gTOG6rXAgVHLDrG5oIFZpw6puIFF14buRYyBU4bq_IChTaW5jZSAxOTk5KQ!5e0!3m2!1svi!2s!4v1656753520872!5m2!1svi!2s" height={450} allowFullScreen />
                
                <p className="contact-cont">With over 950 service staff, including 130 Vietnamese and expatriate doctors, provides care across more than 30 medical specialties at its 220-bed hub hospital. It also operates an outpatient clinic at the heart of District 1, Ho Chi Minh City’s traditional business district. In addition to catering for the local Vietnamese population, also receives patients from neighbouring countries of Cambodia, Laos and Myanmar...
                </p>
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

export default ContactUs;
