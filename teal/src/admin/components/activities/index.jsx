import React, { Component } from 'react';
import OpenChat from "../sidebar/openchatheader";
import { Link } from 'react-router-dom';
import { User_img } from "../imagepath"

class Activities extends Component{

    render(){     
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="page-title">Activities</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="activity">
                    <div className="activity-box">
                      <ul className="activity-list">
                        <li>
                          <div className="activity-user">
                            <Link to="/profile" title="Lesley Grauer" data-toggle="tooltip" className="avatar">
                              <img alt="Lesley Grauer" src={User_img} className="img-fluid rounded-circle" />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Lesley Grauer</Link> added new task <a href="#">Hospital Administration</a>
                              <span className="time">4 mins ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link to="/profile" className="avatar" title="Jeffery Lalor" data-toggle="tooltip">L</Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Jeffery Lalor</Link> added <Link to="/profile" className="name">Loren Gatlin</Link> and <Link to="/profile" className="name">Tarah Shropshire</Link> to project <a href="#">Patient appointment booking</a>
                              <span className="time">6 mins ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link to="/profile" title="Catherine Manseau" data-toggle="tooltip" className="avatar">
                              <img alt="Catherine Manseau" src={User_img} className="img-fluid rounded-circle" />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Catherine Manseau</Link> completed task <a href="#">Appointment booking with payment gateway</a>
                              <span className="time">12 mins ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                        <li>
                          <div className="activity-user">
                            <a href="#" title="Bernardo Galaviz" data-toggle="tooltip" className="avatar">
                              <img alt="Bernardo Galaviz" src={User_img} className="img-fluid rounded-circle" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Bernardo Galaviz</Link> changed the task name <a href="#">Doctor available module</a>
                              <span className="time">1 day ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link to="/profile" title="Mike Litorus" data-toggle="tooltip" className="avatar">
                              <img alt="Mike Litorus" src={User_img} className="img-fluid rounded-circle" />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Mike Litorus</Link> added new task <a href="#">Patient and Doctor video conferencing</a>
                              <span className="time">2 days ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link to="/profile" title="Jeffery Lalor" data-toggle="tooltip" className="avatar">
                              <img alt="Jeffery Lalor" src={User_img} className="img-fluid rounded-circle" />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link to="/profile" className="name">Jeffery Lalor</Link> added <Link to="/profile" className="name">Jeffrey Warden</Link> and <Link to="/profile" className="name">Bernardo Galaviz</Link> to the task of <a href="#">Private chat module</a>
                              <span className="time">7 days ago</span>
                            </div>
                          </div>
                          <a className="activity-delete" href="" title="Delete">×</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
};        

export default Activities;