import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
 
  render() {
    
    return (
      <>
         {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="footer-widget">
                  <h4 className="footer-title">Location</h4>
                  <div className="about-clinic">
                    <p><strong>Address:</strong>
                      <br />1603 Old York Rd,
                      <br />Houma, LA, 75429</p>
                    <p className="m-b-0"><strong>Phone</strong>:
                      <a href="tel:+8503867896">(850) 386-7896</a>
                      <br /> <strong>Fax</strong>: 
                      <a href="tel:+8503867896">(850) 386-7896</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer-widget">
                  <h4 className="footer-title">Sitemap</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/departments">Departments</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/doctors">Doctors</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer-widget">
                  <h4 className="footer-title">Blog</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to="/blog">Right Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-left-sidebar">Left Sidebar</Link>
                    </li>
                    <li>
                      <Link to="/blog-full-width">Full Width</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer-widget">
                  <h4 className="footer-title">Appointment</h4>
                  <div className="appointment-btn">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <ul className="social-icons clearfix">
                      <li>
                        <a href="#" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" title="Google Plus"><i className="fab fa-google-plus-g" /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" title="Youtube"><i className="fab fa-youtube" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-12">
                  <div className="copy-text text-center">
                    <p>© 2019 <a href="#">Medifab</a>. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer /*/}
      {/* Sidebar Overlay */}
      <div className="sidebar-overlay" data-reff="#side_menu" />
      </>
    );
  }
}

export default Footer;
