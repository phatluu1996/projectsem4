import React, { Component } from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Testi_01, Testi_02, Testi_03, Testi_04, Testi_05, About_img } from '../imagepath';
import { LineWeight } from "@material-ui/icons";

class AboutUs extends Component {

  render() {
    var responsive = {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
    return (
      <>
        {/* Content */}
        <div className="main-content">
          {/* Page Header */}
          <div className="page-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="page-title"> <span>About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header /*/}
          <section className="content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <h3 className="header-title">Company Profile</h3>
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 about-desc">
                  <p><b>Mediapp</b> was founded by <b>Dr Kharle De Arch</b> in 2000 with a group of French doctors who shared the vision of bringing world class healthcare into Vietnam. Located in the burgeoning District 3 of Ho Chi Minh City has evolved into a full-service, one stop provider of quality care for the local population in and around Ho Chi Minh City.

                    As the first JCI accredited hospital in South Vietnam,<b>Mediapp</b> is known for its international standard of care, commitment to clinical quality and patient centric service.

                    With over 950 service staff, including 130 Vietnamese and expatriate doctors and provides care across more than 30 medical specialties at its 220-bed hub hospital. It also operates an outpatient clinic at the heart of District 1, Ho Chi Minh City’s traditional business district. In addition to catering for the local Vietnamese population, also receives patients from neighbouring countries of Cambodia, Laos and Myanmar..</p>
                </div>
              </div>
              <div className="about-content">
                <div className="text-center">
                  <img src={About_img} className="img-fluid" alt="" />
                </div>
                <div className="our-mission">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="about-det">
                        <h4>Our Mission</h4>
                        <p>To Provide World-Class Medical Expertise People Trust.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-det">
                        <h4>Our Vission</h4>
                        <p>To Be a Leading Medical Provider in Asia..</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="about-det">
                        <h4>Our Plan</h4>
                        <p>Our Patients are at the Heart of the Hospital</p>
                        <p>We are Highly Skilled and Ethical Professionals</p>
                        <p>We Follow Established Quality Processes and International Standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section testimonials">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <h3 className="header-title">Testimonials</h3>
                    <div className="line" />
                    <p>To provide international standard of healthcare services.
                      To provide highly trained medical staff who are trained in the most up-to-date medical techniques and modern methods of patient care.
                      To use modern medical equipment which are correctly and regularly maintained.
                      To provide friendly and efficient service.
                      To provide the finest amenities ensuring the highest standards of cleanliness and hygiene.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  {/* <div id="testimonial_slider" className="owl-carousel text-center"> */}
                  <OwlCarousel loop nav
                    margin={30}
                    id="testimonial_slider"
                    className="text-center"
                    items={3}
                    responsive={responsive}
                  >
                    <div className="item">
                      <div className="testimonial-list">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={Testi_03} alt="" width={150} height={150} />
                        </div>
                        <div className="testimonial-text">
                          <p>Really good service and we will come back soon.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <h3 className="testi-user">- Jennifer Robinson</h3>
                          <span>Leland, USA</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-list">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={Testi_02} alt="" width={150} height={150} />
                        </div>
                        <div className="testimonial-text">
                          <p>Really good service and we will come back soon.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <h3 className="testi-user">- Denise Stevens</h3>
                          <span>Abington, USA</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-list">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={Testi_05} alt="" width={150} height={150} />
                        </div>
                        <div className="testimonial-text">
                          <p>Really good service and we will come back soon.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <h3 className="testi-user">- Charles Ortega</h3>
                          <span>El Paso, USA</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-list">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={Testi_04} alt="" width={150} height={150} />
                        </div>
                        <div className="testimonial-text">
                          <p>Really good service and we will come back soon.</p>
                        </div>
                        <div className="testimonial-author">
                          <h3 className="testi-user">- Kyle Bowman</h3>
                          <span>Vero Beach, USA</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-list">
                        <div className="testimonial-img">
                          <img className="img-fluid" src={Testi_01} alt="" width={150} height={150} />
                        </div>
                        <div className="testimonial-text">
                          <p>Really good service and we will come back soon.</p>
                        </div>
                        <div className="testimonial-author">
                          <h3 className="testi-user">- Linda Carpenter</h3>
                          <span>Tallahassee, USA</span>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
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

export default AboutUs;
