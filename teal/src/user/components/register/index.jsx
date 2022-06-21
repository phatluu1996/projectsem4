import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {

  
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
                  <h3>Register</h3>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group form-check">
                  <label>
                    <input type="checkbox" />I have read and agree the Terms &amp; Conditions</label>
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
