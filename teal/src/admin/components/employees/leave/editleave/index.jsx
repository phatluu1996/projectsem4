import React, { Component } from 'react';
import OpenChat from "../../../sidebar/openchatheader"
import { GET, UPDATE, leave_status, leave_type } from '../../../../../constants';
import { axiosAction, axiosActions, isFormValid, isValid, notify } from '../../../../../actions';
import { Select, DatePicker } from 'antd';
import { toMoment } from '../../../../../utils';
const { Option } = Select;

class EditLeave extends Component {
    id = this.props.match.params.id;
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "startFrom": null,
                "leaveDay": 0,
                "leaveReason": null,
                "leaveType": null,
                "status": null,
                "retired": false,
                "employee": null,
                "id": null
            },
            loading: true,
            employees: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(arg, field) {
        const tmp = { ...this.state.data };
        switch (field) {
            case "type":
                tmp.leaveType = arg;
                break;

            case "status":
                tmp.status = arg;
                break;

            case "date":
                tmp.startFrom = arg;
                break;

            case "employee":
                tmp.employee = this.state.employees.find(e => e.id == arg);
                break;

            case "days":
                tmp.leaveDay = arg.target.value;
                break;

            case "reason":
                tmp.leaveReason = arg.target.value;
                break;

            default:
                break;
        }

        this.setState({ data: tmp });
    }

    componentDidMount() {
        const employeesParam = {
            url: "/employees",
            method: GET,
            callback: (res) => {
                this.setState({
                    loading: false,
                    employees: res.data
                });
            },
            data: {}
        }

        const leaveParam = {
            url: `/leaves/${this.id}`,
            method: GET,
            callback: (res) => {
                this.setState({
                    loading: false,
                    data: res.data
                });
            },
            data: {}
        }
        axiosActions([employeesParam, leaveParam]);
    }

    onSubmit(e) {
        e.preventDefault();
        if (!isFormValid(e)) return;
        axiosAction(`/leaves/${this.id}`, UPDATE, (res) => {
            notify('success', '', 'Success')
            this.props.history.push("/admin/leaves");
        }, (err) => notify('error', '', 'Error'), this.state.data);
    }

    render() {
        return (!this.state.loading &&
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h4 className="page-title">Edit Leave</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
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
                                    {this.state.data.employee != null && <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Remaining Leaves</label>
                                            <input className="form-control" readOnly
                                                value={(this.state.data.employee.remainingLeave - this.state.data.leaveDay)} type="text" />
                                        </div>
                                    </div>}
                                </div>
                                {this.state.data.employee != null &&
                                    <>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Leave Type <span className="text-danger">*</span></label>
                                                    <Select bordered={false} size={"small"} style={{ width: '100%' }} value={this.state.data.leaveType}
                                                        className={isValid(this.state.data.leaveType)} onChange={(e) => this.onChange(e, "type")}>
                                                        {leave_type.map((type, idx) => {
                                                            return (<Option key={idx} value={type.value}>{type.label}</Option>);
                                                        })}
                                                    </Select>
                                                    <div className="invalid-feedback">Leave type cannot be empty</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>From <span className="text-danger">*</span></label>
                                                    <DatePicker name='date' className={isValid(this.state.data.startFrom)} disabledTime={true}
                                                        showTime={false} format="YYYY-MM-DD" clearIcon={true} value={toMoment(this.state.data.startFrom)}
                                                        allowClear={true} onChange={(e) => this.onChange(e, "date")} onSelect={(e) => this.onChange(e, "date")}></DatePicker>
                                                    <div className="invalid-feedback">Start date cannot be empty</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Number of days <span className="text-danger">*</span></label>
                                                    <input className={isValid(this.state.data.leaveDay)}
                                                        type='number' onChange={(e) => this.onChange(e, "days")} value={this.state.data.leaveDay} />
                                                    <div className="invalid-feedback">Leave days cannot be empty</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group width100">
                                                    <label>Leave Reason <span className="text-danger">*</span></label>
                                                    <textarea rows="4" cols="5" value={this.state.data.leaveReason}
                                                        className={isValid(this.state.data.leaveReason)} onChange={(e) => this.onChange(e, "reason")}></textarea>
                                                    <div className="invalid-feedback">Reason cannot be empty</div>
                                                </div>

                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Status<span className="text-danger">*</span></label>
                                                    <Select bordered={false} size={"small"} style={{ width: '100%' }} value={this.state.data.status}
                                                        className={isValid(this.state.data.status)} onChange={(e) => this.onChange(e, "status")}>
                                                        {leave_status.map((status, idx) => {
                                                            return (<Option key={idx} value={status.value}>{status.label}</Option>);
                                                        })}
                                                    </Select>
                                                    <div className="invalid-feedback">Leave Status cannot be empty</div>
                                                </div>
                                            </div>
                                            <div className="m-t-20 text-center">
                                                <button className="btn btn-primary submit-btn">Save</button>
                                                <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/leaves")}>Back</button>
                                            </div>
                                        </div>
                                    </>}
                            </form>
                        </div>
                    </div>
                </div>
                <OpenChat />
            </div>

        );
    }
};

export default EditLeave;