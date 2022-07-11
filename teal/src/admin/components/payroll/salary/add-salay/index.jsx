import React, { Component } from "react";
import OpenChat from "../../../sidebar/openchatheader"
import { Select, DatePicker } from 'antd';
import { axiosAction, axiosActions, isFormValid, isValid, notify } from "../../../../../actions";
import { ADD, GET } from "../../../../../constants";
import { toMoment } from "../../../../../utils";
const { Option } = Select;

class AddSalary extends Component {
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
                "employee": null,
                "retired": false,
                "id": null
            },
            loading: true,
            employees: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(arg, fieldName) {
        const tmp = { ...this.state.data };
        switch (fieldName) {
            case 'employee':
                tmp.employee = this.state.employees.find(e => e.id == arg);
                break;

            case 'month':
                tmp.salaryMonth = arg;
                break;

            default:
                tmp[fieldName] = arg.target.value;
                break;
        }

        this.setState({ data: tmp });
    }

    componentDidMount() {
        const employeesParam = {
            url: "/employees-doctors",
            method: GET,
            callback: (res) => {
                this.setState({
                    loading: false,
                    employees: res.data
                });
            },
            data: {}
        }
        axiosActions([employeesParam]);
    }

    onSubmit(e) {
        e.preventDefault();
        if (!isFormValid(e)) return;
        axiosAction("/salaries", ADD, (res) => {
            notify('success', '', 'Success')
            this.props.history.push("/admin/salaries");
        }, (err) => notify('error', '', 'Error'), this.state.data);
    }

    render() {
        return (!this.state.loading &&
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Add Employee Salary</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Employee Name</label>
                                            <Select bordered={false} size={"small"} style={{ width: '100%' }} name='employee' value={this.state.data.employee?.id}
                                                className={isValid(this.state.data.employee != null)} onChange={(e) => this.onChange(e, "employee")}>
                                                {this.state.employees?.map(employee => {
                                                    return (<Option key={employee.id} value={employee.id}>{employee.firstName + " " + employee.lastName}</Option>)
                                                })}
                                            </Select>
                                            <div className="invalid-feedback">Employee cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Salary Month<span className="text-danger">*</span></label>
                                            <DatePicker name='date' className={isValid(this.state.data.salaryMonth)} disabledTime={true} picker="month"
                                                showTime={false} clearIcon={true} value={toMoment(this.state.data.salaryMonth)} format={"YYYY-MMMM"}
                                                allowClear={true} onChange={(e) => this.onChange(e, "month")} onSelect={(e) => this.onChange(e, "month")}></DatePicker>
                                            <div className="invalid-feedback">Salary Month cannot be empty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4 className="text-primary">Earnings</h4>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="text-primary">Deductions</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Basic Salary</label>
                                            <input className={isValid(this.state.data.basicSalary)} type="number" value={this.state.data.basicSalary} onChange={(e) => this.onChange(e, "basicSalary")} />
                                            <div className="invalid-feedback">Basic Salary cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>TDS</label>
                                            <input className={isValid(this.state.data.tds)} type="number" value={this.state.data.tds} onChange={(e) => this.onChange(e, "tds")} />
                                            <div className="invalid-feedback">TDS cannot be empty</div>
                                        </div>

                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Provident Fund</label>
                                            <input className={isValid(this.state.data.providentFund)} type="number" value={this.state.data.providentFund} onChange={(e) => this.onChange(e, "providentFund")} />
                                            <div className="invalid-feedback">Provident Fund cannot be empty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>HRA(15%)</label>
                                            <input className={isValid(this.state.data.hra)} type="number" value={this.state.data.hra} onChange={(e) => this.onChange(e, "hra")} />
                                            <div className="invalid-feedback">HRA cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>ESI</label>
                                            <input className={isValid(this.state.data.esi)} type="number" value={this.state.data.esi} onChange={(e) => this.onChange(e, "esi")} />
                                            <div className="invalid-feedback">ESI cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Prof. Tax</label>
                                            <input className={isValid(this.state.data.professionTax)} type="number" value={this.state.data.professionTax} onChange={(e) => this.onChange(e, "professionTax")} />
                                            <div className="invalid-feedback">Prof. Tax cannot be empty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Conveyance</label>
                                            <input className={isValid(this.state.data.conveyance)} type="number" value={this.state.data.conveyance} onChange={(e) => this.onChange(e, "conveyance")} />
                                            <div className="invalid-feedback">Conveyance cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Labour Welfare</label>
                                            <input className={isValid(this.state.data.labourWelfare)} type="number" value={this.state.data.labourWelfare} onChange={(e) => this.onChange(e, "labourWelfare")} />
                                            <div className="invalid-feedback">Labour Welfare cannot be empty</div>
                                        </div>

                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Loan</label>
                                            <input className={isValid(this.state.data.loan)} type="number" value={this.state.data.loan} onChange={(e) => this.onChange(e, "loan")} />
                                            <div className="invalid-feedback">Loan cannot be empty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Others Allowance</label>
                                            <input className={isValid(this.state.data.otherAllowance)} type="number" value={this.state.data.otherAllowance} onChange={(e) => this.onChange(e, "otherAllowance")} />
                                            <div className="invalid-feedback">Others Allowance cannot be empty</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Others Deduction</label>
                                            <input className={isValid(this.state.data.otherDeduction)} type="number" value={this.state.data.otherDeduction} onChange={(e) => this.onChange(e, "otherDeduction")} />
                                            <div className="invalid-feedback">Others Deduction cannot be empty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-t-20 text-center">
                                    <button className="btn btn-primary submit-btn">Create Salary</button>
                                    <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/salaries")}>Back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default AddSalary;
