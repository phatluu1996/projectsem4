import React, { Component } from "react";
import OpenChat from "../../../sidebar/openchatheader" 
import { Logo_Dark } from "../../../imagepath"

class SalaryView extends Component {

  render(){
    return(
        <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-5 col-4">
              <h4 className="page-title">Payslip</h4>
            </div>
            <div className="col-sm-7 col-8 text-right m-b-30">
              <div className="btn-group btn-group-sm">
                <button className="btn btn-white">CSV</button>
                <button className="btn btn-white">PDF</button>
                <button className="btn btn-white"><i className="fas fa-print fa-lg" /> Print</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-box">
                <h4 className="payslip-title">Payslip for the month of July 2018</h4>
                <div className="row">
                  <div className="col-sm-6 m-b-20">
                    <img src={Logo_Dark} className="inv-logo" alt="" />
                    <ul className="list-unstyled m-b-0">
                      <li>Medifab</li>
                      <li>3864 Quiet Valley Lane,</li>
                      <li>Sherman Oaks, CA, 91403</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 m-b-20">
                    <div className="invoice-details">
                      <h3 className="text-uppercase">Payslip #49029</h3>
                      <ul className="list-unstyled">
                        <li>Salary Month: <span>July, 2018</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 m-b-20">
                    <ul className="list-unstyled">
                      <li>
                        <h5 className="m-b-0"><strong>Albina Simonis</strong></h5>
                      </li>
                      <li><span>Nurse</span></li>
                      <li>Employee ID: NS-0001</li>
                      <li>Joining Date: 7 May 2015</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <h4 className="m-b-10"><strong>Earnings</strong></h4>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td><strong>Basic Salary</strong> <span className="float-right">$6500</span></td>
                          </tr>
                          <tr>
                            <td><strong>House Rent Allowance (H.R.A.)</strong> <span className="float-right">$55</span></td>
                          </tr>
                          <tr>
                            <td><strong>Conveyance</strong> <span className="float-right">$55</span></td>
                          </tr>
                          <tr>
                            <td><strong>Other Allowance</strong> <span className="float-right">$55</span></td>
                          </tr>
                          <tr>
                            <td><strong>Total Earnings</strong> <span className="float-right"><strong>$55</strong></span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <h4 className="m-b-10"><strong>Deductions</strong></h4>
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td><strong>Tax Deducted at Source (T.D.S.)</strong> <span className="float-right">$0</span></td>
                          </tr>
                          <tr>
                            <td><strong>Provident Fund</strong> <span className="float-right">$0</span></td>
                          </tr>
                          <tr>
                            <td><strong>ESI</strong> <span className="float-right">$0</span></td>
                          </tr>
                          <tr>
                            <td><strong>Loan</strong> <span className="float-right">$300</span></td>
                          </tr>
                          <tr>
                            <td><strong>Total Deductions</strong> <span className="float-right"><strong>$59698</strong></span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <p><strong>Net Salary: $59698</strong> (Fifty nine thousand six hundred and ninety eight only.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div>
    );
  }

};

export default SalaryView;
