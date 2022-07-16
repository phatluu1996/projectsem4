import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader"
import { countries } from '../../../../address';
import { axiosAction, axiosActions, encodeBase64, isFormValid, isValid, notify } from '../../../../actions';
import { ADD, GET, UPDATE } from '../../../../constants';
import { DatePicker, Select, Timeline, Modal, Tabs, Button, Table, Input, Popconfirm } from 'antd';
import { toMoment } from '../../../../utils';
const { Option } = Select;
const { TabPane } = Tabs;


class EditDoctor extends Component {
  id = this.props.match.params.id;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {
        "shortBiography": '',
        "department": null,
        "employee": {
          "cId": null,
          "user": {
            "username": null,
            "password": null,
            "retired": false
          },
          "employeeRole": "DOCTOR",
          "joiningDate": null,
          "firstName": null,
          "lastName": null,
          "gender": null,
          "dateOfBirth": null,
          "email": null,
          "image": null,
          "imageByteArr": null,
          "phoneNumber": null,
          "status": true,
          "remainingLeave": 0,
          "leaves": null,
          "address": {
            "line": null,
            "postalCode": null,
            "province": null,
            "district": null,
            "country": null,
            "retired": false
          },
          "retired": false,
        },
        "doctorSchedules": [],
        "appointments": [],
        "educationDetails": [
        ],
        "experienceDetails": [
        ],
        "retired": false
      },
      countries: countries,
      departments: [],
    }

    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addNewEduDetails = this.addNewEduDetails.bind(this);
    this.addNewExpDetails = this.addNewExpDetails.bind(this);
    this.onDeleteEdu = this.onDeleteEdu.bind(this);
    this.onDeleteExp = this.onDeleteExp.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage(e) {
    const tmp = { ...this.state.data };
    var file = e.target.files[0];
    encodeBase64(file, (res) => {
      tmp.employee.image = res;
      tmp.employee.imageByteArr = res;
      this.setState({
        data: tmp
      })
    })
  }

  onChangeEducation(record, arg, fieldName) {
    const tmp = { ...this.state.data };
    const item = tmp.educationDetails.find(e => e.key == record.key);
    switch (fieldName) {
      case "instiution":
        if (item) {
          item.instiution = arg.target.value;
        }
        break;

      case "subject":
        if (item) {
          item.subject = arg.target.value;
        }
        break;

      case "start":
        if (item) {
          item.start = arg;
        }
        break;

      case "end":
        if (item) {
          item.end = arg;
        }
        break;

      case "degree":
        if (item) {
          item.degree = arg.target.value;
        }
        break;

      case "grade":
        if (item) {
          item.grade = arg.target.value;
        }
        break;

      default:
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeExperience(record, arg, fieldName) {
    const tmp = { ...this.state.data };
    const item = tmp.experienceDetails.find(e => e.key == record.key);
    switch (fieldName) {
      case "officeName":
        item.officeName = arg.target.value;
        break;

      case "country":
        if (item) {
          item.country = arg;
        }
        break;

      case "start":
        if (item) {
          item.start = arg;
        }
        break;

      case "end":
        if (item) {
          item.end = arg;
        }
        break;

      case "jobPosition":
        item.jobPosition = arg.target.value;
        break;

      default:
        break;
    }
    this.setState({ data: tmp });
  }


  onDeleteEdu(key) {
    const tmpData = { ...this.state.data };
    const tmp = tmpData.educationDetails.find((item) => key == item.key);
    if (tmp.id) {
      tmp.retired = true;
    } else {
      tmp = tmpData.educationDetails.filter((item) => key != item.key);
      tmpData.educationDetails = tmp;
    }
    this.setState({ data: tmpData });
  }

  onDeleteExp(key) {
    const tmpData = { ...this.state.data };
    const tmp = tmpData.experienceDetails.find((item) => key == item.key);
    if (tmp.id) {
      tmp.retired = true;
    } else {
      tmp = tmpData.experienceDetails.filter((item) => key != item.key);
      tmpData.experienceDetails = tmp;
    }
    this.setState({ data: tmpData });
  }

  addNewEduDetails() {
    const edu = {
      "key": 0,
      "instiution": "",
      "subject": "",
      "start": "",
      "end": "",
      "degree": "",
      "grade": "",
      "retired": false,
    }
    const tmp = { ...this.state.data };
    const educationDetails = [...this.state.data.educationDetails];
    if (educationDetails.length > 0) {
      edu.key = educationDetails.length + 1;
    }
    educationDetails.push(edu);
    tmp.educationDetails = educationDetails;
    this.setState({
      data: tmp
    });
  }

  addNewExpDetails() {
    const exp = {
      "key": 0,
      "officeName": "",
      "country": "",
      "start": "",
      "end": "",
      "jobPosition": "",
      "retired": false,
    }
    const tmp = { ...this.state.data };
    const experienceDetails = [...this.state.data.experienceDetails];
    if (experienceDetails.length > 0) {
      exp.key = experienceDetails.length + 1;
    }
    experienceDetails.push(exp);
    tmp.experienceDetails = experienceDetails;
    this.setState({
      data: tmp
    });
  }

  onChange(e) {
    const val = e.target.value;
    const tmp = { ...this.state.data };
    switch (e.target.name) {
      case "cid":
        tmp.employee.cId = val;
        break;

      case "username":
        tmp.employee.user.username = val;
        break;

      case "password":
        tmp.employee.user.password = val;
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

      case "district":
        tmp.employee.address.district = val;
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
    axiosAction(`/doctors/${this.id}`, UPDATE, (res) => {
      notify('success', '', 'Success')
      if (res.data.employee.user.username == localStorage.getItem("userName")) {
        localStorage.setItem('userAvatar', res.data.employee.imageByteArr);
      }

      this.props.history.goBack();
    }, (err) => notify('error', '', 'Error'), this.state.data);
  }

  componentDidMount() {
    const departmentsParam = {
      url: "/departments",
      method: GET,
      callback: (res) => {
        this.setState({
          departments: res.data
        });
      },
      data: {}
    }

    const doctorParam = {
      url: `/doctors/${this.id}`,
      method: GET,
      callback: (res) => {
        res.data.educationDetails.map((m, idx) => m.key = idx);
        res.data.experienceDetails.map((m, idx) => m.key = idx);
        this.setState({
          loading: false,
          data: res.data
        });
      },
      data: {}
    }

    axiosActions([doctorParam, departmentsParam]);
  }

  render() {
    const eduColumns = [
      {
        title: "Institution",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.instiution)} name="instiution" value={record.instiution} onChange={(e) => this.onChangeEducation(record, e, "instiution")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Subject",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.subject)} name="subject" value={record.subject} onChange={(e) => this.onChangeEducation(record, e, "subject")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Start",
        render: (text, record) => (
          <div>
            <DatePicker className={isValid(record.start)} name='start' disabledTime={true}
              showTime={false} format="YYYY-MM-DD" clearIcon={true}
              allowClear={true} value={toMoment(record.start)} onChange={(value, e) => this.onChangeEducation(record, value, "start")}></DatePicker>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "End",
        render: (text, record) => (
          <div>
            <DatePicker className={isValid(record.end)} name='end' disabledTime={true}
              showTime={false} format="YYYY-MM-DD" clearIcon={true}
              allowClear={true} value={toMoment(record.end)} onSelect={(value) => this.onChangeEducation(record, value, "end")}></DatePicker>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Degree",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.degree)} name="degree" value={record.degree} onChange={(e) => this.onChangeEducation(record, e, "degree")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Grade",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.grade)} name="grade" value={record.grade} onChange={(e) => this.onChangeEducation(record, e, "grade")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Action",
        render: (text, record) => (
          <Popconfirm className='btn btn-info' title="Sure to delete?" onConfirm={() => this.onDeleteEdu(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ),
      }
    ];

    const expColumns = [
      {
        title: "Office",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.officeName)} name="officeName" value={record.officeName} onChange={(e) => this.onChangeExperience(record, e, "officeName")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Country",
        render: (text, record) => (
          <div>
            <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='country'
              className={isValid(record.country)} onChange={(e) => this.onChangeExperience(record, e, "country")} value={record.country}>
              {this.state.countries?.map((ctr, idx) => {
                return (<Option key={idx} value={ctr.name}>{ctr.name}</Option>)
              })}
            </Select>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Start",
        render: (text, record) => (
          <div>
            <DatePicker className={isValid(record.start)} name='start' disabledTime={true}
              showTime={false} format="YYYY-MM-DD" clearIcon={true}
              allowClear={true} value={toMoment(record.start)} onChange={(value, e) => this.onChangeExperience(record, value, "start")}></DatePicker>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "End",
        render: (text, record) => (
          <div>
            <DatePicker className={isValid(record.end)} name='end' disabledTime={true}
              showTime={false} format="YYYY-MM-DD" clearIcon={true}
              allowClear={true} value={toMoment(record.end)} onSelect={(value) => this.onChangeExperience(record, value, "end")}></DatePicker>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Job Position",
        render: (text, record) => (
          <div>
            <Input className={isValid(record.jobPosition)} name="jobPosition" value={record.jobPosition} onChange={(e) => this.onChangeExperience(record, e, "jobPosition")}></Input>
            <div className="invalid-feedback">Cannot be left empty</div>
          </div>
        ),
      },
      {
        title: "Action",
        render: (text, record) => (
          <Popconfirm className='btn btn-info' title="Sure to delete?" onConfirm={() => this.onDeleteExp(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ),
      }
    ];

    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <h4 className="page-title">Edit Doctor</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Avatar</label>
                      <div className="profile-upload">
                        <div className="upload-img">
                          <img alt="" src={this.state.data?.employee?.imageByteArr ? this.state.data?.employee.imageByteArr : ""} />
                        </div>
                        <div className="upload-input">
                          <input
                            ref="file"
                            type="file"
                            onChange={this.onSelectImage}
                            className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input name="firstName" className={isValid(this.state.data.employee.firstName)} type="text" onChange={this.onChange} value={this.state.data.employee.firstName} />
                      <div className="invalid-feedback">First name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name<span className="text-danger">*</span></label>
                      <input name="lastName" className={isValid(this.state.data.employee.lastName)} type="text" onChange={this.onChange} value={this.state.data.employee.lastName} />
                      <div className="invalid-feedback">Last name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department<span className="text-danger">*</span></label>
                      <Select showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='department' className={isValid(this.state.data.department != null)}
                        onChange={this.onChangeDepartment} value={this.state.data.department?.id}>
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
                      <input name="cid" className={isValid(this.state.data.employee.cId)} type="number" onChange={this.onChange} value={this.state.data.employee.cId} />
                      <div className="invalid-feedback">Citizen identification cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input name="email" className={isValid(this.state.data.employee.email)} type="email" onChange={this.onChange} value={this.state.data.employee.email} />
                      <div className="invalid-feedback">Email cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone </label>
                      <input name="phone" className={isValid(this.state.data.employee.phoneNumber)} type="tel" onChange={this.onChange} value={this.state.data.employee.phoneNumber} />
                      <div className="invalid-feedback">Phone cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Date of Birth<span className="text-danger">*</span></label>
                      <DatePicker name='date' className={isValid(this.state.data.employee.dateOfBirth)} disabledTime={true}
                        showTime={false} format="YYYY-MM-DD" clearIcon={true}
                        allowClear={true} onChange={this.onChangeDateOfBirth} onSelect={this.onChangeDateOfBirth} value={toMoment(this.state.data.employee.dateOfBirth)}></DatePicker>
                      <div className="invalid-feedback">Date of birth cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:<span className="text-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.employee.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Male" onChange={this.onChange} defaultChecked={this.state.data.employee.gender == "Male"} />Male
                          <div className="invalid-feedback">Gender must be selected </div>
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input type="radio" name="gender" className={this.state.data.employee.gender ? "form-check-input is-valid" : "form-check-input is-invalid"}
                            value="Female" onChange={this.onChange} defaultChecked={this.state.data.employee.gender == "Female"} />Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Username <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data.employee.user.username)} name="username" type="text" value={this.state.data.employee.user.username} onChange={this.onChange} />
                      <div className="invalid-feedback">Username cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password<span className="text"></span></label>
                      <input className={isValid(this.state.data.employee.user.password)} name="password" type="password" value={this.state.data.employee.user.password} onChange={this.onChange} />
                      <div className="invalid-feedback">Password cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Address<span className="text-danger">*</span></label>
                          <input name="line" type="text" className={isValid(this.state.data.employee.address?.line)} onChange={this.onChange} value={this.state.data.employee.address?.line} />
                        </div>
                        <div className="invalid-feedback">Address line cannot be empty</div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Country<span className="text-danger">*</span></label>
                          <Select aria-autocomplete='none' showSearch={true} bordered={false} size={"small"} style={{ width: '100%' }} name='country'
                            className={isValid(this.state.data.employee.address?.country)} onChange={this.onChangeCountry} value={this.state.data.employee.address?.country}>
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
                          <label>District<span className="text-danger">*</span></label>
                          <input name="district" type="text" className={isValid(this.state.data.employee.address?.district)} onChange={this.onChange} value={this.state.data.employee.address?.district} />
                          <div className="invalid-feedback">District cannot be empty</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Postal Code<span className="text-danger">*</span></label>
                          <input name="postal" type="number" className={isValid(this.state.data.employee.address?.postalCode)} onChange={this.onChange} value={this.state.data.employee.address?.postalCode} />
                          <div className="invalid-feedback">Postal Code cannot be empty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Short Biography</label>
                      <textarea name="biography" className="form-control" rows={3} cols={30} onChange={this.onChange} value={this.state.data.shortBiography} />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="card-container">
                      <Tabs type="card">
                        <TabPane tab="Educations" key="1">
                          <Button className='mb-3' onClick={this.addNewEduDetails}>Add</Button>
                          <Table
                            dataSource={this.state.data.educationDetails?.filter(m => !m.retired)}
                            columns={eduColumns}
                            pagination={{
                              pageSize: 5,
                            }}
                          ></Table>
                        </TabPane>
                        <TabPane tab="Experiences" key="2">
                          <Button className='mb-3' onClick={this.addNewExpDetails}>Add</Button>
                          <Table
                            dataSource={this.state.data.experienceDetails?.filter(m => !m.retired)}
                            columns={expColumns}
                            pagination={{
                              pageSize: 5,
                            }}
                          ></Table>
                        </TabPane>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">Save</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.goBack()}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div >
        <OpenChat />
      </div >
    );
  }
};

export default EditDoctor;