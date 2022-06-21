import React from 'react';
import OpenChat from "../../../sidebar/openchatheader";
import Select from 'react-select';

const Formhorizontal = () => {

    const country = [
        { value: 'USA', label: 'USA' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Germany', label: 'Germany' }
      ];
      const state = [
        { value: 'Select State', label: 'Select State' },
        { value: 'California', label: 'California' },
        { value: 'Texas', label: 'Texas' },
        { value: 'Florida', label: 'Florida' }
      ];  
      const blood = [
        { value: 'A+', label: 'A+' },
        { value: 'B+', label: 'B+' },
        { value: 'O+', label: 'O+' },
        { value: 'B-', label: 'B-' }
      ]; 
    return(
        <div className="page-wrapper">
        <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Horizontal Form</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-box">
                        <h4 className="card-title">Basic Form</h4>
                        <form action="#">
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">First Name</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Last Name</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Email Address</label>
                                <div className="col-md-9">
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Username</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Password</label>
                                <div className="col-md-9">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Repeat Password</label>
                                <div className="col-md-9">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-box">
                        <h4 className="card-title">Address Form</h4>
                        <form action="#">
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Address Line 1</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Address Line 2</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">City</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">State</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Country</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Postal Code</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-box">
                        <h4 className="card-title">Two Column Horizontal Form</h4>
                        <h4 className="card-title">Personal Information</h4>
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">First Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Last Name</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Gender</label>
                                        <div className="col-md-9">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="gender_male" value="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="gender_male">
                                                Male
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="gender_female" value="option2" />
                                                <label className="form-check-label" htmlFor="gender_female">
                                                Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Blood Group</label>
                                        <div className="col-md-9">
                                        <Select options={blood} className="select"/> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Username</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Email</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Password</label>
                                        <div className="col-md-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Repeat Password</label>
                                        <div className="col-md-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="card-title">Address</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Address Line 1</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Address Line 2</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">State</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">City</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Country</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-form-label">Postal Code</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form action="#">
                        <div className="card-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="card-title">Personal Details</h4>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Name:</label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Password:</label>
                                        <div className="col-lg-9">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">State:</label>
                                        <div className="col-lg-9">
                                        <Select options={state} className="select"/>
                                           
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">About:</label>
                                        <div className="col-lg-9">
                                            <textarea rows="5" cols="5" className="form-control" placeholder="Enter message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="card-title">Personal details</h4>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Name:</label>
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="First name" className="form-control" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Last name" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Email:</label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Phone:</label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Address:</label>
                                        <div className="col-lg-9">
                                            <input type="text" className="form-control m-b-20" />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className=" m-b-20">
                                                    <Select options={country} className="select"/>
                                                      
                                                    </div>
                                                    <input type="text" placeholder="ZIP code" className="form-control" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="State/Province" className="form-control m-b-20" />
                                                    <input type="text" placeholder="City" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <OpenChat/>
     </div>  
 
    )
};   

export default Formhorizontal;

