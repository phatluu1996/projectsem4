import React, { Component } from 'react';
import OpenChat from "../../../sidebar/openchatheader"
import $ from "jquery"
import { countries } from '../../../../../address';
import { DatePicker, Select } from 'antd';
import { isValid, isFormValid, axiosAction, notify } from '../../../../../actions'
const { Option } = Select;
import { ADD, employeeRoles } from '../../../../../constants';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {
        "cId": null,
        "employeeRole": null,
        "joiningDate": null,
        "firstName": null,
        "lastName": null,
        "gender": null,
        "dateOfBirth": null,
        "email": null,
        "phoneNumber": null,
        "status": true,
        "doctor": null,
        "remainingLeave": 0,
        "leaves": null,
        "address": {
          "line": null,
          "postalCode": null,
          "province": null,
          "city": null,
          "country": null,
          "retired": false
        },
        "user": {
          "username": null,
          "password": null,
          "retired": false,
        },
        "retired": false,
      },
      countries: countries,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(arg, fieldName) {
    const tmp = { ...this.state.data };

    switch (fieldName) {
      case "firstname":
        tmp.firstName = arg.target.value;
        break;
      case "lastname":
        tmp.lastName = arg.target.value;
        break;
      case "email":
        tmp.email = arg.target.value;
        break;
      case "phone":
        tmp.phoneNumber = arg.target.value;
        break;
      case "cid":
        tmp.cId = arg.target.value;
        break;
      case "leave":
        tmp.remainingLeave = arg.target.value;
        break;
      case "dob":
        tmp.dateOfBirth = arg;
        break;
      case "role":
        tmp.employeeRole = arg;
        if (arg != "RECEPTIONIST") {
          tmp.user.username = "";
          tmp.user.password = "";
          tmp.user.retired = true;
        }else{
          tmp.user.retired = false;
        }
        break;
      case "username":
        tmp.user.username = arg.target.value;
        break;
      case "password":
        tmp.user.password = arg.target.value;
        break;
      case "line":
        tmp.address.line = arg.target.value;
        break;
      case "country":
        tmp.address.country = arg;
        if (tmp.address.province && !countries.filter(ctr => ctr.name == val)[0].states.find(st => st.name == tmp.address.province)) {
          tmp.address.province = '';
        }
        break;
      case "province":
        tmp.address.province = arg;
        break;
      case "city":
        tmp.address.city = arg.target.value;
        break;
      case "postal":
        tmp.address.postalCode = arg.target.value;
        break;

    }
    this.setState({ data: tmp });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!isFormValid(e)) return;
    axiosAction("/employees", ADD, (res) => {
      notify('success', '', 'Success')
      this.props.history.push("/admin/employees");
    }, (err) => notify('error', '', 'Error'), this.state.data);
  }


  componentDidMount() {

  }
  render() {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Add Employee</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.firstName)} type="text" value={this.state.data.firstName} onChange={(arg) => this.onChange(arg, "firstname")} />
                      <div className="invalid-feedback">First name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name<span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.lastName)} type="text" value={this.state.data.lastName} onChange={(arg) => this.onChange(arg, "lastname")} />
                      <div className="invalid-feedback">Last name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.email)} type="email" value={this.state.data.email} onChange={(arg) => this.onChange(arg, "email")} />
                      <div className="invalid-feedback">Email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone<span className="text"></span></label>
                      <input className={isValid(this.state.data.phoneNumber)} type="text" value={this.state.data.phoneNumber} onChange={(arg) => this.onChange(arg, "phone")} />
                      <div className="invalid-feedback">Phone cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth<span className="text-danger">*</span></label>
                      <DatePicker name='date' className={isValid(this.state.data.dateOfBirth)} disabledTime={true}
                        showTime={false} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={(arg) => this.onChange(arg, "dob")} onSelect={(arg) => this.onChange(arg, "dob")}></DatePicker>
                      <div className="invalid-feedback">Date of birth cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Citizen Identification <span className="text-danger">*</span></label>
                      <input name="cid" className={isValid(this.state.data.cId)} type="number" onChange={(arg) => this.onChange(arg, "cid")} />
                      <div className="invalid-feedback">Citizen identification cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Remaining Leaves <span className="text-danger">*</span></label>
                      <input name="leave" className={isValid(this.state.data.remainingLeave)} value={this.state.data.remainingLeave} type="number" onChange={(arg) => this.onChange(arg, "leave")} />
                      <div className="invalid-feedback">RemainingLeave cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Role<span className="text"></span></label>
                      <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='role'
                        className={isValid(this.state.data.employeeRole)} value={this.state.data.employeeRole} onChange={(arg) => this.onChange(arg, "role")}>
                        {employeeRoles?.map((ctr, idx) => {
                          return (<Option key={idx} value={ctr.value}>{ctr.label}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Role cannot be empty</div>
                    </div>
                  </div>
                  {this.state.data.employeeRole == 'RECEPTIONIST' && <><div className="col-sm-6">
                    <div className="form-group">
                      <label>Username <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.user.username)} type="text" value={this.state.data.user.username} onChange={(arg) => this.onChange(arg, "username")} />
                      <div className="invalid-feedback">Username cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password<span className="text"></span></label>
                      <input className={isValid(this.state.data.user.password)} type="password" value={this.state.data.user.password} onChange={(arg) => this.onChange(arg, "password")} />
                      <div className="invalid-feedback">Password cannot be empty</div>
                    </div>
                  </div></>}
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address<span className="text-danger">*</span></label>
                          <input name="line" type="text" className={isValid(this.state.data.address?.line)} onChange={(arg) => this.onChange(arg, "line")} />
                          <div className="invalid-feedback">Address line cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Country<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='country'
                            className={isValid(this.state.data.address?.country)} onChange={(arg) => this.onChange(arg, "country")}>
                            {this.state.countries?.map((ctr, idx) => {
                              return (<Option key={idx} value={ctr.name}>{ctr.name}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Country cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {this.state.countries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states.length > 0 && <div className="form-group">
                          <label>State/Province<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='province'
                            className={isValid(this.state.data.address?.province)} onChange={(arg) => this.onChange(arg, "province")} value={this.state.data.address.province}>
                            {this.state.countries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states?.map((st, idx) => {
                              return (<Option key={idx} value={st.name}>{st.name}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">State/Province cannot be empty</div>
                        </div>}
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>City<span className="text-danger">*</span></label>
                          <input name="city" type="text" className={isValid(this.state.data.address?.city)} onChange={(arg) => this.onChange(arg, "city")} />
                          <div className="invalid-feedback">City cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Postal Code<span className="text-danger">*</span></label>
                          <input name="postal" type="number" className={isValid(this.state.data.address?.postalCode)} onChange={(arg) => this.onChange(arg, "postal")} />
                          <div className="invalid-feedback">Postal Code cannot be empty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Create Employee</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/employees")}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <OpenChat />
      </div>

    );
  }
};

export default AddEmployee;