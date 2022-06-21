import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

class SettingSidebar extends Component{
    
    render(){ 
        const url = this.props.location.pathname.split("/")[1];
        return(
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div className="sidebar-menu">
                        <ul>
                        <li>
                            <a href="/admin-template/"><i className="fas fa-home back-icon" /> Back to Home</a>
                        </li>
                        <li className="menu-title">Settings</li>
                        <li className={url === "settings" ? "active" : ""}>
                            <Link to="/settings">Company Settings</Link>
                        </li>
                        <li className={url === "localization" ? "active" : ""}>
                            <Link to="/localization">Localization</Link>
                        </li>
                        <li className={url === "theme-settings" ? "active" : ""}>
                            <Link to="/theme-settings">Theme Settings</Link>
                        </li>
                        <li className={url === "roles-permissions" || url === "add-role"  || url === "edit-role" ? "active" : ""}>
                            <Link to="/roles-permissions">Roles &amp; Permissions</Link>
                        </li>
                        <li className={url === "email-settings" ? "active" : ""}>
                            <Link to="/email-settings">Email Settings</Link>
                        </li>
                        <li className={url === "invoice-settings" ? "active" : ""}>
                            <Link to="/invoice-settings">Invoice Settings</Link>
                        </li>
                        <li className={url === "salary-settings" ? "active" : ""}>
                            <Link to="/salary-settings">Salary Settings</Link>
                        </li>
                        <li className={url === "notifications-settings" ? "active" : ""}>
                            <Link to="/notifications-settings">Notifications</Link>
                        </li>
                        <li className={url === "change-password" ? "active" : ""}>
                            <Link to="/change-password">Change Password</Link>
                        </li>
                        <li className={url === "leave-type" || url === "edit-leave-type" || url === "add-leave-type" ? "active" : ""}>
                            <Link to="/leave-type">Leave Type</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

};

export default withRouter(SettingSidebar);