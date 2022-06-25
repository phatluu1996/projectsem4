import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import Header from "./admin/components/header";
import '../src/admin/assets/css/style.css';
import Sidebar from "./admin/components/sidebar";

const AdminRoute = ({ component: Component, ...rest }) => {
    return (<div id="admin">
        <Route render={(props) => <Sidebar {...props} />} />
        <Route render={(props) => <Header {...props} />} />
        <Route {...rest} render={props => (<Component {...props} />)} />
        <div className="sidebar-overlay" data-reff />
    </div>
    );
};

export default AdminRoute;