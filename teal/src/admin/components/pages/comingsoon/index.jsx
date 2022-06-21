import React, { Component } from 'react';

class ComingSoon extends Component{
    componentDidMount(){
        var someElement= document.getElementById("root");
        someElement.className += "main-wrapper coming-wrapper";
        var someElement1= document.getElementById("my_div_");
        someElement1.className += " coming-wrapper";
    }
    render(){
        return(
            <div className="table-cell">
        <div className="container">
          <div className="title-section">
            <h1 className="coming-title">Launching Soon</h1>
            <p className="sub-title">We’re working very hard on the new version of our site. Stay tuned!</p>
          </div>
          <div className="countdown" id="countdown">
            <ul>
              <li className="timer">
                <span className="days">365</span>
                <p className="countdown-period">Days</p>
              </li>
              <li className="seperator">:</li>
              <li className="timer">
                <span className="hours">23</span>
                <p className="countdown-period">Hours</p>
              </li>
              <li className="seperator">:</li>
              <li className="timer">
                <span className="minutes">45</span>
                <p className="countdown-period">Minutes</p>
              </li>
              <li className="seperator">:</li>
              <li className="timer">
                <span className="seconds">12</span>
                <p className="countdown-period">Seconds</p>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="newsletter">
            <h3>get notified about our launch</h3>
            <form>
              <input type="text" placeholder="Enter email address" />
              <input className="notify-btn" type="submit" defaultValue="Notify Me" />
            </form>
          </div>
        </div>
      </div>
    
        );
    }
}
export default ComingSoon