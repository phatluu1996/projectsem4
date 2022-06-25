import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import Footer from "./user/components/footer";
import Header from "./user/components/header";
import '../src/assets/css/style.css';

const BusinessRoute = ({ component: Component, ...rest }) => {
    return (<div id="business">        
        <Route render={(props) => <Header {...props} />} />
        <Route {...rest} render={props => (<Component {...props} />)} />
        <Route render={(props) => <Footer {...props} />} />
    </div>
    );
};

export default BusinessRoute;