import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
  render() {
    return (
      <>
       {/* Content */}
       <div className="main-content error-wrapper">
        <div className="content">
          <div className="container">
            <div className="error-box">
              <h1>404</h1>
              <h3><i className="fas fa-exclamation-triangle" /> Oops! Page not found!</h3>
              <p>The page you requested was not found.</p>
              <div className="search-error">
                <form action="#" className="error-search-form">
                  <input type="text" placeholder="Search" />
                  <button>
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="error-btn">
                <Link className="btn btn-primary" to="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content /*/}
      </>
    );
  }
}

export default Error404;
