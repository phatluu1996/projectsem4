import React, { Component } from 'react';
import {User_img} from '../../imagepath';
import { Link } from 'react-router-dom';

class LockScreen extends Component{
    componentDidMount(){
        var someElement= document.getElementById("root");
        someElement.className += "main-wrapper error-wrapper";
        var someElement1= document.getElementById("my_div_");
        someElement1.className += " error-wrapper";
    }
    render(){
        return(
            <div className="error-box">
            <form action="/admin-template/">
                <div className="lock-user">
                    <img className="rounded-circle" src={User_img} alt="" />
                    <h6>John Doe</h6>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Enter Password" type="password" />
                </div>
                <div className="text-center">
                    <Link to="/forgot-password">Sign in as a different user?</Link>
                </div>
            </form>
        </div>
    
        );
    }
}
export default LockScreen