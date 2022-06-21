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
                    <h3 className="company-name">Medifab</h3>
                    <p>1603 Old York Rd,
                      <br />Houma,
                      <br />LA, 75429</p>
                    <p className="m-b-0"><strong>Phone</strong>:
                      <a href="tel:+8503867896">850-386-7896</a>,
                      <br /> <strong>Fax</strong>: <a href="tel:+8503867896">850-386-7896</a>
                      <br /> <strong>Email</strong>: <a href="mailto:medifab@example.com">medifab@example.com</a>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55517.97565638786!2d-90.73665650439683!3d29.57828435575776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862104c30dc11fdd%3A0x366558737c0c7261!2sHouma%2C+LA%2C+USA!5e0!3m2!1sen!2sin!4v1514465894041" height={450} allowFullScreen />
                <p className="contact-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                  est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius
                  ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus
                  id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.
                  Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum urna
                  ut suscipit ullamcorper.
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
