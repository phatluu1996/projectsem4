import React, { Component } from 'react';
import { Blog_01,Blog_02,Blog_03,Blog_04 } from "../../imagepath"
import OpenChat from "../../sidebar/openchatheader";
import $ from "jquery"

class Gallery extends Component{
    componentDidMount(){
        var someElement= document.getElementById("root");
        someElement.className += "main-wrapper account-wrapper";
        var someElement1= document.getElementById("my_div_");
        someElement1.className += " account-wrapper";
        // Lightgallery

        if ($('#pro_popup').length > 0) {
          $('#pro_popup').lightGallery({
            thumbnail: true,
            selector: 'a'
          });
        }
        
        if ($('#lightgallery').length > 0) {
          $('#lightgallery').lightGallery({
            thumbnail: true,
            selector: 'a'
          });
        }
		
    }
    render(){
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">Gallery</h4>
            </div>
          </div>
          <div id="lightgallery" className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_01}>
                <img className="img-thumbnail" src={Blog_01} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_02}>
                <img className="img-thumbnail" src={Blog_02} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_03}>
                <img className="img-thumbnail" src={Blog_03} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_04}>
                <img className="img-thumbnail" src={Blog_04} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_01}>
                <img className="img-thumbnail" src={Blog_01} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_02}>
                <img className="img-thumbnail" src={Blog_02} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_03}>
                <img className="img-thumbnail" src={Blog_03} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_04}>
                <img className="img-thumbnail" src={Blog_04} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_01}>
                <img className="img-thumbnail" src={Blog_01} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_02}>
                <img className="img-thumbnail" src={Blog_02} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_03}>
                <img className="img-thumbnail" src={Blog_03} alt="" />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href={Blog_04}>
                <img className="img-thumbnail" src={Blog_04} alt="" />
              </a>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div>
    
        );
    }
}
export default Gallery