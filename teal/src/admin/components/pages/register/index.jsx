import React, { Component } from 'react';
import {Logo_Dark} from '../../imagepath';
import { Link } from 'react-router-dom';

class Register extends Component{
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
            <div className="account-logo">
              <a href="/admin-template/"><img src={Logo_Dark} alt="Medifab" /></a>
            </div>
            <div className="form-group">
              <label>Username</label>
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
            <div className="form-group checkbox">
              <label>
                <input type="checkbox" /> I have read and agree the Terms &amp; Conditions
              </label>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary account-btn" type="submit">Signup</button>
            </div>
            <div className="text-center login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
        
        );
    }
}
export default Register;