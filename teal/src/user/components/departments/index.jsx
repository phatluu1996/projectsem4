import React, { Component } from "react";
import { Link } from "react-router-dom";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Icon_04,Icon_05,Icon_06,Icon_07,Icon_08,Icon_09,Doctor_thumb_01,Doctor_thumb_02,Doctor_thumb_03,
  Doctor_thumb_04,Doctor_thumb_05,Doctor_thumb_06,Doctor_thumb_07,Doctor_thumb_08,Doctor_thumb_09 } from "../imagepath"


  

class Departments extends Component {
  constructor(){
   
  }
  
  

  render() {
    var responsive = {
      0: {
      items: 1
      },
      768: {
      items: 3
      },
      992: {
      items: 6
      }
    }
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
                  <span>Departments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="content departments">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h3 className="header-title">Dept Summary Details</h3>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="row department-row">
              {this.departments?this.departments.map((department) => ( 
              <div key={department.id} className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img"> 
                     <Link to="/department-details"><img width={67} height={80} alt="Dentists" src={Icon_04} /></Link>
                  </div>
                  <h4><Link to="/department-details">{department.name}</Link></h4>
                  <p>{department.description}</p>
                </div>
              </div>
              )):""}
              {/* <div className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img"> 
                    <Link to="/department-details"><img width={63} height={80} alt="Neurology" src={Icon_05} /></Link>
                  </div>
                  <h4><Link to="/department-details">Neurology</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img"> 
                    <Link to="/department-details"><img width={92} height={80} alt="Opthalmology" src={Icon_06} /></Link>
                  </div>
                  <h4><Link to="/department-details">Opthalmology</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </p>
                </div>
              </div> */}
              {/* <div className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img"> 
                    <Link to="/department-details"><img width={40} height={80} alt="Orthopedics" src={Icon_07} /></Link>
                  </div>
                  <h4>
                    <Link to="/department-details">Orthopedics</Link>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img">
                    <Link to="/department-details"><img width={76} height={80} alt="Cancer Department" src={Icon_08} /></Link>
                  </div>
                  <h4><Link to="/department-details">Cancer Department</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dept-box">
                  <div className="dept-img"> 
                    <Link to="/department-details"><img width={47} height={80} alt="ENT Department" src={Icon_09} /></Link>
                  </div>
                  <h4><Link to="/department-details">ENT Department</Link></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-12">
                <div className="see-all m-t-0"> 
                  <button type="button" className="btn btn-primary see-all-btn">Load More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section meet-doctors">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header text-center">
                  <h3 className="header-title">Meet our Doctors</h3>
                  <div className="line" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus
                    nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.
                    Duis dictum eget dolor vel blandit.
                  </p>
                </div>
              </div>
            </div>
            {/* <div id="our_doctor" className="owl-carousel text-center"> */}
            <OwlCarousel loop nav
                        margin={10} 
                        id="our_doctor"
                        className="text-center"
                        items={6}
                        responsive={responsive}
                        >
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_01}alt="Dr. Albert Sandoval" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Albert Sandoval</div>
                    <div className="doctors-position">Neurologist</div>
                  </Link>
                </div>
              </div>
              <div className="item"> 
                <Link to="/doctor-details">
                  <div className="doctor text-center">
                    <img src={Doctor_thumb_02} alt="Dr. Linda Barrett" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Linda Barrett</div>
                    <div className="doctors-position">Dentist</div>
                  </div>
                </Link>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_03} alt="Dr. Cristina Groves" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Cristina Groves</div>
                    <div className="doctors-position">Gynecologist</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_04} alt="Dr. Henry Daniels" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Henry Daniels</div>
                    <div className="doctors-position">Cardiologist</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_05} alt="Dr. Diana Bailey" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Diana Bailey</div>
                    <div className="doctors-position">General Surgery</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_06} alt="Dr. Justin Parker" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Justin Parker</div>
                    <div className="doctors-position">Physical Therapist</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_07} alt="Dr. Marie Wells" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Marie Wells</div>
                    <div className="doctors-position">Psychiatrist</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center">
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_08} alt="Dr. Pamela Curtis" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Pamela Curtis</div>
                    <div className="doctors-position">Pediatrics</div>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="doctor text-center"> 
                  <Link to="/doctor-details">
                    <img src={Doctor_thumb_09} alt="Dr. Ronald Jacobs" className="rounded-circle" width={150} height={150} />
                    <div className="doctors-name">Dr. Ronald Jacobs</div>
                    <div className="doctors-position">Oncologist</div>
                  </Link>
                </div>
              </div>
            </OwlCarousel>
            <div className="row">
              <div className="col-12">
                <div className="see-all"> 
                  <Link to="/doctors" className="btn btn-primary see-all-btn">See all Doctors</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Content /*/}
        </>
      
    );
  }
}

export default Departments;
