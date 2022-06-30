import React, {Component} from 'react';
import OpenChat from "../../sidebar/openchatheader";
import { axiosAction,notify } from '../../../../actions';
import { ADD } from "../../../../constants";
import {Redirect} from 'react-router-dom';

class AddDepartment extends Component{
  
  constructor(props) {
    super(props);
    super();
    this.state = {
      isComponentWillUnMount: false,
      goBack: false,
      name:"",
      description:"",
      status:true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.isComponentWillUnMount = true;
  }

  componentWillUnmount() {
    this.isComponentWillUnMount = false
  }


  onChange = (evt,field) => {
    if(evt.target.type == "radio"){
      this.setState({
        status:evt.target.value = "option2"?false:true
      })
    }else{
      this.setState({[field]: evt.target.value});
    }
  }

   onSubmit = (e) => {
    e.preventDefault();
    const department = {
          name:this.state.name,
          description:this.state.description,
          status:this.state.status
    };
    
   axiosAction("/departments",ADD, res => {
    notify('success', '','Success')
    this.setState({goBack:true})
  },(err) => notify('error', "Error"),department);
   
  }

    render(){
      if (this.state.goBack) {
        return <Redirect to='/admin/departments' />
      }
        return(
            <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h4 className="page-title">Add Department</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <form onSubmit={(e) => {this.onSubmit(e)}}>
                    <div className="form-group">
                      <label>Department Name</label>
                      <input className="form-control" id='name'  type="text" onChange={(event)=>this.onChange(event,"name")}  />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea cols={30} rows={4} className="form-control" id='description'  onChange={(event)=>this.onChange(event,"description")} />
                    </div>
                    <div className="form-group">
                      <label className="display-block">Department Status</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="product_active" defaultValue="option1" onChange={(event)=>this.onChange(event,"option1")} defaultChecked  />
                        <label className="form-check-label" htmlFor="product_active">
                          Active
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue="option2" onChange={(event)=>this.onChange(event,"option2")} />
                        <label className="form-check-label" htmlFor="product_inactive">
                          Inactive
                        </label>
                      </div>
                    </div>
                    <div className="m-t-20 text-center">
                      <button type='submit' className="btn btn-primary submit-btn">Create Department</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <OpenChat/>
          </div>
        );
    }
};

export default AddDepartment;