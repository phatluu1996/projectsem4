import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { countries } from '../../../../address';
import { axiosAction, axiosActions, isFormValid, isValid, notify } from '../../../../actions';
import { ADD, GET } from '../../../../constants';
import { DatePicker, Select, Timeline, Modal, Tabs, Button, Table } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;


class AddDoctor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {
        "shortBiography": '',
        "department": null,
        "user": null,
        "employee": {
          "cId": null,
          "employeeRole": "DOCTOR",
          "joiningDate": null,
          "firstName": null,
          "lastName": null,
          "gender": null,
          "dateOfBirth": null,
          "email": null,
          "phoneNumber": null,
          "status": true,
          "doctor": null,
          "remainingLeave": 0,
          "leaves": null,
          "address": {
            "line": null,
            "postalCode": null,
            "province": null,
            "city": null,
            "country": null,
            "retired": false
          },
          "retired": false,
        },
        "doctorSchedules": [],
        "appointments": [],
        "educationDetails": [{
          "instiution": null,
          "subject": null,
          "start": null,
          "end": null,
          "degree": null,
          "grade": null,
          "retired": false,
          "doctor": null,
          "id": null
        }],
        "experienceDetails": [{
          "officeName": null,
          "country": null,
          "start": null,
          "end": null,
          "jopPosition": null,
          "doctor": null,
          "retired": false,
          "id": null
        }],
        "retired": false
      },
      countries: countries,
      departments: []
    }

    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const val = e.target.value;
    const tmp = { ...this.state.data };
    switch (e.target.name) {
      case "cid":
        tmp.employee.cId = val;
        break;

      case "firstName":
        tmp.employee.firstName = val;
        break;

      case "lastName":
        tmp.employee.lastName = val;
        break;

      case "email":
        tmp.employee.email = val;
        break;

      case "phone":
        tmp.employee.phoneNumber = val;
        break;

      case "gender":
        tmp.employee.gender = val;
        break;

      case "line":
        tmp.employee.address.line = val;
        break;

      case "city":
        tmp.employee.address.city = val;
        break;
      case "postal":
        tmp.employee.address.postalCode = val;
        break;

      case "biography":
        tmp.shortBiography = val;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeDepartment(val) {
    const tmp = { ...this.state.data };
    tmp.department = this.state.departments.find(dep => dep.id == val);
    this.setState({ data: tmp });
  }

  onChangeDateOfBirth(val) {
    const tmp = { ...this.state.data };
    tmp.employee.dateOfBirth = val;
    this.setState({ data: tmp });
  }

  onChangeCountry(val) {
    const tmp = { ...this.state.data };
    tmp.employee.address.country = val;
    if (tmp.employee.address.province && !countries.filter(ctr => ctr.name == val)[0].states.find(st => st.name == tmp.employee.address.province)) {
      tmp.employee.address.province = '';
    }

    this.setState({ data: tmp });
  }

  onChangeProvince(val) {
    const tmp = { ...this.state.data };
    tmp.employee.address.province = val;
    this.setState({ data: tmp });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!isFormValid(e)) return;
    axiosAction("/doctors", ADD, (res) => {
      notify('success', '', 'Success')
      this.props.history.push("/admin/doctors");
    }, (err) => notify('error', '', 'Error'), this.state.data);
  }

  componentDidMount() {
    const departmentsParam = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          loading: false,
          departments: res.data
        });
      },
      data: {}
    }

    axiosActions([departmentsParam]);
  }

  render() {
    const educationsCols = [{
      title : ""
    },{

    },{

    }];


    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Add Doctor</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input name="firstName" className={isValid(this.state.data.employee.firstName)} type="text" onChange={this.onChange} />
                      <div className="invalid-feedback">First name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name<span className="text-danger">*</span></label>
                      <input name="lastName" className={isValid(this.state.data.employee.lastName)} type="text" onChange={this.onChange} />
                      <div className="invalid-feedback">Last name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department<span className="text-danger">*</span></label>
                      <Select showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='department' className={isValid(this.state.data.department != null)}
                        onChange={this.onChangeDepartment}>
                        {this.state.departments?.map(department => {
                          return (<Option key={department.id} value={department.id}>{department.name}</Option>)
                        })}
                      </Select>
                      <div className="invalid-feedback">Department cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Citizen Identification <span className="text-danger">*</span></label>
                      <input name="cid" className={isValid(this.state.data.employee.cId)} type="number" onChange={this.onChange} />
                      <div className="invalid-feedback">Citizen identification cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input name="email" className={isValid(this.state.data.employee.email)} type="email" onChange={this.onChange} />
                      <div className="invalid-feedback">Email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone </label>
                      <input name="phone" className={isValid(this.state.data.employee.phoneNumber)} type="number" onChange={this.onChange} />
                      <div className="invalid-feedback">Phone cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth<span className="text-danger">*</span></label>
                      <DatePicker name='date' className={isValid(this.state.data.employee.dateOfBirth)} disabledTime={true}
                        showTime={false} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={this.onChangeDateOfBirth} onSelect={this.onChangeDateOfBirth} inputReadOnly={true}></DatePicker>
                      <div className="invalid-feedback">Date of birth cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:<span className="text-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.employee.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Male" onChange={this.onChange} />Male
                          <div className="invalid-feedback">Gender must be selected </div>
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.employee.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Female" onChange={this.onChange} />Female
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address<span className="text-danger">*</span></label>
                          <input name="line" type="text" className={isValid(this.state.data.employee.address?.line)} onChange={this.onChange} />
                        </div>
                        <div className="invalid-feedback">Address line cannot be empty</div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Country<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='country'
                            className={isValid(this.state.data.employee.address?.country)} onChange={this.onChangeCountry}>
                            {this.state.countries?.map((ctr, idx) => {
                              return (<Option key={idx} value={ctr.name}>{ctr.name}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">Country cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {this.state.countries?.filter(ctr => ctr.name === this.state.data.employee.address?.country)[0]?.states.length > 0 && <div className="form-group">
                          <label>State/Province<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='province'
                            className={isValid(this.state.data.employee.address?.province)} onChange={this.onChangeProvince} value={this.state.data.employee.address.province}>
                            {this.state.countries?.filter(ctr => ctr.name === this.state.data.employee.address?.country)[0]?.states?.map((st, idx) => {
                              return (<Option key={idx} value={st.name}>{st.name}</Option>)
                            })}
                          </Select>
                          <div className="invalid-feedback">State/Province cannot be empty</div>
                        </div>}
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>City<span className="text-danger">*</span></label>
                          <input name="city" type="text" className={isValid(this.state.data.employee.address?.city)} onChange={this.onChange} />
                          <div className="invalid-feedback">City cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Postal Code<span className="text-danger">*</span></label>
                          <input name="postal" type="number" className={isValid(this.state.data.employee.address?.postalCode)} onChange={this.onChange} />
                          <div className="invalid-feedback">Postal Code cannot be empty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Short Biography</label>
                      <textarea name="biography" className="form-control" rows={3} cols={30} onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="card-container">
                      <Tabs type="card">
                        <TabPane tab="Educations" key="1">
                          <Button>Add</Button>
                          <Table

                          ></Table>
                        </TabPane>
                        <TabPane tab="Experiences" key="2">
                          <Button>Add</Button>
                        </TabPane>
                      </Tabs>
                    </div>
                  </div>

                  {/* <div className="col-sm-6">
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
                      </div> */}

                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Create Doctor</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/doctors")}>Back</button>
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

export default AddDoctor;