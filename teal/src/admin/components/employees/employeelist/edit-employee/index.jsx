import React, { Component } from 'react';
import OpenChat from "../../../sidebar/openchatheader"
import $ from "jquery"
import { countries } from '../../../../../address';
import { DatePicker, Select } from 'antd';
import { isValid, isFormValid, axiosAction, axiosActions, notify, encodeBase64, validReg } from '../../../../../actions'
const { Option } = Select;
import { ADD, GET, employeeRoles, UPDATE } from '../../../../../constants';
import { toMoment } from '../../../../../utils';

class EditEmployee extends Component {
  id = this.props.match.params.id;
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
        "image": null,
        imageByteArr: null,
        "phoneNumber": null,
        "status": true,
        "doctor": null,
        "remainingLeave": 0,
        "leaves": null,
        "address": {
          "line": null,
          "postalCode": null,
          "province": null,
          "district": null,
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
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage(e) {
    const tmp = { ...this.state.data };
    var file = e.target.files[0];
    encodeBase64(file, (res) => {
      tmp.image = res;
      tmp.imageByteArr = res;
      this.setState({
        data: tmp
      })
    })
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
      case "gender":
        tmp.gender = arg.target.value;
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
          tmp.user.username = "nouser";
          tmp.user.password = "nouser";
          tmp.user.retired = true;
        } else {
          tmp.user.retired = false;
          tmp.user.username = "";
          tmp.user.password = "";
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
        if (tmp.address.province && !countries.filter(ctr => ctr.name == arg)[0].states.find(st => st.name == tmp.address.province)) {
          tmp.address.province = '';
        }
        break;
      case "province":
        tmp.address.province = arg;
        break;
      case "district":
        tmp.address.district = arg.target.value;
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
    axiosAction(`/employees/${this.id}`, UPDATE, (res) => {
      notify('success', '', 'Success')
      localStorage.setItem('userAvatar',res.data.imageByteArr);
      this.props.history.goBack();
    }, (err) => notify('error', '', 'Error'), this.state.data);
  }


  componentDidMount() {
    const employeeParam = {
      url: `/employees/${this.id}`,
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          data: res.data
        });
      },
      data: {}
    }

    axiosActions([employeeParam])
  }
  render() {
    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Employee</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Avatar</label>
                      <div className="profile-upload">
                        <div className="upload-img">
                          <img alt="" src={this.state.data?.imageByteArr ? this.state.data?.imageByteArr : ""} />
                        </div>
                        <div className="upload-input">
                          <input
                            ref="file"
                            type="file"
                            onChange={this.onSelectImage}
                            className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <input className={isValid(this.state.data.email && validReg(this.state.data.email, "email"))} type="email" value={this.state.data.email} onChange={(arg) => this.onChange(arg, "email")} />
                      <div className="invalid-feedback">Email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone<span className="text"></span></label>
                      <input className={isValid(this.state.data.phoneNumber && validReg(this.state.data.phoneNumber, "phone"))} type="tel" value={this.state.data.phoneNumber} onChange={(arg) => this.onChange(arg, "phone")} />
                      <div className="invalid-feedback">Phone cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth<span className="text-danger">*</span></label>
                      <DatePicker name='date' className={isValid(this.state.data.dateOfBirth)} disabledTime={true}
                        showTime={false} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={(arg) => this.onChange(arg, "dob")} onSelect={(arg) => this.onChange(arg, "dob")} value={toMoment(this.state.data.dateOfBirth)}></DatePicker>
                      <div className="invalid-feedback">Date of birth cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:<span className="text-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Male" onChange={(arg) => this.onChange(arg, "gender")} defaultChecked={this.state.data.gender == "Male"} />Male
                          <div className="invalid-feedback">Gender must be selected </div>
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Female" onChange={(arg) => this.onChange(arg, "gender")} defaultChecked={this.state.data.gender == "Female"} />Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Citizen Identification <span className="text-danger">*</span></label>
                      <input name="cid" className={isValid(this.state.data.cId)} onChange={(arg) => this.onChange(arg, "cid")} value={this.state.data.cId} />
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
                      <input disabled={true} className={isValid(this.state.data.user.username)} type="text" value={this.state.data.user.username} onChange={(arg) => this.onChange(arg, "username")} />
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
                          <input name="line" type="text" className={isValid(this.state.data.address?.line)} onChange={(arg) => this.onChange(arg, "line")} value={this.state.data.address.line} />
                          <div className="invalid-feedback">Address line cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Country<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='country'
                            className={isValid(this.state.data.address?.country)} onChange={(arg) => this.onChange(arg, "country")} value={this.state.data.address.country}>
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
                          <label>District<span className="text-danger">*</span></label>
                          <input name="district" type="text" className={isValid(this.state.data.address?.district)} onChange={(arg) => this.onChange(arg, "district")} value={this.state.data.address.district} />
                          <div className="invalid-feedback">District cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Postal Code<span className="text-danger">*</span></label>
                          <input name="postal" type="number" className={isValid(this.state.data.address?.postalCode)} onChange={(arg) => this.onChange(arg, "postal")} value={this.state.data.address.postalCode} />
                          <div className="invalid-feedback">Postal Code cannot be empty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Save</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.goBack()}>Back</button>
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

export default EditEmployee;