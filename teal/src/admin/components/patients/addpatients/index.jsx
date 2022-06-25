import React, {Component} from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { User_img } from "../../imagepath"

class AddPatient extends Component{

    render(){
      
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Add Patient</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Username <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <div className="cal-icon">
                        <input type="text" className="form-control datetimepicker" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:</label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className="form-check-input" />Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className="form-check-input" />Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control " />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Country</label>
                          <select className="form-control select">
                            <option>USA</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>State/Province</label>
                          <select className="form-control select">
                            <option>California</option>
                            <option>Alaska</option>
                            <option>Alabama</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Avatar</label>
                      <div className="profile-upload">
                        <div className="upload-img">
                          <img alt="" src={User_img} />
                        </div>
                        <div className="upload-input">
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="display-block">Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="patient_active" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="patient_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="patient_inactive" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="patient_inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Create Patient</button>
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

export default AddPatient;