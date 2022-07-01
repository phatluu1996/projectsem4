import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { User_img } from "../../imagepath";
import { axiosAction , isFormValid, isValid, notify } from '../../../../actions';
import { GET, ADD } from "../../../../constants";
import { DatePicker, Select } from 'antd';
import { countries } from '../../../../address/index';


class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      crrValue: "",
      countries: countries,
      countrySelect: null,
      data: {
        firstName: null,
        lastName: null,
        gender: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null,
        cId: null,
        address: {
          postalCode: null,
          province: null,
          line: null,
          country: null,
          city: null
        }
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectCountry = this.onSelectCountry.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }


  onSelectCountry = (value) => {
    const tmp = { ...this.state.data };
    if(!this.state.countries[value].states.find(state => tmp.address.province == state.name)){
        tmp.address.province = "";
    }
    tmp.address.country = this.state.countries[value].name
    this.setState({
      crrValue: null,
      countrySelect: this.state.countries[value],
      data:tmp
    });
  }

  onSelectState = (value) => {
    const tmp = { ...this.state.data };
    tmp.address.province = this.state.countrySelect.states[value].name
    this.setState({
      data: tmp
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    if (!isFormValid(e)) return;
    axiosAction("/patients",ADD, res => {
      notify('success', '','Success')
      this.props.history.push("/admin/patients");
    },(err) => notify('error', "Error"),tmp);
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
      case 'email':
        tmp.email = value;
        break;
      case 'postalCode':
        tmp.address.postalCode = value;
        break;
      case 'cId':
        tmp.cId = value;
        break;
      case 'city':
        tmp.address.city = value;
        break;
      case 'line':
        tmp.address.line = value;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeDate(e) {
    const tmp = { ...this.state.data };
    tmp.dateOfBirth = e;
    this.setState({
      data: tmp
    });
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
                      <input className={isValid(this.state.data.firstName)} name='firstName' type="text" onChange={(e) => this.onChange(e)} />
                      <div className="invalid-feedback">First name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.lastName)} name='lastName' type="text" onChange={(e) => this.onChange(e)} />
                      <div className="invalid-feedback">Last name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.email)} name='email' type="email" onChange={(e) => this.onChange(e)} />
                      <div className="invalid-feedback">Email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth<span className="text-danger">*</span></label>
                      <DatePicker name='dateOfBirth' className={isValid(this.state.data.dateOfBirth)} aria-required
                        showTime={true} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={this.onChangeDate} onSelect={this.onChangeDate}></DatePicker>
                        <div className="invalid-feedback">Date of birth cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender</label>
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
                      <label>CID Number<span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.cId)} name='cId' type="text" onChange={(e) => this.onChange(e)} />
                      <div className="invalid-feedback">CID cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address<span className="text-danger">*</span></label>
                          <input type="text" className={isValid(this.state.data.address.line)} name='line' onChange={(e) => this.onChange(e)} />
                          <div className="invalid-feedback">Address cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Country<span className="text-danger">*</span></label>
                          <Select
                            defaultValue={""}
                            bordered={false}
                            style={{ width: '100%' }}
                            name='country'
                            className={isValid(this.state.data.address.country != null)}
                            onChange={this.onSelectCountry}>
                            {this.state.countries?.map((country, index) => {
                              return (<Select.Option key={index}>{country.name}</Select.Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Please select country cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                      {this.state.countrySelect?.states.length > 0 &&<div className="form-group">
                          <label>State/Province<span className="text-danger">*</span></label>
                           <Select
                            defaultValue={""}                          
                            bordered={false}
                            value={this.state.data.address.province}
                            style={{ width: '100%' }}
                            name='state'
                            className={isValid(this.state.data.address.province != null)}
                            onChange={this.onSelectState}>
                            {this.state.countrySelect?.states?.map((state, index) => {
                              return (<Select.Option key={index}>{state.name}</Select.Option>)
                            })}
                          </Select>
                        </div>}
                        <div className="invalid-feedback">Please select state cannot be empty</div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>City<span className="text-danger">*</span></label>
                          <input type="text" name='city' className={isValid(this.state.data.address.city)}  onChange={(e) => this.onChange(e)} />
                          <div className="invalid-feedback">Please select city cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="form-group">
                          <label>Postal Code<span className="text-danger">*</span></label>
                          <input type="text" className={isValid(this.state.data.address.postalCode)}  name='postalCode' onChange={(e) => this.onChange(e)} />
                          <div className="invalid-feedback">Postal code cannot be empty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.phoneNumber)}  name='phoneNumber' type="text" onChange={(e) => this.onChange(e)} />
                      <div className="invalid-feedback">Phone number code cannot be empty</div>
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