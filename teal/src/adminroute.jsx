import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import Header from "./admin/components/header";
import '../src/admin/assets/css/style.css';
import Sidebar from "./admin/components/sidebar";

const AdminRoute = ({ component: Component, pushBack, isReception, restricted, role, ...rest }) => {
    return (<div id="admin">

        <Route {...rest} render={props => (restricted || (role && role == localStorage.getItem("userRole")) ? (
            <>
                <Route render={(props) => <Sidebar {...props} />} />
                <Route render={(props) => <Header {...props} />} />
                <Component {...props} pushBack={pushBack} isReception={isReception} />
                <div className="sidebar-overlay" data-reff />
            </>) : <Redirect to="/"></Redirect>)} />
    </div>
    );
};

export default AdminRoute;