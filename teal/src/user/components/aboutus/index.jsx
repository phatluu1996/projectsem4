import React, { Component } from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Testi_01,Testi_02,Testi_03,Testi_04,Testi_05,About_img } from '../imagepath';

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                  est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius
                  ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus
                  id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.</p>
                <p>Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum urna
                  ut suscipit ullamcorper. Proin sapien felis, dignissim non finibus eget,
                  luctus vel purus. Pellentesque efficitur congue orci ornare accumsan. Nullam
                  ultrices libero vel imperdiet scelerisque. Donec vel mauris eros.</p>
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                        est interdum pretium. Fusce id tortor fringilla.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-det">
                      <h4>Our Vission</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                        est interdum pretium. Fusce id tortor fringilla.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="about-det">
                      <h4>Our Plan</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus
                        est interdum pretium. Fusce id tortor fringilla.</p>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus
                    nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.
                    Duis dictum eget dolor vel blandit.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore.
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore.
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore.
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore.</p>
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
