import React, {Component} from 'react';
import OpenChat from "../../../sidebar/openchatheader" 
import { User_img } from "../../../imagepath"

class AddExpense extends Component{

    componentDidMount(){    
       
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
                  <h4 className="page-title">New Expense</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Item Name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Purchase From</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Purchase Date</label>
                          <div className="cal-icon">
                            <input className="form-control datetimepicker" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Purchased By </label>
                          <select className="form-control select">
                            <option>Daniel Porter</option>
                            <option>Roger Dixon</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Amount</label>
                          <input placeholder="$50" className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Paid By</label>
                          <select className="form-control select">
                            <option>Cash</option>
                            <option>Cheque</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select className="form-control select">
                            <option>Pending</option>
                            <option>Approved</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Attachments</label>
                          <input className="form-control" type="file" />
                        </div>
                      </div>
                    </div>
                    <div className="attach-files">
                      <ul>
                        <li>
                          <img src={User_img} alt="" />
                          <a href="#" className="fa fa-close file-remove" />
                        </li>
                        <li>
                          <img src={User_img} alt="" />
                          <a href="#" className="fa fa-close file-remove" />
                        </li>
                      </ul>
                    </div>
                    <div className="m-t-20 text-center">
                      <button className="btn btn-primary submit-btn">Create Expense</button>
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

export default AddExpense;