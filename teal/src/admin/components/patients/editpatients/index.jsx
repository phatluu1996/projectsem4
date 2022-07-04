import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { User_img } from "../../imagepath"
import { axiosAction , isFormValid, isValid, notify } from '../../../../actions';
import { GET, UPDATE } from "../../../../constants";
import { countries } from '../../../../address';
import { DatePicker, Select } from 'antd';

class EditPatient extends Component {
  id = this.props.match.params.id;
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
    this.fetchData = this.fetchData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectCountry = this.onSelectCountry.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
  }

  fetchData = () => {
    axiosAction("/patients/" + this.id, GET, res => {
      console.log(res);
      this.setState({
        data: res.data,
        loading: false,
      });
    }, (err) => notify('error', "Error"));
  }


  onSelectCountry = (value) => {
    const tmp = { ...this.state.data };
    if (!this.state.countries[value].states.find(state => tmp.address.province == state.name)) {
      tmp.address.province = "";
    }
    tmp.address.country = this.state.countries[value].name
    this.setState({
      crrValue: null,
      countrySelect: this.state.countries[value],
      data: tmp
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
    console.log(tmp);
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

    return (!this.state.loading && <div className="page-wrapper">
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
                    <input className={isValid(this.state.data.firstName)} name='firstName' type="text" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.firstName} />
                    <div className="invalid-feedback">First name cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input className={isValid(this.state.data.lastName)} name='lastName' type="text" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.lastName} />
                    <div className="invalid-feedback">Last name cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email <span className="text-danger">*</span></label>
                    <input className={isValid(this.state.data.email)} name='email' type="email" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.email} />
                    <div className="invalid-feedback"> Email cannot be empty</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <DatePicker name='dateOfBirth' className={isValid(this.state.data.firstName)} aria-required
                      showTime={true} format="YYYY-MM-DD" clearIcon={true}
                      defaultValue={this.state.data?.dateOfBirth}
                      allowClear={true} onChange={this.onChangeDate} onSelect={this.onChangeDate}></DatePicker>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group gender-select">
                    <label className="gen-label">Gender:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" name="gender" value={true} defaultValue={this.state.data?.gender} className="form-check-input"  onChange={(e) => this.onChange(e)} />Male
                      </label>
                    </div>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input type="radio" name="gender" value={false} defaultValue={!this.state.data?.gender} className="form-check-input" onChange={(e) => this.onChange(e)} />Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>CID Number</label>
                    <input className="form-control" name='cId' type="text" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.cId} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" name='line' onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.address?.line} />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Country</label>
                        <Select
                          defaultValue={this.state.data?.address?.country}
                          bordered={false}
                          style={{ width: '100%' }}
                          name='country'
                          className="form-control"
                          onChange={this.onSelectCountry}>
                          {this.state.countries?.map((country, index) => {
                            return (<Select.Option key={index}>{country.name}</Select.Option>)
                          })}
                        </Select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      {this.state.countrySelect?.states.length > 0 && <div className="form-group">
                        <label>State/Province</label>
                        <Select
                          defaultValue={this.state.data?.address?.province}
                          bordered={false}
                          value={this.state.data.address.province}
                          style={{ width: '100%' }}
                          name='state'
                          className="form-control"
                          onChange={this.onSelectState}>
                          {this.state.countrySelect?.states?.map((state, index) => {
                            return (<Select.Option key={index}>{state.name}</Select.Option>)
                          })}
                        </Select>
                      </div>}
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" name='city' className="form-control" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.address?.city} />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" className="form-control" name='postalCode' onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.address?.province} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone </label>
                    <input className="form-control" name='phoneNumber' type="text" onChange={(e) => this.onChange(e)} defaultValue={this.state.data?.address?.phoneNumber} />
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
                <button type='submit' className="btn btn-primary submit-btn">Save Patient</button>
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

export default EditPatient;