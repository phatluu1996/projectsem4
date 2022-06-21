import React from 'react';
import OpenChat from "../../../sidebar/openchatheader" 
import $ from "jquery"

class InvoiceEdit extends React.Component {
  componentDidMount(){    
    if ($('.datetimepicker').length > 0) {
      $('.datetimepicker').datetimepicker({
          format: 'DD/MM/YYYY'
      });
    }
 }
  render() {

    return (
      <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <h4 className="page-title">Edit Invoice</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Client <span className="text-danger">*</span></label>
                    <select className="form-control select">
                      <option>Please Select</option>
                      <option value="">Charles Ortega</option>
                      <option>Denise Stevens</option>
                      <option>Jennifer Robinson</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Department <span className="text-danger">*</span></label>
                    <select className="form-control select">
                      <option>Select Department</option>
                      <option value="">Dentists</option>
                      <option>Neurology</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" defaultValue="charlesortega@example.com" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Tax</label>
                    <select className="form-control select">
                      <option>Select Tax</option>
                      <option>VAT</option>
                      <option value="">GST</option>
                      <option>No Tax</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Client Address</label>
                    <textarea className="form-control" rows={3} defaultValue={"5754 Airport Rd, Coosada, AL, 36020"} />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Billing Address</label>
                    <textarea className="form-control" rows={3} defaultValue={"5754 Airport Rd, Coosada, AL, 36020"} />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Invoice date <span className="text-danger">*</span></label>
                    <div className="cal-icon">
                      <input className="form-control datetimepicker" type="text" defaultValue="01/08/2018" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Due Date <span className="text-danger">*</span></label>
                    <div className="cal-icon">
                      <input className="form-control datetimepicker" type="text" defaultValue="07/08/2018" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <thead>
                        <tr>
                          <th style={{width: '20px'}}>#</th>
                          <th className="col-sm-2">Item</th>
                          <th className="col-md-6">Description</th>
                          <th style={{width: '100px'}}>Unit Cost</th>
                          <th style={{width: '80px'}}>Qty</th>
                          <th>Amount</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input className="form-control" type="text" defaultValue="Full body checkup" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '100px'}} type="text" defaultValue={150} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '80px'}} type="text" defaultValue={1} />
                          </td>
                          <td>
                            <input className="form-control form-amt" readOnly style={{width: '120px'}} type="text" defaultValue={150} />
                          </td>
                          <td><a href="" className="text-success font-18" title="Add"><i className="fas fa-plus" /></a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <input className="form-control" type="text" defaultValue="Blood Test" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '100px'}} type="text" defaultValue={12} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '80px'}} type="text" defaultValue={1} />
                          </td>
                          <td>
                            <input className="form-control form-amt" readOnly style={{width: '120px'}} type="text" defaultValue={12} />
                          </td>
                          <td><a href="" className="text-danger font-18" title="Remove"><i className="fas fa-trash" /></a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <input className="form-control" type="text" defaultValue="General checkup" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" type="text" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit" style={{minWidth: '150px'}} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '100px'}} type="text" defaultValue={100} />
                          </td>
                          <td>
                            <input className="form-control" style={{width: '80px'}} type="text" defaultValue={1} />
                          </td>
                          <td>
                            <input className="form-control form-amt" readOnly style={{width: '120px'}} type="text" defaultValue={100} />
                          </td>
                          <td><a href="" className="text-danger font-18" title="Remove"><i className="fas fa-trash" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <tbody>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td className="text-right">Total</td>
                          <td style={{textAlign: 'right', width: '230px'}}>262</td>
                        </tr>
                        <tr>
                          <td colSpan={5} style={{textAlign: 'right'}}>Tax</td>
                          <td style={{textAlign: 'right', width: '230px'}}>
                            <input className="form-control text-right form-amt" defaultValue={0} readOnly type="text" />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} style={{textAlign: 'right'}}>
                            Discount %
                          </td>
                          <td style={{textAlign: 'right', width: '230px'}}>
                            <input className="form-control text-right" defaultValue="26.2" type="text" />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} style={{textAlign: 'right', fontWeight: 'bold'}}>
                            Grand Total
                          </td>
                          <td style={{textAlign: 'right', fontWeight: 'bold', fontSize: '16px', width: '230px'}}>
                            $ 288.2
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Other Information</label>
                        <textarea className="form-control" rows={4} defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center m-t-20">
                <button className="btn btn-primary submit-btn">Save Invoice</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OpenChat/>
    </div>
    );
  }
}

export default InvoiceEdit;