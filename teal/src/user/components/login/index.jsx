import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ADD, ADMIN, DOCTOR, RECEPTION } from '../../../constants';
import { axiosAction, notify } from '../../../actions';

class Login extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      data:{
        username : null,
        password : null
      },
      statusChange:{
        username : false,
        password : false
      }
    } 

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputBorder = this.inputBorder.bind(this);
    this.inputClassname = this.inputClassname.bind(this);

  }

  handleChange = (e) => {
    let data = {...this.state.data};
    let statusChange = {...this.state.statusChange};

    data[e.target.name] = e.target.value;
    statusChange[e.target.name] = !(e.target.value == "");

    this.setState({data : data});
    this.setState({statusChange : statusChange});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var isAllValid = false;
    let dataCheck = {...this.state.data};

    if(this.state.data.username == null){ dataCheck.username = "";}
    if(this.state.data.password == null){dataCheck.password = "";}

    isAllValid = this.state.statusChange.username && this.state.statusChange.password;

    if(!isAllValid){
      this.setState({data : dataCheck});
    }else{
      let dataLogin = {
        username : dataCheck.username,
        password : dataCheck.password
      };

      axiosAction("/login", ADD, (res) => {
        localStorage.setItem('userToken', res.data.accessToken);
        localStorage.setItem('headerName', res.data.header);
        localStorage.setItem('userName', res.data.username);
        localStorage.setItem('userId', res.data.id);
        localStorage.setItem('userRole', res.data.roles[0]);
        notify('success', "Success")
        switch (res.data.roles[0]) {
          case ADMIN:
          case RECEPTION:
          case DOCTOR:
            this.props.history.push("/admin");
            break;
        
          default:
            this.props.history.push("/");
            break;
        }
        
      }, (err) => notify('error', 'Error'), dataLogin);
    }
  }
  

  inputBorder = (c1, c2) => {
    return c1?{border : c2?'1px solid green':'1px solid red'}:{};
  }

  inputClassname = (c1, c2) => {
    return c1?(c2?"form-control is-valid":"form-control is-invalid"):"form-control";
  }

  render() {    
    return (
      <>
        {/* Content */}
        <div className="main-content account-content">
        <div className="content">
          <div className="container">
            <div className="account-box" id="login-box">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <div className="account-title">
                  <h3>Login</h3>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" 
                    name="username"
                    className={this.inputClassname(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                    style={this.inputBorder(this.state.data.username != null, this.state.data.username && this.state.statusChange.username)}
                    onChange={this.handleChange} />
                  <div className="invalid-feedback">Please enter username.</div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password"
                    name="password"
                    className={this.inputClassname(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                    style={this.inputBorder(this.state.data.password != null, this.state.data.password && this.state.statusChange.password)}
                    onChange={this.handleChange} />
                  <div className="invalid-feedback">Please enter password.</div>
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
