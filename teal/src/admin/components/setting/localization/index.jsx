import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";

class Localization extends Component{
    
    render(){

     
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <h3 className="page-title">Basic Settings</h3>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Default Country</label>
                          <select className="select" defaultValue="USA">
                            <option value="USA">USA</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Date Format</label>
                          <select className="form-control select" defaultValue="d M Y">
                            <option value="d/m/Y">15/05/2016</option>
                            <option value="d.m.Y">15.05.2016</option>
                            <option value="d-m-Y">15-05-2016</option>
                            <option value="m/d/Y">05/15/2016</option>
                            <option value="Y/m/d">2016/05/15</option>
                            <option value="Y-m-d">2016-05-15</option>
                            <option value="M d Y">May 15 2016</option>
                            <option value="d M Y">15 May 2016</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Timezone</label>
                          <select className="form-control select">
                            <option>(UTC +5:30) Antarctica/Palmer</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Default Language</label>
                          <select className="form-control select" defaultValue="French">
                            <option>English</option>
                            <option value="French">French</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Currency Code</label>
                          <select className="form-control select" defaultValue="usd">
                            <option value="usd">USD</option>
                            <option>Pound</option>
                            <option>EURO</option>
                            <option>Ringgit</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Currency Symbol</label>
                          <input className="form-control" readOnly defaultValue="$" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-12 text-center m-t-20">
                        <button type="button" className="btn btn-primary submit-btn">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
};

export default Localization;