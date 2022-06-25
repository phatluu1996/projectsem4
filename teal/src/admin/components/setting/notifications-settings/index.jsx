import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";

class notificationSetting extends Component{
    
    render(){
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Notifications Settings</h4>
                  <div>
                    <ul className="list-group notification-list">
                      <li className="list-group-item">
                        Employee
                        <div className="material-switch float-right">
                          <input id="staff_module" type="checkbox" defaultChecked="checked" />
                          <label htmlFor="staff_module" className="badge-primary" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        Holidays
                        <div className="material-switch float-right">
                          <input id="holidays_module" type="checkbox" />
                          <label htmlFor="holidays_module" className="badge-primary" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        Leave Request
                        <div className="material-switch float-right">
                          <input id="leave_module" type="checkbox" />
                          <label htmlFor="leave_module" className="badge-primary" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        Events
                        <div className="material-switch float-right">
                          <input id="events_module" type="checkbox" />
                          <label htmlFor="events_module" className="badge-primary" />
                        </div>
                      </li>
                      <li className="list-group-item">
                        Chat
                        <div className="material-switch float-right">
                          <input id="chat_module" type="checkbox" />
                          <label htmlFor="chat_module" className="badge-primary" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
};

export default notificationSetting;