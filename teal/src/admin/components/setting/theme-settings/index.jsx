import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { favicon,Logo_Dark } from "../../imagepath"

class themeSetting extends Component{
    
    render(){    
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <h4 className="page-title">Theme Settings</h4>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Website Name</label>
                  <div className="col-lg-9">
                    <input name="website_name" className="form-control" defaultValue="Medifab" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Light Logo</label>
                  <div className="col-lg-7">
                    <input className="form-control" type="file" />
                    <span className="form-text text-muted">Recommended image size is 40px x 40px</span>
                  </div>
                  <div className="col-lg-2">
                    <div className="img-thumbnail float-right"><img src={Logo_Dark} alt="" width={40} height={40} /></div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Favicon</label>
                  <div className="col-lg-7">
                    <input className="form-control" type="file" />
                    <span className="form-text text-muted">Recommended image size is 16px x 16px</span>
                  </div>
                  <div className="col-lg-2">
                    <div className="settings-image img-thumbnail float-right"><img src={favicon} className="img-fluid" width={16} height={16} alt="" /></div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Save</button>
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

export default themeSetting;