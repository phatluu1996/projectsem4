import React, {Component} from 'react';
import Select from 'react-select';
import OpenChat from "../../sidebar/openchatheader" 
import $ from "jquery"

class EditSchedule extends Component{

  componentDidMount(){
    $('#datetimepicker3').datetimepicker({
      format: 'LT'
    });
    $('#datetimepicker4').datetimepicker({
      format: 'LT'
    });
  }
    render(){
      const DayOptions = [
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thurday', label: 'Thurday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'Saturday', label: 'Saturday' },
      ]
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Schedule</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Doctor Name</label>
                      <select className="form-control select">
                        <option>Select</option>
                        <option>Cristina Groves</option>
                        <option>Marie Wells</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Available Days</label>
                      <Select
                          defaultValue={[DayOptions[2], DayOptions[3]]}
                          isMulti
                          name="colors"
                          options={DayOptions}
                          className="basic-multi-select select"
                          classNamePrefix="select"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Time</label>
                      <div className="time-icon">
                        <input type="text" className="form-control" id="datetimepicker3" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>End Time</label>
                      <div className="time-icon">
                        <input type="text" className="form-control" id="datetimepicker4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea cols={30} rows={4} className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label className="display-block">Schedule Status</label>
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

export default EditSchedule;