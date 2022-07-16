import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Select, Modal } from 'antd';
import { countries } from '../../../address';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ADD, GET, UPDATE } from '../../../constants';
import { axiosAction, axiosActions, notify } from '../../../actions';
import moment from "moment";

const { Option } = Select;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        dateOfBirth: null,
        phone: null,
        gender: null,
        cid: null,
        address: {
          line: null,
          postalCode: null,
          province: null,
          district: null,
          country: null,
          retired: false
        }
      },
      statusChange: {
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        dateOfBirth: false,
        password: false,
        confirmPassword: false,
        phone: false,
        cid: false,
        gender: false,
        address: {
          line: false,
          postalCode: false,
          province: false,
          district: false,
          country: false
        },
      },
      initCountries: countries
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputBorder = this.inputBorder.bind(this);
    this.inputClassname = this.inputClassname.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
  }

  onChangeDateOfBirth(val) {
    const tmp = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };
    tmp.dateOfBirth = val;
    statusChange.dateOfBirth = val != this.state.data.dateOfBirth;
    this.setState({
      data: tmp,
      statusChange: statusChange
    });
  }

  handleChange = (e) => {
    const validEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
    const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    let data = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };

    var addressField = ["line", "district", "postalCode"];

    if (!addressField.includes(e.target.name)) {

      data[e.target.name] = e.target.value;

      switch (e.target.name) {
        case "email":
          statusChange[e.target.name] = validEmail.test(e.target.value);
          break;

        case "password":
          statusChange[e.target.name] = validPassword.test(e.target.value);
          break;

        case "confirmPassword":
          statusChange[e.target.name] = this.state.data.password == e.target.value;
          break;

        // case "gender":
        // case "dateOfBirth":
        //   statusChange[e.target.name] = e.target.value ;
        //   break;

        default:
          statusChange[e.target.name] = !(e.target.value == "");
      }

    } else {
      data.address[e.target.name] = e.target.value;
      statusChange.address[e.target.name] = !(e.target.value == "");
    }

    this.setState({
      data: data,
      statusChange: statusChange
    });
  }

  onChangeCountry(val) {
    let data = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };

    data.address.country = val;

    if (data.address.province && !countries.filter(ctr => ctr.name == val)[0].states.find(st => st.name == data.address.province)) {
      data.address.province = '';
    }
    statusChange.address.country = !(val === "");

    this.setState({ data: data });
    this.setState({ statusChange: statusChange });
  }

  onChangeProvince(val) {
    const data = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };

    data.address.province = val;
    statusChange.address.province = !(val === "");

    this.setState({ data: data });
    this.setState({ statusChange: statusChange });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var isAllValid = false;
    let dataCheck = { ...this.state.data };

    if (this.state.data.firstName == null) { dataCheck.firstName = ""; }
    if (this.state.data.lastName == null) { dataCheck.lastName = ""; }
    if (this.state.data.username == null) { dataCheck.username = ""; }
    if (this.state.data.email == null) { dataCheck.email = ""; }
    if (this.state.data.password == null) { dataCheck.password = ""; }
    if (this.state.data.confirmPassword == null) { dataCheck.confirmPassword = ""; }
    if (this.state.data.dateOfBirth == null) { dataCheck.dateOfBirth = ""; }
    if (this.state.data.gender == null) { dataCheck.gender = ""; }
    if (this.state.data.phone == null) { dataCheck.phone = ""; }
    if (this.state.data.cid == null) { dataCheck.cid = ""; }
    if (this.state.data.address.line == null) { dataCheck.address.line = ""; }
    if (this.state.data.address.postalCode == null) { dataCheck.address.postalCode = ""; }
    if (this.state.data.address.country == null) { dataCheck.address.country = ""; }
    if (this.state.data.address.province == null) { dataCheck.address.province = ""; }
    if (this.state.data.address.district == null) { dataCheck.address.district = ""; }


    isAllValid = this.state.statusChange.firstName && this.state.statusChange.lastName && this.state.statusChange.email
      && this.state.statusChange.password && this.state.statusChange.confirmPassword && this.state.statusChange.phone
      && this.state.statusChange.dateOfBirth && this.state.statusChange.gender
      && this.state.statusChange.cid && this.state.statusChange.username && this.state.statusChange.address.line
      && this.state.statusChange.address.country && this.state.statusChange.address.province
      && this.state.statusChange.address.district && this.state.statusChange.address.postalCode;


    if (!isAllValid) {
      Modal.warning({
        title: `Register Fail`,
        content: (
          <>
            Form data is not qualified enough to finish the registration.
          </>
        )
      });
      this.setState({ data: dataCheck });
    } else {
      let newPatient = {
        firstName: dataCheck.firstName,
        lastName: dataCheck.lastName,
        username: dataCheck.username,
        password: dataCheck.password,
        email: dataCheck.email,
        phone: dataCheck.phone,
        dateOfBirth: dataCheck.dateOfBirth,
        gender: dataCheck.gender,
        cId: dataCheck.cid,
        address: dataCheck.address,
        role: 'PATIENT'
      };

      axiosAction("/register", ADD, (res) => {
        // this.props.history.push("/");
        const modalConfig = (success, msg, callback) => {
          return {
            title: `Register ${success ? "Successfully" : "Fail"}`,
            content: (
              <>
                {msg}
              </>
            ),
            onOk: () => {
              if (callback) {
                callback();
              }
            }
          }
        }
        if (res.data.success) {
          Modal.success(modalConfig(res.data.success, res.data.message), () => { this.props.history.push("/") })
        } else {
          Modal.error(modalConfig(res.data.success, res.data.message))
        }

      }, (err) => notify('error', 'Error'), newPatient);
    }
  }

  inputBorder = (c1, c2) => {
    return c1 ? { border: c2 ? '1px solid green' : '1px solid red' } : {};
  }

  inputClassname = (c1, c2) => {
    return c1 ? (c2 ? "form-control is-valid" : "form-control is-invalid") : "form-control";
  }

  inputClassnameSelect = (c1, c2) => {
    return c1 ? (c2 ? "is-valid" : "is-invalid") : "";
  }

  render() {

    return (
      <>
        {/* Content */}
        <div className="main-content account-content">
          <div className="content">
            <div className="container">
              <div className="account-box" id="register-box">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="account-title">
                    <h3>Register</h3>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First Name<span className="text-danger">*</span></label>
                        <input type="text"
                          style={this.inputBorder(this.state.data.firstName != null, this.state.data.firstName && this.state.statusChange.firstName)}
                          className={this.inputClassname(this.state.data.firstName != null, this.state.data.firstName && this.state.statusChange.firstName)}
                          name="firstName"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter first name.</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name<span className="text-danger">*</span></label>
                        <input type="text"
                          style={this.inputBorder(this.state.data.lastName != null, this.state.data.lastName && this.state.statusChange.lastName)}
                          className={this.inputClassname(this.state.data.lastName != null, this.state.data.lastName && this.state.statusChange.lastName)}
                          name="lastName"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter last name.</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>User Name<span className="text-danger">*</span></label>
                        <input type="text"
                          style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                          className={this.inputClassname(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                          name="username"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter user name.</div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Email<span className="text-danger">*</span></label>
                        <input type="email"
                          style={this.inputBorder(this.state.data.email != null, this.state.data.email && this.state.statusChange.email)}
                          className={this.inputClassname(this.state.data.email != null, this.state.data.email && this.state.statusChange.email)}
                          name="email"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter valid email.</div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Date of Birth<span className="text-danger">*</span></label>
                        <DatePicker name='date' className={this.inputClassname(this.state.data.dateOfBirth != null, this.state.data.dateOfBirth && this.state.statusChange.dateOfBirth)}
                          style={this.inputBorder(this.state.data.dateOfBirth != null, this.state.data.dateOfBirth && this.state.statusChange.dateOfBirth)}
                          showTime={false} format="YYYY-MM-DD" clearIcon={true} disabledTime={true} value={ this.state.data.dateOfBirth ? moment(this.state.data.dateOfBirth) : ''}
                          allowClear={true} onChange={this.onChangeDateOfBirth} onSelect={this.onChangeDateOfBirth}></DatePicker>
                        <div className="invalid-feedback">Date of birth cannot be empty</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Password<span className="text-danger">*</span></label>
                        <input
                          style={this.inputBorder(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                          className={this.inputClassname(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                          type="password"
                          name="password"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter valid password.</div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Confirm Password<span className="text-danger">*</span></label>
                        <input
                          type="password"
                          style={this.inputBorder(this.state.data.confirmPassword != null, this.state.data.confirmPassword && this.state.statusChange.confirmPassword)}
                          className={this.inputClassname(this.state.data.confirmPassword != null, this.state.data.confirmPassword && this.state.statusChange.confirmPassword)}
                          name="confirmPassword"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Password must be the same.</div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Identity Card<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.cid != null, this.state.data.cid && this.state.statusChange.cid)}
                          className={this.inputClassname(this.state.data.cid != null, this.state.data.cid && this.state.statusChange.cid)}
                          name="cid"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter identity card.</div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label>Mobile Number<span className="text-danger">*</span></label>
                        <input
                          type="number"
                          style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          name="phone"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter phone number.</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Address<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.address.line != null, this.state.data.address.line && this.state.statusChange.address.line)}
                          className={this.inputClassname(this.state.data.address.line != null, this.state.data.address.line && this.state.statusChange.address.line)}
                          name="line"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter address.</div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>Postal Code<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.address.postalCode != null, this.state.data.address.postalCode && this.state.statusChange.address.postalCode)}
                          className={this.inputClassname(this.state.data.address.postalCode != null, this.state.data.address.postalCode && this.state.statusChange.address.postalCode)}
                          name="postalCode"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter postal code.</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="gen-label">Gender<span className="text-danger">*</span></label>
                      <div className="form-group gender-select">
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input type="radio" name="gender" className={this.state.data.gender != null ? (this.state.data.gender && this.state.statusChange.gender ? "form-check-input is-valid" : "form-check-input is-invalid") : "form-check-input"}
                              value="Male" onBlur={this.handleChange} />Male
                            <div className="invalid-feedback">Gender must be selected </div>
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input type="radio" name="gender" className="form-check-input"
                              value="Female" onBlur={this.handleChange} />Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>Country<span className="text-danger">*</span></label>
                        <Select
                          aria-autocomplete='none'
                          border='1'
                          showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }}
                          name='country'
                          className={this.inputClassname(this.state.data.address.country != null, this.state.data.address.country && this.state.statusChange.address.country)}
                          onChange={this.onChangeCountry}
                        >
                          {this.state.initCountries?.map((ctr, idx) => {
                            return (<Option key={idx} value={ctr.name}>{ctr.name}</Option>)
                          })}
                        </Select>
                        <div className="invalid-feedback">Please enter country.</div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>State<span className="text-danger">*</span></label>
                        <Select
                          aria-autocomplete='none'
                          showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }}
                          name='province'
                          className={this.inputClassname(this.state.data.address.province != null, this.state.data.address.province && this.state.statusChange.address.province)}
                          onChange={this.onChangeProvince}
                          value={this.state.data.address.province}
                        >
                          {this.state.initCountries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states?.map((st, idx) => {
                            return (<Option key={idx} value={st.name}>{st.name}</Option>)
                          })}
                        </Select>
                        <div className="invalid-feedback">Please enter province.</div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>District<span className="text-danger">*</span></label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.address.district != null, this.state.data.address.district && this.state.statusChange.address.district)}
                          className={this.inputClassname(this.state.data.address.district != null, this.state.data.address.district && this.state.statusChange.address.district)}
                          name="district"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter city.</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-check  text-center">
                    <label>
                      <input type="checkbox" name="checkbox" onChange={this.handleChange} /> I have read and agree the Terms &amp; Conditions</label>
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type="submit">Signup</button>
                  </div>
                  <div className="text-center login-link">Already have an account?&nbsp;
                    <Link to="/login">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Content /*/}
      </>
    );
  }
}

export default Register;
