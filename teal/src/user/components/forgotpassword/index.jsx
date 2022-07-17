import React, { Component } from "react";
import { Link } from "react-router-dom";
import { axiosAction, notify } from "../../../actions";
import { ADD } from "../../../constants";

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: null
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      email:e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    axiosAction("/forgetPassword?email="+this.state.email, ADD, res => {
      console.log(res)
      notify('success', '', res.data.message)
      this.props.history.push("/");
    }, (err) => notify('error', "Error"),{});
  }

  

  
  render() {
    
    return (
      <>
      {/* Content */}
      <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div className="account-box">
              <form className="form-signin" onSubmit={this.onSubmit} action="#">
                <div className="account-title">
                  <h3>Forgot Password</h3>
                </div>
                <div className="form-group">
                  <label>Enter Your Email</label>
                  <input type="text" onChange={this.onChange} className="form-control" autoFocus />
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
