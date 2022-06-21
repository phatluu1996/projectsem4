import React, { Component } from "react";
import OpenChat from "../../../sidebar/openchatheader" 
import Select from 'react-select'

class AddSalary extends Component {

  render(){
    const staff = [
        { value: 'John Doe', label: 'John Doe' },
        { value: 'Richard Miles', label: 'Richard Miles' },
     
      ]
    return(
        <div className="page-wrapper">
        <div className="content">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Add Staff Salary</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Select Staff</label>
                                    <Select options={staff} className="select"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Net Salary</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <h4 className="text-primary">Earnings</h4>
                                <div className="form-group">
                                    <label>Basic</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>DA(40%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>HRA(15%)</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Conveyance</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Allowance</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Medical Allowance</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Others</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="text-primary">Deductions</h4>
                                <div className="form-group">
                                    <label>TDS</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>ESI</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>PF</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Leave</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Prof. Tax</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Labour Welfare</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Fund</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Others</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="m-t-20 text-center">
                            <button className="btn btn-primary submit-btn">Create Salary</button>
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

export default AddSalary;
