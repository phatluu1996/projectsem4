import React, { Component } from "react";
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader";
import { Blog_01 } from "../imagepath"

class Blog extends Component {
    render(){
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-sm-8 col-4">
                  <h4 className="page-title">Blog</h4>
                </div>
                <div className="col-sm-4 col-8 text-right m-b-30">
                  <Link className="btn btn-primary btn-rounded float-right" to="/add-blog"><i className="fas fa-plus" /> Add Blog</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title"><Link to="/blog-details">Do You Know the ABCs of Health Care?</Link></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                      <Link to="/blog-details" className="read-more"><i className="fas fa-long-arrow-alt-right" /> Read More</Link>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li><a href="#."><i className="far fa-calendar-alt" /> <span>December 6, 2017</span></a></li>
                          </ul>
                        </div>
                        <div className="post-right"><a href="#."><i className="far fa-heart" />21</a> <a href="#."><i className="far fa-eye" />8</a> <a href="#."><i className="far fa-comment" />17</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title"><Link to="/blog-details">Do You Know the ABCs of Health Care?</Link></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                      <Link to="/blog-details" className="read-more"><i className="fas fa-long-arrow-alt-right" /> Read More</Link>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li><a href="#."><i className="far fa-calendar-alt" /> <span>December 6, 2017</span></a></li>
                          </ul>
                        </div>
                        <div className="post-right"><a href="#."><i className="far fa-heart" />21</a> <a href="#."><i className="far fa-eye" />8</a> <a href="#."><i className="far fa-comment" />17</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title"><Link to="/blog-details">Do You Know the ABCs of Health Care?</Link></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                      <Link to="/blog-details" className="read-more"><i className="fas fa-long-arrow-alt-right" /> Read More</Link>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li><a href="#."><i className="far fa-calendar-alt" /> <span>December 6, 2017</span></a></li>
                          </ul>
                        </div>
                        <div className="post-right"><a href="#."><i className="far fa-heart" />21</a> <a href="#."><i className="far fa-eye" />8</a> <a href="#."><i className="far fa-comment" />17</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title"><Link to="/blog-details">Do You Know the ABCs of Health Care?</Link></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                      <Link to="/blog-details" className="read-more"><i className="fas fa-long-arrow-alt-right" /> Read More</Link>
                      <div className="blog-info clearfix">
                        <div className="post-left">
                          <ul>
                            <li><a href="#."><i className="far fa-calendar-alt" /> <span>December 6, 2017</span></a></li>
                          </ul>
                        </div>
                        <div className="post-right"><a href="#."><i className="far fa-heart" />21</a> <a href="#."><i className="far fa-eye" />8</a> <a href="#."><i className="far fa-comment" />17</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
};

export default Blog