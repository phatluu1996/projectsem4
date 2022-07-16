import React, { Component } from "react";
import {  useHistory, useLocation ,Link } from "react-router-dom";
import { ADD, ADMIN, DOCTOR, GET, RECEPTION } from '../../../constants';
import { axiosAction, isValid, notify , isFormValid } from '../../../actions';
import { Modal } from "antd";


class ResetPassword extends Component {
  // lieu.nhu@mediap.com
  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
  id = this.props.match.params.id;
  token = this.props.match.params.token;
  constructor(props) {
    super(props);

    this.state = {
       data:{
        password: null,
        passwordConfirm:null,
        validateMess:null,
        validateConfirmMess:null,
        token:null
       }
    }
    this.fetchData = this.fetchData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputBorder = this.inputBorder.bind(this);
    this.inputClassname = this.inputClassname.bind(this);

  }


  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
  }


  fetchData = () => {
    axiosAction("/getUserForget/" + this.id + "/" + this.token, GET, res => {
    }, (err) => notify('error', "Error"));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    tmp.token = this.token
    if (!isFormValid(e)) return;
    axiosAction("/changePasswordForget", ADD, res => {
      console.log(res.data);
      notify('success', '', res.data.message)
      this.props.history.push("/");
    }, (err) => notify('error', "Error"),tmp);
  }


  onChange = (e) =>{
  const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
  const tmp = {...this.state.data}
    switch (e.target.name) {
      case "password":
        if(validPassword.test(e.target.value)){
          tmp.password = e.target.value;
          tmp.validateMess = null;
        }else{
          tmp.validateMess = "Password must be valid."
        }
        break;

      case "passwordConfirm":
        tmp.passwordConfirm = e.target.value;
        if(this.state.data.password != e.target.value){
          tmp.validateConfirmMess =  "Confirm Password must be the same."
        }else{
          tmp.validateConfirmMess = null;
        }
        break;
    }
    this.setState({data:tmp})
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
              <div className="account-box" id="login-box">
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <div className="account-title">
                    <h3>Reset Password</h3>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                      name="password"
                      className={isValid(this.state.data.validateMess == null && this.state.data.password)}
                      onChange={this.onChange}
                       />
                    <div className="invalid-feedback">{this.state.data.validateMess}</div>
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password"
                      name="passwordConfirm"
                     className={isValid(this.state.data.validateConfirmMess == null && this.state.data.passwordConfirm)}                      onChange={this.onChange}  
                      />
                    <div className="invalid-feedback">{this.state.data.validateConfirmMess}</div>
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type="submit">Submit</button>
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

export default ResetPassword;
