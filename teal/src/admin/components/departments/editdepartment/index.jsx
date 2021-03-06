import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { axiosAction, encodeBase64, notify } from '../../../../actions';
import { GET, UPDATE } from "../../../../constants";
import { Redirect } from 'react-router-dom';

class EditDepartment extends Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = {
      isComponentWillUnMount: false,
      loading: true,
      goBack: false,
      name: "",
      description: "",
      status: "",
      imageByteArr: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage(e) {
    var file = e.target.files[0];
    encodeBase64(file, (res) => {
      this.setState({
        imageByteArr: res
      })
    })
  }


  componentDidMount() {
    this.isComponentWillUnMount = true;
    axiosAction("/departments/" + this.id, GET, res => {
      this.setState({
        loading: false,
        name: res.data.name,
        description: res.data.description,
        status: res.data.status,
        imageByteArr: res.data.imageByteArr
      });
    }, (err) => notify('error', "Error"));
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
  }

  onChange = (e) => {
    if (e.target.type == "radio") {
      this.setState({
        status: e.target.value
      })
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      imageByteArr: this.state.imageByteArr
    }

    axiosAction("/departments/" + this.id, UPDATE, res => {
      notify('success', '', 'Success')
      this.setState({ goBack: true });
    }, (err) => { notify('error', "Error") }, newData);
  }


  render() {
    if (this.state.goBack) {
      return <Redirect to='/admin/departments' />
    }
    return (!this.state.loading &&
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Department</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-group">
                  <label>Icon</label>
                  <div className="profile-upload">
                    <div className="upload-img">
                      <img alt="" src={this.state.imageByteArr ? this.state.imageByteArr : ""} />
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
                <div className="form-group">
                  <label>Department Name</label>
                  <input className="form-control" type="text" defaultValue={this.state.name} name='name' onChange={(e) => this.onChange(e)} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea cols={30} rows={4} className="form-control" defaultValue={this.state.description} name='description' onChange={(e) => this.onChange(e)} />
                </div>
                <div className="form-group">
                  <label className="display-block">Department Status</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" value={true} defaultChecked={this.state.status} onChange={(e) => this.onChange(e)} />
                    <label className="form-check-label" htmlFor="product_active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="status" value={false} defaultChecked={!this.state.status} onChange={(e) => this.onChange(e)} />
                    <label className="form-check-label" htmlFor="product_inactive">
                      Inactive
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button type='submit' className="btn btn-primary submit-btn">Save</button>
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/departments")}>Back</button>
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

export default EditDepartment;