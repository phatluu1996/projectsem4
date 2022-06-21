import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Blog_05,Blog_06 } from '../imagepath';

class BlogFullWidth extends Component {

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
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Blog Post */}
                <article className="blog">
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
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_05} alt="" /></Link>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip
                      ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
                {/* Blog Post */}
                <article className="blog">
                  <h3 className="blog-title"><Link to="/blog-details">Do you know the ABCs of Health Care?</Link></h3>
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
                  <div className="blog-image"> 
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_06} alt="" /></Link>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip
                      ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
                {/* Blog Post */}
                <article className="blog">
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
                  <div className="blog-image">
                    <div className="video">
                      <iframe src="https://www.youtube.com/embed/nuVqJ_OriR8?rel=0&controls=0&showinfo=0" width={940} allowFullScreen />
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip
                      ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
                {/* Blog Post */}
                <article className="blog">
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
                  <div className="blog-image">
                    <div className="video">
                      <iframe src="https://player.vimeo.com/video/133170635" width={940} />
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip
                      ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                    <Link to="/blog-details" className="btn btn-primary read-more">Read More</Link>
                  </div>
                </article>
                <div className="blog-pagination">
                  <ul className="pagination">
                    <li className="disabled page-item">
                      <a href="#" className="page-link"><i className="fas fa-angle-double-left" aria-hidden="true" /></a>
                    </li>
                    <li className="active page-item">
                      <a href="#" className="page-link">1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">3</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">4</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">5</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link"><i className="fas fa-angle-double-right" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </div>
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

export default BlogFullWidth;
