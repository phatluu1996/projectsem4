import React, { Component } from 'react';
import {Logo_Dark} from '../../imagepath';
import { Link } from 'react-router-dom';

class Login extends Component{
    componentDidMount(){
        var someElement= document.getElementById("root");
        someElement.className += "main-wrapper account-wrapper";
        var someElement1= document.getElementById("my_div_");
        someElement1.className += " account-wrapper";
    }
    render(){
        return(
            <div className="account-page">
        <div className="account-center">
          <div className="account-box">
            <form action="#" className="form-signin">
              <div className="account-logo">
                <a href="/admin-template/"><img src={Logo_Dark} alt="Medifab" /></a>
              </div>
              <div className="form-group">
                <label>Username or Email</label>
                <input type="text" autoFocus className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group text-right">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary account-btn">Login</button>
              </div>
              <div className="text-center register-link">
                Don’t have an account? <Link to="/register">Register Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
        );
    }
}
export default Login;