import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { User_img } from "../../imagepath";
import { axiosAction, notify } from '../../../../actions';
import { GET, GET_LOCATION } from "../../../../constants";
import { DatePicker, Select } from 'antd';
import moment from "moment";


class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComponentWillUnMount: true,
      show: null,
      loading: false,
      countries: [],
      stageChecked:true,
      data: {
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        phoneNumber: null,
        cId: null,
        address:null
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentDidMount() {
    this.isComponentWillUnMount = true;
    this.fetchLocation();
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
  }

  fetchLocation = () =>{
    axiosAction("",GET_LOCATION, res => {
      console.log(res.data.data);
      this.setState({
        countries:res.data.data,
        loading: false,
      })
    },(err) => notify('error', "Error"));
  }

  onClick = (e) => {
      const countries = [];
      this.setState({stageChecked:false});


  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data)
  }

  onChange = (e) => {
    const tmp = { ...this.state.data };
    const value = e.target.value;
    switch (e.target.name) {
      case 'firstName':
        tmp.firstName = value;
        break;

      case 'lastName':
        tmp.lastName = value;
        break;

      case 'gender':
        tmp.gender = value;
        break;

      case 'phoneNumber':
        tmp.phoneNumber = value;
        break;

      case 'cId':
        tmp.cId = value;
        break;
      case 'address':
        tmp.address = value;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeDate(e) {
    const tmp = { ...this.state.data };
    tmp.dateOfBirth = e;
    this.setState({ dateOfBirth: tmp });
  }

  render() {

    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Add Patient</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input className="form-control" name='firstName' type="text" onChange={(e) => this.onChange(e)} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input className="form-control" name='lastName' type="text" onChange={(e) => this.onChange(e)} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input className="form-control" name='email' type="email" onChange={(e) => this.onChange(e)} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <DatePicker name='date' className="form-control" aria-required
                        showTime={true} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={(e) => this.onChangeDate(e)} onSelect={(e) => this.onChangeDate()}></DatePicker>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:</label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" value={true} className="form-check-input" onChange={(e) => this.onChange(e)} />Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" value={false} className="form-check-input" onChange={(e) => this.onChange(e)} />Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>CID Number</label>
                      <input className="form-control" name='cId' type="text" onChange={(e) => this.onChange(e)} />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control " />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Country</label>
                          <select className="form-control select" onClick={(e) => this.onClick(e)}>
                            {this.state.countries?this.state.countries?.map((country,index) =>
                                  <option key={index}>{country.name}</option>
                            )
                            :""}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>State/Province</label>
                          <select disabled={this.state.stageChecked}  className="form-control select">
                            <option>California</option>
                            <option>Alaska</option>
                            <option>Alabama</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Distrist</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone </label>
                      <input className="form-control" name='phoneNumber' type="text" onChange={(e) => this.onChange(e)} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Avatar</label>
                      <div className="profile-upload">
                        <div className="upload-img">
                          <img alt="" src={User_img} />
                        </div>
                        <div className="upload-input">
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button type='submit' className="btn btn-primary submit-btn">Create Patient</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <OpenChat />
      </div>
    );
  }
};

export default AddPatient;