import React, { Component } from "react";
import {Logo_Dark} from '../../imagepath';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  componentDidMount(){
      var someElement= document.getElementById("root");
      someElement.className += "main-wrapper account-wrapper";
      var someElement1= document.getElementById("my_div_");
      someElement1.className += " account-wrapper";
  }
  render() {
    return (
      <div className="account-page">
        <div className="account-center">
          <div className="account-box">
            <form className="form-signin" action="#">
              <div className="account-logo">
                <a href="/admin-template/"><img src={Logo_Dark} alt="Medifab" /></a>
              </div>
              <div className="form-group">
                <label>Enter Your Email</label>
                <input type="text" className="form-control" autoFocus />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
              </div>
              <div className="text-center register-link">
                <Link to="/login">Back to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
