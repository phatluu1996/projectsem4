import React, {Component} from 'react';
import OpenChat from "../../sidebar/openchatheader" 
import $ from "jquery"

class AddAppointments extends Component{
   componentDidMount(){
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY'
      });
    }
   }
    render(){
      

        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Add Appointment</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Appointment ID</label>
                          <input className="form-control" type="text" defaultValue="APT-0001" readOnly />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Patient Name</label>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Jennifer Robinson</option>
                            <option>Terry Baker</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Department</label>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Dentists</option>
                            <option>Neurology</option>
                            <option>Opthalmology</option>
                            <option>Orthopedics</option>
                            <option>Cancer Department</option>
                            <option>ENT Department</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Doctor</label>
                          <select className="form-control select">
                            <option>Select</option>
                            <option>Cristina Groves</option>
                            <option>Marie Wells</option>
                            <option>Henry Daniels</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date</label>
                          <div className="cal-icon">
                            <input type="text" className="form-control datetimepicker" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Time</label>
                          <div className="time-icon">
                            <input type="text" className="form-control" id="datetimepicker3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Patient Email</label>
                          <input className="form-control" type="email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Patient Phone Number</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea cols={30} rows={4} className="form-control" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label className="display-block">Appointment Status</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="product_active">
                          Active
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="product_inactive">
                          Inactive
                        </label>
                      </div>
                    </div>
                    <div className="m-t-20 text-center">
                      <button className="btn btn-primary submit-btn">Create Appointment</button>
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

export default AddAppointments;