import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OpenChat from "../../../sidebar/openchatheader"

class EditLeave extends Component{
    constructor(props){
        super(props);
        this.state={
           startDate: new Date()
        }
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };  
    render(){
        const type = [
            { value: 'select', label: 'select' },
            { value: 'Casual Leave', label: 'Casual Leave' },
            { value: 'Medical Leave', label: 'Medical Leave' }
          ];
        return(
         <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Leave</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Leave Type <span className="text-danger">*</span></label>
                                <Select options={type} className="select floating"/>
                            </div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>From <span className="text-danger">*</span></label>
										<div className="cal-icon">
                                        <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                className="form-control datetimepicker"
                                                />
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>To <span className="text-danger">*</span></label>
										<div className="cal-icon">
                                        <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                className="form-control datetimepicker"
                                                />
										</div>
									</div>
								</div>
							</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Number of days <span className="text-danger">*</span></label>
                                            <input className="form-control" readOnly type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Remaining Leaves <span className="text-danger">*</span></label>
                                            <input className="form-control" readOnly defaultValue="12" type="text" />
                                    </div>
                                </div>
                               
                             
                            </div>
                            <div className="row">
                                    <div className="col-md-12">
                                      <div className="form-group width100">
                                            <label>Leave Reason <span className="text-danger">*</span></label>
                                            <textarea rows="4" cols="5" className="form-control"></textarea>
                                        </div>
                                     </div>
                                 </div>       
                                    <div className="col-md-12">
                                        <div className="m-t-20 text-center">
                                            <button className="btn btn-primary submit-btn">Save</button>
                                        </div>
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

export default EditLeave;