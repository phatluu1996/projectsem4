import React, { Component } from "react";
import { Link } from "react-router-dom";
import OpenChat from "../../sidebar/openchatheader";
import { Doctor_thumb_03,User_img } from "../../imagepath"

class Widgets extends Component {
   
  render() {
   
   return (
    <div className="page-wrapper">
    <div className="content">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="page-title">Widgets</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget clearfix card-box">
            <span className="dash-widget-icon"><i className="far fa-files-o" /></span>
            <div className="dash-widget-info">
              <h3>112</h3>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget clearfix card-box">
            <span className="dash-widget-icon"><i className="fas fa-dollar-sign" /></span>
            <div className="dash-widget-info">
              <h3>$44</h3>
              <span>Clients</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget clearfix card-box">
            <span className="dash-widget-icon"><i className="fas fa-tasks" /></span>
            <div className="dash-widget-info">
              <h3>37</h3>
              <span>Tasks</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget clearfix card-box">
            <span className="dash-widget-icon"><i className="fas fa-user" /></span>
            <div className="dash-widget-info">
              <h3>218</h3>
              <span>Employees</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget4">
            <span className="dash-widget-icon bg-success"><i className="far fa-money-bill-alt" /></span>
            <div className="dash-widget-info">
              <h3>$998</h3>
              <span>Revenue</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget4">
            <span className="dash-widget-icon bg-info"><i className="fas fa-user" /></span>
            <div className="dash-widget-info">
              <h3>1072</h3>
              <span>Users</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget4">
            <span className="dash-widget-icon bg-warning"><i className="far fa-files-o" /></span>
            <div className="dash-widget-info">
              <h3>72</h3>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget4">
            <span className="dash-widget-icon bg-danger"><i className="fas fa-tasks" /></span>
            <div className="dash-widget-info">
              <h3>618</h3>
              <span>Tasks</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget2">
            <span className="dash-widget-icon bg-success"><i className="far fa-money-bill-alt" /></span>
            <div className="dash-widget-info">
              <h3>$998</h3>
              <span>Revenue</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget2">
            <span className="dash-widget-icon bg-info"><i className="fas fa-user" /></span>
            <div className="dash-widget-info">
              <h3>1072</h3>
              <span>Users</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget2">
            <span className="dash-widget-icon bg-warning"><i className="far fa-files-o" /></span>
            <div className="dash-widget-info">
              <h3>72</h3>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget2">
            <span className="dash-widget-icon bg-danger"><i className="fas fa-tasks" /></span>
            <div className="dash-widget-info">
              <h3>618</h3>
              <span>Tasks</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget5">
            <span className="dash-widget-icon bg-success"><i className="far fa-money-bill-alt" /></span>
            <div className="dash-widget-info">
              <h3>$998</h3>
              <span>Revenue</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget5">
            <span className="dash-widget-icon bg-info"><i className="fas fa-user" /></span>
            <div className="dash-widget-info">
              <h3>1072</h3>
              <span>Users</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget5">
            <span className="dash-widget-icon bg-warning"><i className="far fa-files-o" /></span>
            <div className="dash-widget-info">
              <h3>72</h3>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div className="dash-widget dash-widget5">
            <span className="dash-widget-icon bg-danger"><i className="fas fa-tasks" /></span>
            <div className="dash-widget-info">
              <h3>618</h3>
              <span>Tasks</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="profile-widget">
            <div className="profile-img">
              <a href="#." className="avatar">G</a>
            </div>
            <div className="dropdown profile-action">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#."><i className="fas fa-pencil-alt m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#."><i className="fas fa-trash m-r-5" /> Delete</a>
              </div>
            </div>
            <h4 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/client-profile">Delta Infotech</Link></h4>
            <h5 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/client-profile">Tressa Wexler</Link></h5>
            <div className="small text-muted">Manager</div>
            <a href="#." className="btn btn-white btn-sm m-t-10">Message</a>
            <a href="#." className="btn btn-white btn-sm m-t-10">View Profile</a>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="profile-widget">
            <div className="profile-img">
              <a href="#." className="avatar"><img className="rounded-circle" src={User_img} width={80} alt="" /></a>
            </div>
            <h4 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/client-profile">Wellware Company</Link></h4>
            <h5 className="user-name m-t-10 m-b-0 text-ellipsis"><Link to="/client-profile">Misty Tison</Link></h5>
            <div className="small text-muted">calling ...</div>
            <a href="#." className="btn btn-danger btn-sm m-t-10 mr-0">Decline</a>
            <a href="#." className="btn btn-success btn-sm m-t-10">Accept</a>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="card profile-widget profile-widget2 p-0">
            <div className="profile-bg blur">
            </div>
            <div className="profile-avatar">
              <img alt="" src={Doctor_thumb_03} />
            </div>
            <div className="user-info">
              <h4 className="user-name m-t-5 m-b-0 text-ellipsis"><Link to="/client-profile">Ruby Bartlett</Link></h4>
              <div className="small text-muted">CEO</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="profile-widget profile-widget3">
            <div className="profile-bg blur" />
            <div>
              <a href="#" className="avatar-link">
                <img alt="" src={Doctor_thumb_03} />
              </a>
              <div className="user-info">
                <div className="username">
                  <a href="">John Doe</a>
                </div>
                <span>
                  <a href="">@<span>johndoe</span></a>
                </span>
              </div>
              <div className="user-analytics">
                <div className="row">
                  <div className="col-sm-4 col-4 border-right">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">1,702</h5>
                      <span className="analytics-title">SALES</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-4 border-right">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">10,010</h5>
                      <span className="analytics-title">FOLLOWERS</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-4">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">665</h5>
                      <span className="analytics-title">PRODUCTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="profile-widget3">
            <div className="profile-bg" />
            <div>
              <a href="#" className="avatar-link">
                <img alt="" src={Doctor_thumb_03} />
              </a>
              <div className="user-info">
                <div className="username">
                  <a href="">John Doe</a>
                </div>
                <span>
                  <a href="">@<span>johndoe</span></a>
                </span>
              </div>
              <div className="user-analytics">
                <div className="row">
                  <div className="col-sm-4 col-4 border-right">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">1,702</h5>
                      <span className="analytics-title">SALES</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-4 border-right">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">10,010</h5>
                      <span className="analytics-title">FOLLOWERS</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-4">
                    <div className="analytics-desc">
                      <h5 className="analytics-count">665</h5>
                      <span className="analytics-title">PRODUCTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
          <div className="profile-widget profile-widget4">
            <div className="profile-bg">
              <h3 className="user-name m-t-0 m-b-0 text-ellipsis"><Link to="/client-profile">Ruby Bartlett</Link></h3>
              <h5 className="text-muted">CEO</h5>
            </div>
            <div className="profile-avatar">
              <img alt="" src={Doctor_thumb_03} />
            </div>
            <div className="user-analytics">
              <div className="row">
                <div className="col-sm-4 col-4 border-right">
                  <div className="analytics-desc">
                    <h5 className="analytics-count">3,200</h5>
                    <span className="analytics-title">SALES</span>
                  </div>
                </div>
                <div className="col-sm-4 col-4 border-right">
                  <div className="analytics-desc">
                    <h5 className="analytics-count">13,000</h5>
                    <span className="analytics-title">FOLLOWERS</span>
                  </div>
                </div>
                <div className="col-sm-4 col-4">
                  <div className="analytics-desc">
                    <h5 className="analytics-count">35</h5>
                    <span className="analytics-title">PRODUCTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OpenChat/>
  </div>
   );
}
}

export default Widgets;
