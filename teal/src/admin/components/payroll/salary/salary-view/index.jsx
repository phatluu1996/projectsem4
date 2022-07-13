import React, { Component } from "react";
import OpenChat from "../../../sidebar/openchatheader"
import { Logo_Dark } from "../../../imagepath"
import { axiosActions } from "../../../../../actions";
import { GET } from "../../../../../constants";
import { toMoment } from "../../../../../utils";
import 'number-to-words';
import { toWords } from "number-to-words";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const noop = () => { };

class SalaryView extends Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = {
      data: {
        "salaryMonth": null,
        "createTime": null,
        "basicSalary": 0.0,
        "netSalary": 0.0,
        "tds": 0.0,
        "hra": 0.0,
        "conveyance": 0.0,
        "otherAllowance": 0.0,
        "otherDeduction": 0.0,
        "loan": 0.0,
        "professionTax": 0.0,
        "labourWelfare": 0.0,
        "providentFund": 0.0,
        "esi": 0.0,
        "employee": {},
        "retired": false,
        "id": null
      },
      loading: true
    }

    this.totalEarning = this.totalEarning.bind(this);
    this.totalDeductions = this.totalDeductions.bind(this);
    this.printPDF = this.printPDF.bind(this);
  }

  componentDidMount() {
    const salaryParam = {
      url: `/salaries/${this.id}`,
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          data: res.data
        });
      },
      data: {}
    }
    axiosActions([salaryParam]);
  }

  totalEarning() {
    const salary = this.state.data;
    return salary.basicSalary + salary.hra + salary.conveyance + salary.otherAllowance;
  }

  totalDeductions() {
    const salary = this.state.data;
    return salary.tds + salary.providentFund + salary.esi + salary.professionTax + salary.labourWelfare + salary.loan + salary.otherDeduction;
  }

  printPDF() {
    const input = document.getElementById("print-payslip");
    // var print = document.getElementById("ifmcontentstoprint")
    // print.innerHTML = input.innerHTML;
    html2canvas(input, {
      scale: 2
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ unit: 'mm', format: 'a2', orientation: 'p' });
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("payslip.pdf");
    })
  }

  render() {
    return (!this.state.loading &&
      <>

        <div className="page-wrapper" >
          <div className="content">
            <div className="row">
              {/* <div className="col-sm-5 col-4">
                <h4 className="page-title">Payslip</h4>
              </div> */}
              <div className="col-sm-7 col-8 text-right m-b-30">
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-white" onClick={this.printPDF}><i className="far fa-file-alt fa-lg" />PDF</button>
                  <ReactToPrint content={() => this.componentRef}>
                    <PrintContextConsumer>
                      {({ handlePrint }) => (
                        <button className="btn btn-white" onClick={handlePrint}><i className="fas fa-print fa-lg" />Print</button>
                      )}
                    </PrintContextConsumer>
                  </ReactToPrint>
                </div>
              </div>
            </div>
            {/* ref={el => (this.componentRef = el)}  */}
            {/* <div id="ifmcontentstoprint" className="row" style={{ height: "0px", width: "0px", position: "absolute" }}></div> */}
            {/* <iframe id="ifmcontentstoprint" className="row" style={{height: "0px", width: "0px", position: "absolute"}}></iframe> */}
            <div className="row" ref={el => (this.componentRef = el)} >
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="card-box" id="print-payslip" style={{height: "260mm", width: "210mm"}}>
                  <h4 className="payslip-title">Payslip for the month of {toMoment(this.state.data.salaryMonth).format("MMMM YYYY")}</h4>
                  <div className="row">
                    <div className="col-sm-6 m-b-20">
                      <img src={Logo_Dark} className="inv-logo" alt="" />
                      <ul className="list-unstyled m-b-0">
                        <li>Mediap</li>
                        <li>590 CMT8 Ward 11 Disttrict 3,</li>
                        <li>Ho chi Minh city, VietNam, 723564</li>
                      </ul>
                    </div>
                    <div className="col-sm-6 m-b-20" >
                      <div className="invoice-details">
                        <h3 className="text-uppercase">Payslip #{this.state.data.id}</h3>
                        <ul className="list-unstyled">
                          <li>Salary Month: <span>{toMoment(this.state.data.salaryMonth).format("MMMM, YYYY")}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 m-b-20">
                      <ul className="list-unstyled">
                        <li>
                          <h5 className="m-b-0">Name: <strong>{this.state.data.employee.lastName + " " + this.state.data.employee.firstName}</strong></h5>
                        </li>
                        <li>Role: <span>Nurse</span></li>
                        <li>Employee ID: {"EMP-" + this.state.data.employee.id}</li>
                        <li>Joining Date: {toMoment(this.state.data.employee.joiningDate).format("DD MMMM, YYYY")}</li>
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
                              <td><strong>Basic Salary</strong> <span className="float-right">${this.state.data.basicSalary}</span></td>
                            </tr>
                            <tr>
                              <td><strong>House Rent Allowance (H.R.A.)</strong> <span className="float-right">${this.state.data.hra}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Conveyance</strong> <span className="float-right">${this.state.data.conveyance}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Other Allowance</strong> <span className="float-right">${this.state.data.otherAllowance}</span></td>
                            </tr>
                            <tr>
                              <td><strong><b>Total Earnings</b></strong> <span className="float-right"><strong>${this.totalEarning()}</strong></span></td>
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
                              <td><strong>Tax Deducted at Source (T.D.S.)</strong> <span className="float-right">${this.state.data.tds}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Provident Fund</strong> <span className="float-right">${this.state.data.providentFund}</span></td>
                            </tr>
                            <tr>
                              <td><strong>ESI</strong> <span className="float-right">${this.state.data.esi}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Prof. Tax</strong> <span className="float-right">${this.state.data.professionTax}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Labour Welfare</strong> <span className="float-right">${this.state.data.labourWelfare}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Loan</strong> <span className="float-right">${this.state.data.loan}</span></td>
                            </tr>
                            <tr>
                              <td><strong>Others Deduction</strong> <span className="float-right">${this.state.data.otherDeduction}</span></td>
                            </tr>
                            <tr>
                              <td><strong><b>Total Deductions</b></strong> <span className="float-right"><strong>${this.totalDeductions()}</strong></span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <p><strong>Net Salary: ${this.totalEarning() - this.totalDeductions()}</strong> ({toWords(this.totalEarning() - this.totalDeductions())})</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default SalaryView;
