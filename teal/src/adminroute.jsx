import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({component: Component, ...rest}) => {
    return (<div>
        <Route {...rest} render={props => ( <Component {...props} />)}/>
    </div>
    );
};

export default AdminRoute;