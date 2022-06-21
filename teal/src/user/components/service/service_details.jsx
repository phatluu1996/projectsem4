import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Service_img } from "../imagepath"

class ServiceDetails extends Component {

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
                  <span>First Aid Treatment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8 service-left">
                <div className="service-view">
                  <div className="service-image">
                    <img alt="" src={Service_img} className="img-fluid" />
                  </div>
                  <div className="service-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                      porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                      et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                      quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                      qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <ul className="list-square">
                      <li>Nulla lobortis quam tellus.</li>
                      <li>Quisque pretium quam.</li>
                      <li>Sed pellentesque tellus ac magna tempor.</li>
                      <li>Curabitur semper enim id accumsan.</li>
                    </ul>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
                      harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                      cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda est</p>
                  </div>
                </div>
              </div>
              <aside className="col-md-4 sidebar-right">
                {/* Search */}
                <div className="widget search-widget">
                  <form className="search-form">
                    <div className="input-group">
                      <input type="text" placeholder="Search..." className="form-control" />
                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-primary">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Categories */}
                <div className="widget category-widget">
                  <h5>Other Services</h5>
                  <ul className="categories">
                    <li>
                      <a href="#">Cancer Diseases</a>
                    </li>
                    <li>
                      <a href="#">Children's Health Problems</a>
                    </li>
                    <li>
                      <a href="#">Kid's Health Questions &amp; Answers</a>
                    </li>
                    <li>
                      <a href="#">Cancer Diseases</a>
                    </li>
                    <li>
                      <a href="#">Children's Health Problems</a>
                    </li>
                    <li>
                      <a href="#">Kid's Health Questions &amp; Answers</a>
                    </li>
                  </ul>
                </div>
                <div className="widget contact-widget">
                  <div className="contact-wrap">
                    <h3>Emergency Treatment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctusest.</p> 
                    <span className="contact-phone">
                      <i className="fa fa-phone" aria-hidden="true" /> 
                      <a href="tel:+8503867896">(850) 386-7896</a>
                    </span>
                    <span className="contact-info">Call us for book and appointment</span> 
                    <Link className="btn btn-primary" to="/contact-us">Contact Us Now</Link>
                  </div>
                </div>
                <div className="widget working-widget">
                  <div className="working-hours">
                    <h3><i className="fa fa-clock-o" aria-hidden="true" /> Working Hours</h3>
                    <ul>
                      <li>
                        <span>Monday</span>  <b>9.00  AM  To  5.00 PM</b>
                      </li>
                      <li>
                        <span>Tuesday</span>  <b>9.00  AM  To  5.00 PM	</b>
                      </li>
                      <li>
                        <span>Wednesday</span>  <b>9.00  AM  To  5.00 PM</b>
                      </li>
                      <li>
                        <span>Thursday</span>  <b>9.00  AM  To  5.00 PM</b>
                      </li>
                      <li>
                        <span>Friday</span>  <b>9.00  AM  To  5.00 PM</b>
                      </li>
                      <li>
                        <span>Saturday</span>  <b>11.00  AM  To  3.00 PM</b>
                      </li>
                      <li>
                        <span>Sunday</span>  <b>Closed</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* Content /*/}
        </>
      
    );
  }
}

export default ServiceDetails;
