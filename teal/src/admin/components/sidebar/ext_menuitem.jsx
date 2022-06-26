import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class MenuItem extends Component {
    
    constructor(props){
        super(props);
        this.state = {isActive : false};
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <li className={`${this.props.location.pathname === this.props.to || this.props.location.pathname === this.props.to + "/add" || this.props.location.pathname === this.props.to + "/update" ? "active" : ""}`}>
                <Link to={this.props.to}><i className={this.props.icon} />{this.props.title}</Link>
            </li>
        );
    }

}
export default withRouter(MenuItem);