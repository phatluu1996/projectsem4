import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import Header from "./admin/components/header";
import '../src/admin/assets/css/style.css';

const AdminRoute = ({component: Component, ...rest}) => {
    return (<div id="admin">
        <Route render={(props) => <Header {...props} />} />
        <Route {...rest} render={props => ( <Component {...props} />)}/>
    </div>
    );
};

export default AdminRoute;