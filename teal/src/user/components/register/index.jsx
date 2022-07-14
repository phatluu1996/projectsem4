import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Select } from 'antd';
import { countries } from '../../../address';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ADD, GET, UPDATE } from '../../../constants';
import { axiosAction, axiosActions, notify } from '../../../actions';

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
        phone: null,
        cid: null,
        address: {
          line: null,
          postalCode: null,
          province: null,
          city: null,
          country: null,
          retired: false
        }
      },
      statusChange: {
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        phone: false,
        cid: false,
        address: {
          line: false,
          postalCode: false,
          province: false,
          city: false,
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

  }

  handleChange = (e) => {
    const validEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
    const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    let data = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };

    var addressField = ["line", "city", "postalCode"];

    if (addressField.findIndex(field => field === e.target.name) == -1) {

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

        default:
          statusChange[e.target.name] = !(e.target.value == "");
      }

    } else {
      data.address[e.target.name] = e.target.value;
      statusChange.address[e.target.name] = !(e.target.value == "");
    }

    this.setState({ data: data });
    this.setState({ statusChange: statusChange });
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
    if (this.state.data.phone == null) { dataCheck.phone = ""; }
    if (this.state.data.cid == null) { dataCheck.cid = ""; }
    if (this.state.data.address.line == null) { dataCheck.address.line = ""; }
    if (this.state.data.address.postalCode == null) { dataCheck.address.postalCode = ""; }
    if (this.state.data.address.country == null) { dataCheck.address.country = ""; }
    if (this.state.data.address.province == null) { dataCheck.address.province = ""; }
    if (this.state.data.address.city == null) { dataCheck.address.city = ""; }

    isAllValid = this.state.statusChange.firstName && this.state.statusChange.lastName && this.state.statusChange.email
      && this.state.statusChange.password && this.state.statusChange.confirmPassword && this.state.statusChange.phone
      && this.state.statusChange.cid && this.state.statusChange.username && this.state.statusChange.address.line
      && this.state.statusChange.address.country && this.state.statusChange.address.province
      && this.state.statusChange.address.city && this.state.statusChange.address.postalCode;

    if (!isAllValid) {
      this.setState({ data: dataCheck });
    } else {
      let newPatient = {
        firstName: dataCheck.firstName,
        lastName: dataCheck.lastName,
        username: dataCheck.username,
        password: dataCheck.password,
        email: dataCheck.email,
        phone: dataCheck.phone,
        cId: dataCheck.cid,
        address: dataCheck.address,
        role: 'PATIENT'
      };

      axiosAction("/register", ADD, (res) => {
        notify('success', "Success")
        this.props.history.push("/");
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
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text"
                            style={this.inputBorder(this.state.data.firstName != null, this.state.data.firstName && this.state.statusChange.firstName)}
                            className={this.inputClassname(this.state.data.firstName != null, this.state.data.firstName && this.state.statusChange.firstName)}
                            name="firstName"
                            onBlur={this.handleChange}
                          />
                          <div className="invalid-feedback">Please enter first name.</div>
                        </div>
                        <label>User Name</label>
                        <input type="text"
                          style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                          className={this.inputClassname(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                          name="username"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter user name.</div>
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          style={this.inputBorder(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                          className={this.inputClassname(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                          type="password"
                          name="password"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter valid password.</div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          style={this.inputBorder(this.state.data.confirmPassword != null, this.state.data.confirmPassword && this.state.statusChange.confirmPassword)}
                          className={this.inputClassname(this.state.data.confirmPassword != null, this.state.data.confirmPassword && this.state.statusChange.confirmPassword)}
                          name="confirmPassword"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Password must be the same.</div>
                      </div>
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                          type="number"
                          style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          name="phone"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter phone number.</div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                          style={this.inputBorder(this.state.data.lastName != null, this.state.data.lastName && this.state.statusChange.lastName)}
                          className={this.inputClassname(this.state.data.lastName != null, this.state.data.lastName && this.state.statusChange.lastName)}
                          name="lastName"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter last name.</div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                          style={this.inputBorder(this.state.data.email != null, this.state.data.email && this.state.statusChange.email)}
                          className={this.inputClassname(this.state.data.email != null, this.state.data.email && this.state.statusChange.email)}
                          name="email"
                          onBlur={this.handleChange}
                        />
                        <div className="invalid-feedback">Please enter valid email.</div>
                      </div>
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>Identity Card</label>
                          <input
                            type="text"
                            style={this.inputBorder(this.state.data.cid != null, this.state.data.cid && this.state.statusChange.cid)}
                            className={this.inputClassname(this.state.data.cid != null, this.state.data.cid && this.state.statusChange.cid)}
                            name="cid"
                            onBlur={this.handleChange} />
                          <div className="invalid-feedback">Please enter identity card.</div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            style={this.inputBorder(this.state.data.address.postalCode != null, this.state.data.address.postalCode && this.state.statusChange.address.postalCode)}
                            className={this.inputClassname(this.state.data.address.postalCode != null, this.state.data.address.postalCode && this.state.statusChange.address.postalCode)}
                            name="postalCode"
                            onBlur={this.handleChange} />
                          <div className="invalid-feedback">Please enter postal code.</div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.address.line != null, this.state.data.address.line && this.state.statusChange.address.line)}
                          className={this.inputClassname(this.state.data.address.line != null, this.state.data.address.line && this.state.statusChange.address.line)}
                          name="line"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter address.</div>
                      </div>

                      <div className="row">
                        <div className="form-group col-sm-4">
                          <label>Country</label>
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
                        <div className="form-group col-sm-4">
                          <label>State</label>
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
                        <div className="form-group col-sm-4">
                          <label>City</label>
                          <input
                            type="text"
                            style={this.inputBorder(this.state.data.address.city != null, this.state.data.address.city && this.state.statusChange.address.city)}
                            className={this.inputClassname(this.state.data.address.city != null, this.state.data.address.city && this.state.statusChange.address.city)}
                            name="city"
                            onBlur={this.handleChange} />
                          <div className="invalid-feedback">Please enter city.</div>
                        </div>
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
