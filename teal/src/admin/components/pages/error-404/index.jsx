import React, { Component } from 'react';

class Error404 extends Component{
    componentDidMount(){
        var someElement= document.getElementById("root");
        someElement.className += "main-wrapper error-wrapper";
        var someElement1= document.getElementById("my_div_");
        someElement1.className += " error-wrapper";
    }
    render(){
        return(
            <div className="error-box">
                <h1>404</h1>
                <h3><i className="fas fa-exclamation-triangle" /> Oops! Page not found!</h3>
                <p>The page you requested was not found.</p>
                <a href="/admin-template/" className="btn btn-primary go-home">Go to Home</a>
            </div>
    
        );
    }
}
export default Error404 ;