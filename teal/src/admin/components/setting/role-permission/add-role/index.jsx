import React, { Component } from 'react';
import OpenChat from "../../../sidebar/openchatheader";

class addrole extends Component{

    render(){
    
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Add Role</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <div className="form-group">
                      <label>Role Name <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="display-block">Status</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="role_active" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="role_active">
                          Active
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="role_inactive" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="role_inactive">
                          Inactive
                        </label>
                      </div>
                    </div>
                    <div className="m-t-20 text-center">
                      <button className="btn btn-primary submit-btn">Create Role</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
}

export default addrole;
