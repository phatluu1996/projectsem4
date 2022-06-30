import { data } from "jquery";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ADD, GET, UPDATE } from '../../../constants';
import { axiosAction, axiosActions, notify } from '../../../actions';

class Register extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data:{
        firstName : null,
        lastName : null,
        email : null,
        password : null,
        confirmPassword : null,
        phone : null
      },
      statusChange:{
        firstName: false,
        lastName : false,
        email: false,
        password:false,
        confirmPassword:false,
        phone:false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    const validEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
    const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    let data = {...this.state.data};
    let statusChange = {...this.state.statusChange};

    data[e.target.name] = e.target.value;

    this.setState({data : data});

    statusChange[e.target.name] = !(e.target.value == "");

    if(e.target.name == "email"){
      statusChange[e.target.name] = validEmail.test(e.target.value);
    }

    if(e.target.name == "password"){
      statusChange[e.target.name] = validPassword.test(e.target.value);
    }

    if(e.target.name == "confirmPassword"){
      statusChange[e.target.name] = this.state.data.password == e.target.value;
    }

    if(e.target.name == "checkbox"){
      statusChange[e.target.name] = e.target.value;
    }

    this.setState({statusChange : statusChange});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var isAllValid = false;
    let dataCheck = {...this.state.data};

    if(this.state.data.firstName == null){ dataCheck.firstName = "";}
    if(this.state.data.lastName == null){dataCheck.lastName = "";}
    if(this.state.data.email == null){dataCheck.email = "";}
    if(this.state.data.password == null){dataCheck.password = "";}
    if(this.state.data.confirmPassword == null){dataCheck.confirmPassword = "";}
    if(this.state.data.phone == null){dataCheck.phone = "";}

    isAllValid = this.state.statusChange.firstName && this.state.statusChange.lastName && this.state.statusChange.email
      && this.state.statusChange.password && this.state.statusChange.confirmPassword && this.state.statusChange.phone;

    if(!isAllValid){
      this.setState({data : dataCheck});
    }else{
      let newPatient = {
        username : dataCheck.email,
        password : dataCheck.password,
        role : 'USER'
      };
      // NotificationManager.success('success', "Success", 2000);
      axiosAction("/users", ADD, (res) => {
        notify('success', "Success")
        this.props.history.push("/");
      }, (err) => notify('error', 'Error'), newPatient);
    }
  }

  render() {
    
    return (
      <>
       {/* Content */}
       <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div className="account-box">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <div className="account-title">
                  <h3>Register</h3>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" 
                    style={this.state.data.firstName!=null?{border : (this.state.data.firstName && this.state.statusChange.firstName)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.firstName!=null?(this.state.data.firstName && this.state.statusChange.firstName?" is-valid":" is-invalid"):"")} 
                    name="firstName" 
                    onBlur={this.handleChange}
                  />
                  <div className="invalid-feedback">Please enter first name.</div>
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" 
                    style={this.state.data.lastName!=null?{border : (this.state.data.lastName && this.state.statusChange.lastName)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.lastName!=null?(this.state.data.lastName && this.state.statusChange.lastName?" is-valid":" is-invalid"):"")}
                    name="lastName" 
                    onBlur={this.handleChange} 
                />
                  <div className="invalid-feedback">Please enter last name.</div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" 
                    style={this.state.data.email!=null?{border : (this.state.data.email && this.state.statusChange.email)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.email!=null?(this.state.data.email && this.state.statusChange.email?" is-valid":" is-invalid"):"")}
                    name="email"
                    onBlur={this.handleChange}
                />
                  <div className="invalid-feedback">Please enter valid email.</div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    style={this.state.data.password!=null?{border : (this.state.data.password && this.state.statusChange.password)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.password!=null?(this.state.data.password && this.state.statusChange.password?" is-valid":" is-invalid"):"")}
                    type="password" 
                    name="password" 
                    onBlur={this.handleChange}/>
                    <div className="invalid-feedback">Please enter valid password.</div>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input 
                    type="password" 
                    style={this.state.data.confirmPassword!=null?{border : (this.state.data.confirmPassword && this.state.statusChange.confirmPassword)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.confirmPassword!=null?(this.state.data.confirmPassword && this.state.statusChange.confirmPassword?" is-valid":" is-invalid"):"")}
                    name="confirmPassword" 
                    onBlur={this.handleChange}/>
                    <div className="invalid-feedback">Password must be the same.</div>
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input 
                    type="text"
                    style={this.state.data.phone!=null?{border : (this.state.data.phone && this.state.statusChange.phone)?'1px solid green':'1px solid red'}:{}}
                    className={"form-control" + (this.state.data.phone!=null?(this.state.data.phone && this.state.statusChange.phone?" is-valid":" is-invalid"):"")} 
                    name="phone" 
                    onBlur={this.handleChange}/>
                    <div className="invalid-feedback">Please enter phone number.</div>
                </div>
                <div className="form-group form-check">
                  <label>
                    <input type="checkbox" name="checkbox" onChange={this.handleChange}/> I have read and agree the Terms &amp; Conditions</label>
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
