import React, { Component } from "react";
import { Link } from "react-router-dom";
import { axiosAction } from "../../../actions";
import "../../../constants";
import { GET } from "../../../constants";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {
  Icon_04, Icon_05, Icon_06, Icon_07, Icon_08, Icon_09, Doctor_thumb_01, Doctor_thumb_02, Doctor_thumb_03,
  Doctor_thumb_04, Doctor_thumb_05, Doctor_thumb_06, Doctor_thumb_07, Doctor_thumb_08, Doctor_thumb_09
} from "../imagepath"




class Departments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      departments: [],
      selectdId: 0
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axiosAction("/departments", GET, res => {
      this.setState({
        departments: res.data,
        loading: false,
      });
    }, () => { });
  }

  componentDidMount() {
    this.fetchData();
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
    const { departments } = this.state.departments;
    return (!this.state.loading &&
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
                {this.state.departments?.map((department, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <div className="dept-box">
                        <div className="dept-img">
                          <a><img width={67} height={80} alt="Dentists" src={Icon_04} /></a>
                        </div>
                        <h4><a>{department.name}</a></h4>
                        <p>{department.description}</p>
                      </div>
                    </div>
                  )
                })}
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
                    <p>Doctors have been trained at the best university in Vietnam and then continue to train at leading universities in the World from many developed countries such as the US (Harvard University), Germany, Australia, Japan....
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
                    <Link to="/user/doctordetails">
                      <img src={Doctor_thumb_01} alt="Dr. Albert Sandoval" className="rounded-circle" width={150} height={150} />
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
