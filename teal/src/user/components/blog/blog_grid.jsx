import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Blog_01,Blog_02,Blog_03,Blog_04 } from '../imagepath';

class BlogGrid extends Component {

  render() {
   
    return (
          <>
           {/* Content */}
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-title"> 
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content blog-grid-cont">
          <div className="container">
            <div className="row blog-grid-row">
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p>
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_02} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_03} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_04} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* Blog Post */}
                <article className="blog grid-blog">
                  <div className="blog-image">
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_02} alt="" /></Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">Do you know the ABCs of Health Care?</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-calendar-alt" aria-hidden="true" /> <span>Dec 6, 2017</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="fas fa-user" aria-hidden="true" /> <span>By Andrew Dawis</span></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-comment" aria-hidden="true" /> <span>1</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco sit laboris.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <a className="btn btn-primary load-more" href="#">Load More</a>
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

export default BlogGrid;
