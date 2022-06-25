import React, {Component} from 'react';
import OpenChat from "../../../sidebar/openchatheader" 

class EditTaxes extends Component{

    render(){
       
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Tax</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="form-group">
                  <label>Tax Name <span className="text-danger">*</span></label>
                  <input className="form-control" defaultValue="VAT" type="text" />
                </div>
                <div className="form-group">
                  <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                  <input className="form-control" defaultValue="14%" type="text" />
                </div>
                <div className="form-group">
                  <label>Status <span className="text-danger">*</span></label>
                  <select className="form-control select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
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

export default EditTaxes;