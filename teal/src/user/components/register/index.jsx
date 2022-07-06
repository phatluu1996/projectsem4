import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Select } from 'antd';
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
        phone: null
      },
      statusChange: {
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
        phone: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputBorder = this.inputBorder.bind(this);
    this.inputClassname = this.inputClassname.bind(this);

  }

  handleChange = (e) => {
    const validEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
    const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    let data = { ...this.state.data };
    let statusChange = { ...this.state.statusChange };

    data[e.target.name] = e.target.value;

    this.setState({ data: data });

    statusChange[e.target.name] = !(e.target.value == "");

    if (e.target.name == "email") {
      statusChange[e.target.name] = validEmail.test(e.target.value);
    }

    if (e.target.name == "password") {
      statusChange[e.target.name] = validPassword.test(e.target.value);
    }

    if (e.target.name == "confirmPassword") {
      statusChange[e.target.name] = this.state.data.password == e.target.value;
    }

    if (e.target.name == "username") {
      statusChange[e.target.name] = e.target.value;
    }

    this.setState({ statusChange: statusChange });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var isAllValid = false;
    let dataCheck = { ...this.state.data };

    if (this.state.data.firstName == null) { dataCheck.firstName = ""; }
    if (this.state.data.lastName == null) { dataCheck.lastName = ""; }
    if (this.state.data.email == null) { dataCheck.email = ""; }
    if (this.state.data.password == null) { dataCheck.password = ""; }
    if (this.state.data.confirmPassword == null) { dataCheck.confirmPassword = ""; }
    if (this.state.data.phone == null) { dataCheck.phone = ""; }

    isAllValid = this.state.statusChange.firstName && this.state.statusChange.lastName && this.state.statusChange.email
      && this.state.statusChange.password && this.state.statusChange.confirmPassword && this.state.statusChange.phone;

    if (!isAllValid) {
      this.setState({ data: dataCheck });
    } else {
      let newPatient = {
        username: dataCheck.email,
        password: dataCheck.password,
        role: 'user'
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
                          type="text"
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
                          <label>Country</label>
                          {/* <input
                            type="text"
                            style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            name="state"
                            onBlur={this.handleChange} /> */}
                          <Select
                            aria-autocomplete='none'
                            showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }}
                            name='country'
                            className="form-control"
                          // className={isValid(this.state.data.address?.province)} 
                          // onChange={(arg) => this.onChange(arg, "province")} 
                          // value={this.state.data.address.province}
                          >
                            {/* {this.state.countries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states?.map((st, idx) => {
                                  return (<Option key={idx} value={st.name}>{st.name}</Option>)
                                })} */}
                          </Select>
                          <div className="invalid-feedback">Please enter phone number.</div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>State</label>
                          {/* <input
                            type="text"
                            style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            name="country"
                            onBlur={this.handleChange} /> */}
                          <Select
                            aria-autocomplete='none'
                            showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }}
                            name='state'
                            className="form-control"
                          // className={isValid(this.state.data.address?.province)} 
                          // onChange={(arg) => this.onChange(arg, "province")} 
                          // value={this.state.data.address.province}
                          >
                            {/* {this.state.countries?.filter(ctr => ctr.name === this.state.data.address?.country)[0]?.states?.map((st, idx) => {
                                  return (<Option key={idx} value={st.name}>{st.name}</Option>)
                                })} */}
                          </Select>
                          <div className="invalid-feedback">Please enter phone number.</div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                          name="address"
                          onBlur={this.handleChange} />
                        <div className="invalid-feedback">Please enter phone number.</div>
                      </div>

                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>City</label>
                          <input
                            type="text"
                            style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            name="state"
                            onBlur={this.handleChange} />
                          <div className="invalid-feedback">Please enter phone number.</div>
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Postal Code</label>
                          <input
                            type="text"
                            style={this.inputBorder(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            className={this.inputClassname(this.state.data.phone != null, this.state.data.phone && this.state.statusChange.phone)}
                            name="country"
                            onBlur={this.handleChange} />
                          <div className="invalid-feedback">Please enter phone number.</div>
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
