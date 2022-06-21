import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  
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
                  <h3>Login</h3>
                </div>
                <div className="form-group">
                  <label>Username or Email</label>
                  <input type="text" className="form-control" autoFocus />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group text-right"> 
                  <Link to="/forgot-password">Forgot your password?</Link>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">Login</button>
                </div>
                <div className="text-center register-link">Don’t have an account?&nbsp; 
                  <Link to="/register">Register Now</Link>
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

export default Login;
