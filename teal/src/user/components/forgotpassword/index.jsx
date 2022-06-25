import React, { Component } from "react";
import { Link } from "react-router-dom";

class ForgotPassword extends Component {

  
  render() {
    
    return (
      <>
      {/* Content */}
      <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div className="account-box">
              <form className="form-signin" action="#">
                <div className="account-title">
                  <h3>Forgot Password</h3>
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
      </div>
      {/* Content /*/}
      </>
    );
  }
}

export default ForgotPassword;
