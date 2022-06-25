import React from 'react';
import Select from 'react-select';
import OpenChat from "../../../sidebar/openchatheader";

const FormVertical = () => {
    
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
                    <h4 className="page-title">Vertical Form</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-box">
                        <h4 className="card-title">Basic Form</h4>
                        <form action="#">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input type="password" className="form-control" />
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
                            <div className="form-group">
                                <label>Address Line 1</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Address Line 2</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" className="form-control" />
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
                        <h4 className="card-title">Two Column Vertical Form</h4>
                        <form action="#">
                            <h4 className="card-title">Personal Information</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Blood Group</label>
                                        <Select options={blood} className="select"/> 
                                    </div>
                                    <div className="form-group">
                                        <label className="display-block">Gender:</label>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="gender_male" value="option1" />
                                            <label className="form-check-label" htmlFor="gender_male">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="gender_female" value="option2" />
                                            <label className="form-check-label" htmlFor="gender_female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Repeat Password</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="card-title">Postal Address</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address Line 1</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address Line 2</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Postal Code</label>
                                        <input type="text" className="form-control" />
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
                                    <h4 className="card-title">Personal details</h4>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>State:</label>
                                        <Select options={state} className="select"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Your message:</label>
                                        <textarea rows="5" cols="5" className="form-control" placeholder="Enter message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="card-title">Personal details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First name:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last name:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Phone:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address line:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Country:</label>
                                                <Select options={country} className="select"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>State/Province:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>ZIP code:</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>City:</label>
                                                <input type="text" className="form-control" />
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
    );
};

export default FormVertical;