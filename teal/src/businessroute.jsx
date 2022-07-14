import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import Footer from "./user/components/footer";
import Header from "./user/components/header";
import '../src/assets/css/style.css';

const BusinessRoute = ({ component: Component, restricted, role, ...rest }) => {
    return (<div id="business">
        <Route {...rest} render={props => (restricted || (role && role == localStorage.getItem("userRole")) ? (
            <>
                <Route render={(props) => <Header {...props} />} />
                <Component {...props} />
                <Route render={(props) => <Footer {...props} />} />
            </>) : <Redirect to="/"></Redirect>)} />
    </div>
    );
};

export default BusinessRoute;