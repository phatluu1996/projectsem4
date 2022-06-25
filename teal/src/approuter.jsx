import React from 'react';

import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome/css/fontawesome.min.css';
import './assets/css/fontawesome/css/all.min.css';
import './assets/css/bootstrap-datetimepicker.min.css';
import './assets/css/style.css';

import './assets/js/jquery-3.5.1.min.js';
import './assets/js/popper.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/bootstrap-datetimepicker.min.js';
import './assets/js/datepicker.js';
import './assets/js/theme.js';

import 'antd/dist/antd.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/css/fullcalendar.min.css';
import './assets/plugins/datatables/datatables.min.css';
import './assets/css/select2.min.css';
import './assets/plugins/summernote/dist/summernote-bs4.css';
import './assets/plugins/morris/morris.css';
import './assets/css/tagsinput.css';
import './assets/plugins/light-gallery/css/lightgallery.min.css';
// import './assets/css/admin-style.css';

import './assets/js/jquery.slimscroll.js';
import './assets/js/select2.min.js';
import './assets/js/moment.min.js';
import './assets/js/bootstrap-datetimepicker.min.js';
// import './assets/plugins/summernote/dist/summernote-bs4.min.js';
import './assets/plugins/light-gallery/js/lightgallery-all.min.js';
import './assets/js/app.js';


// import BusinessAppContainer from './user/appcontainer.jsx';
// import AdminAppContainer from './admin/appcontainer.jsx';
import AppContainer from './appcontainer.jsx';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';

const AppRouter = (props) => {
    return(
        <Router basename={`${config.publicPath}`}>
            <Route render={(props)=> <AppContainer {...props}/>} />
            {/* <Route render={(props)=> <BusinessAppContainer {...props}/>} /> */}
            {/* <Route render={(props)=> <AdminAppContainer {...props}/>} /> */}
        </Router>
    );
    
}


export default AppRouter;