import React, {Component} from 'react';
import OpenChat from "../../../sidebar/openchatheader" 

class AddTaxes extends Component{

    render(){
       
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Add Tax</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <div className="form-group">
                      <label>Tax Name <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Status <span className="text-danger">*</span></label>
                      <select className="form-control select">
                        <option>Pending</option>
                        <option>Approved</option>
                      </select>
                    </div>
                    <div className="m-t-20 text-center">
                      <button className="btn btn-primary submit-btn">Create Tax</button>
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

export default AddTaxes;