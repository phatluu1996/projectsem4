import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './utils';
import Header from "./user/components/header/index";
import Footer from "./user/components/footer";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {


    return (
        <div className="main-wrapper">
            <Route render={(props) => <Header {...props} />} />
            <Route {...rest} render={props => (

                isLogin() && restricted ?
                    <Redirect to="/" />
                    : <Component {...props} />

            )} />
            <Route render={(props) => <Footer {...props} />} />
        </div>
    );
};

export default PublicRoute;
// class PublicRoute extends Component {
//     render() {
//         return (
//             <div className="main-wrapper">
//                 <Route render={(props) => <Header {...props} />} />
//                 <Route {...rest} render={props => (

//                     false && restricted ?
//                         <Redirect to="/" />
//                         : <Component {...props} />

//                 )} />
//                 <Route render={(props) => <Footer {...props} />} />
//             </div>
//         );
//     }
// }