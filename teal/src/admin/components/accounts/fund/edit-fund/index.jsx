import React, {Component} from 'react';
import OpenChat from "../../../sidebar/openchatheader" 

class EditFund extends Component{

    render(){
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Edit Provident Fund</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Employee Name</label>
                          <select className="form-control select">
                            <option value={3}>John Doe (FT-0001)</option>
                            <option value={23}>Richard Miles (FT-0002)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Provident Fund Type</label>
                          <select className="form-control select" defaultValue="Fixed Amount">
                            <option value="Fixed Amount" value="Fixed Amount">Fixed Amount</option>
                            <option value="Percentage of Basic Salary">Percentage of Basic Salary</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="show-fixed-amount">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Employee Share (Amount)</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Organization Share (Amount)</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="show-basic-salary">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Employee Share (%)</label>
                                <input className="form-control" type="text" defaultValue="2%" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Organization Share (%)</label>
                                <input className="form-control" type="text" defaultValue="2%" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
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

export default EditFund;