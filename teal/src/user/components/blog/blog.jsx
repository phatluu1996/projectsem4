import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Blog_thumb_01,Blog_thumb_02,Blog_thumb_03,Blog_thumb_04,Blog_01,Blog_02 } from '../imagepath';

class Blog extends Component {

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
              <div className="col-md-8">
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
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_01} alt="" /></Link>
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
                    <Link to="/blog-details"><img className="img-fluid" src={Blog_02} alt="" /></Link>
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
              <aside className="col-md-4 sidebar-right">
                {/* Search*/}
                <div className="widget search-widget">
                  <form className="search-form">
                    <div className="input-group">
                      <input type="text" placeholder="Search..." className="form-control" />
                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-primary"><i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Latest Posts */}
                <div className="widget post-widget">
                  <h5>Latest Posts</h5>
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb"> 
                        <Link to="/blog-details">
                          <img className="img-fluid" src={Blog_thumb_01} alt="" />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">Our Definitive Guide to Reduce the Cold and Flu</Link>
                        </h4>
                        <p><i aria-hidden="true" className="fa fa-calendar" /> Dec 6, 2017</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb"> 
                        <Link to="/blog-details">
                          <img className="img-fluid" src={Blog_thumb_02} alt="" />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">Our Definitive Guide to Reduce the Cold and Flu</Link>
                        </h4>
                        <p><i aria-hidden="true" className="fa fa-calendar" /> Dec 6, 2017</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb"> 
                        <Link to="/blog-details">
                          <img className="img-fluid" src={Blog_thumb_03} alt="" />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">Our Definitive Guide to Reduce the Cold and Flu</Link>
                        </h4>
                        <p><i aria-hidden="true" className="fa fa-calendar" /> Dec 6, 2017</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb"> 
                        <Link to="/blog-details">
                          <img className="img-fluid" src={Blog_thumb_04} alt="" />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">Our Definitive Guide to Reduce the Cold and Flu</Link>
                        </h4>
                        <p><i aria-hidden="true" className="fa fa-calendar" /> Dec 6, 2017</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Categories */}
                <div className="widget category-widget">
                  <h5>Blog Categories</h5>
                  <ul className="categories">
                    <li>
                      <a href="#">Cancer Diseases</a>
                    </li>
                    <li>
                      <a href="#">Children's Health Problems</a>
                    </li>
                    <li>
                      <a href="#">Kid's Health Questions &amp; Answers</a>
                    </li>
                    <li>
                      <a href="#">Cancer Diseases</a>
                    </li>
                    <li>
                      <a href="#">Children's Health Problems</a>
                    </li>
                    <li>
                      <a href="#">Kid's Health Questions &amp; Answers</a>
                    </li>
                  </ul>
                </div>
                {/* Tags */}
                <div className="widget tags-widget">
                  <h5>Tags</h5>
                  <ul className="tags">
                    <li>
                      <a href="#" className="tag">Children</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Diseases</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Health</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Kids</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Family</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Tips</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Injection</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Treatment</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Rooms</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Health Care</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Clinic</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Consult</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Doctors</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Neurology</a>
                    </li>
                    <li>
                      <a href="#" className="tag">Dentists</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* Content /*/}
        </>
      );
  }
}

export default Blog;
