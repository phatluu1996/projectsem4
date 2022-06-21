import React, {Component} from 'react';
import {Link } from "react-router-dom";

class OpenChat extends Component{
    
    render(){
      
        return(
            <>            
            <div className="notification-box">
              <div className="msg-sidebar notifications msg-noti">
                <div className="topnav-dropdown-header">
                  <span>Messages</span>
                </div>
                <div className="drop-scroll msg-list-scroll">
                  <ul className="list-box">
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">R</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Richard Miles </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item new-message">
                          <div className="list-left">
                            <span className="avatar">J</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">John Doe</span>
                            <span className="message-time">1 Aug</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">T</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Tarah Shropshire </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">M</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Mike Litorus</span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">C</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Catherine Manseau </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">D</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Domenic Houston </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">B</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Buster Wigton </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">R</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Rolland Webber </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">C</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author"> Claire Mapes </span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">M</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Melita Faucher</span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">J</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Jeffery Lalor</span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">L</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Loren Gatlin</span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">T</span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">Tarah Shropshire</span>
                            <span className="message-time">12:28 AM</span>
                            <div className="clearfix" />
                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="/chat">See all messages</Link>
                </div>
              </div>
            </div>
          </>
        );
    }
};

export default OpenChat;