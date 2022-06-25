import React, { Component } from "react";
import OpenChat from "../../sidebar/openchatheader";
import { placeholder_thumb,Blog_thumb_01 } from "../../imagepath"

class BlogEdit extends Component {
    render(){
       
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Blog</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="form-group">
                  <label>Blog Name</label>
                  <input className="form-control" type="text" defaultValue="Apple Macbook Air MQD42HN/A 13-inch Laptop" />
                </div>
                <div className="form-group">
                  <label>Blog Images</label>
                  <div>
                    <input className="form-control" type="file" />
                    <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif, png. Maximum 10 images only.</small>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={Blog_thumb_01} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={Blog_thumb_01} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={Blog_thumb_01} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={Blog_thumb_01} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={placeholder_thumb} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                      <div className="product-thumbnail">
                        <img src={placeholder_thumb} className="img-thumbnail img-fluid" alt="" />
                        <span className="product-remove" title="remove"><i className="fas fa-times" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Blog Category</label>
                      <select className="form-control select">
                        <option>Health Care</option>
                        <option>Child</option>
                        <option>Health Care</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Blog Sub Category</label>
                      <select className="form-control select">
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                        <option>Health Care</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Blog Description</label>
                  <textarea cols={30} rows={6} className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Tags <small>(separated with a comma)</small></label>
                  <input type="text" placeholder="Enter your tags" data-role="tagsinput" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="display-block">Blog Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="blog_active" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="blog_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" id="blog_inactive" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="blog_inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div> 
        );
    }
}

export default BlogEdit;