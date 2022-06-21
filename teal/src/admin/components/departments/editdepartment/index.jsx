import React, {Component} from 'react';
import OpenChat from "../../sidebar/openchatheader";

class EditDepartment extends Component{

    render(){
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Department</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="form-group">
                  <label>Department Name</label>
                  <input className="form-control" type="text" defaultValue="Dentists" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea cols={30} rows={4} className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label className="display-block">Department Status</label>
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
                  <button className="btn btn-primary submit-btn">Save Department</button>
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

export default EditDepartment;