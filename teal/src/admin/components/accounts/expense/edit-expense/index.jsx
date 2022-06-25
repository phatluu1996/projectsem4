import React, {Component} from 'react';
import { User_img } from "../../../imagepath"
import OpenChat from "../../../sidebar/openchatheader" 

class EditExpense extends Component{
 
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
              <h4 className="page-title">Edit Expense</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Item Name</label>
                      <input className="form-control" defaultValue="Anaesthetic machine" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Purchase From</label>
                      <input className="form-control" defaultValue="Biomedical Equipment Inc" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Purchase Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" defaultValue="22 Jun 2018" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Purchased By </label>
                      <select className="form-control select" defaultValue="daniel">
                        <option value="daniel">Daniel Porter</option>
                        <option>Roger Dixon</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Amount</label>
                      <input className="form-control" defaultValue="$62480" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Paid By</label>
                      <select className="form-control select" defaultValue="cheque">
                        <option>Cash</option>
                        <option value="cheque">Cheque</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control select" defaultValue="approved">
                        <option>Pending</option>
                        <option value="approved">Approved</option>
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

export default EditExpense;