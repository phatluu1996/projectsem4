import React from 'react';

import AppContainer from './appcontainer.jsx';

import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import config from 'config';

const history = createBrowserHistory();

const AppRouter = (props) => {
    return(
        <Router basename={`${config.publicPath}`} history={history}>
            <Route render={(props)=> <AppContainer {...props}/>} />
        </Router>
    );
    
}


export default AppRouter;