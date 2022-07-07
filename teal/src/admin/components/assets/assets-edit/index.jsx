import React, { Component } from "react";
import OpenChat from "../../sidebar/openchatheader";
import { axiosActions, isValid, isFormValid, GET , UPDATE } from "../../../../actions";
import { DatePicker, Select } from 'antd';

class EditAssets extends Component {
  id = this.props.match.params.id;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      employees:[],
      data: {
        assetName: null, // 
        purchaseDate: null, //
        manufacturer: null,
        model: null,
        serialNumber: null, //
        supplier: null,
        warranty: 0, //
        cost: 0,
        status: null,
        description: null,
        employee: null //
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelectStt = this.onSelectStt.bind(this);
    this.onSelectEmp = this.onSelectEmp.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  componentDidMount() {
    const assetsParam = {
      url: "/assets/"+this.id,
      method: GET,
      callback: (res) => {
        this.setState({
          data: res.data,
          loading: false
        });
      },
      data: {}
    }

    const employeeParam = {
      url: "/employees",
      method: GET,
      callback: (res) => {
        this.setState({
          employees: res.data,
          loading: false
        });
      },
      data: {}
    }
    axiosActions([assetsParam, employeeParam]);
  }
  componentWillUnmount() {
  }

  onSelectStt = (value) => {
    const tmp = { ...this.state.data };
    tmp.status = value
    this.setState({
      data: tmp
    })
  }

  onSelectEmp = (value) => {
    const tmp = { ...this.state.data };
    tmp.employee = value
    this.setState({
      data: tmp
    })
  }



  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    console.log(tmp);
    if (!isFormValid(e)) return;
    axiosAction("/assets",UPDATE, res => {
      notify('success', '','Success')
      this.props.history.push("/admin/assets");
    },(err) => notify('error', "Error"),tmp);
  }

  onChange = (e, feild) => {
    const tmp = { ...this.state.data };
    const value = e.target.value;
    switch (feild) {
      case 'assetName':
        tmp.assetName = value;
        break;
      case 'purchaseDate':
        tmp.purchaseDate = value;
        break;
      case 'manufacturer':
        tmp.manufacturer = value;
        break;
      case 'employee':
        tmp.employee = value;
        break;
      case 'model':
        tmp.model = value;
        break;
      case 'serialNumber':
        tmp.serialNumber = value;
        break;
      case 'supplier':
        tmp.supplier = value;
        break;
      case 'warranty':
        tmp.warranty = value;
        break;
      case 'cost':
        tmp.cost = value;
        break;
      case 'description':
        tmp.description = value;
        break;
    }
    this.setState({ data: tmp });
  }

  onChangeDate(e) {
    const tmp = { ...this.state.data };
    tmp.purchaseDate = e;
    this.setState({
      data: tmp
    });
  }

  render() {

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h4 className="page-title">Edit Asset</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset Name<span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.assetName)} defaultValue={this.state.data?.assetName} onChange={(e) => this.onChange(e, "assetName")} type="text" />
                      <div className="invalid-feedback">Asset name cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="focus-label">Purchase Date <span className="text-danger">*</span></label>
                      <div className="cal-icon">
                        <DatePicker
                          defaultOpen
                          className={isValid(this.state.data?.purchaseDate != null)} aria-required
                          value={toMoment(this.state.data?.dateOfBirth)}
                          showTime={false}
                          format="YYYY-MM-DD"
                          clearIcon={true}
                          allowClear={true}
                          onChange={this.onChangeDate}
                          onSelect={this.onChangeDate}
                        ></DatePicker>
                      </div>
                      <div className="invalid-feedback">Please choise assets purchase date !</div>
                    </div>
                  </div>
                </div>
                {/* <div className="row"> */}
                {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset Id</label>
                      <input className="form-control"  type="text" readOnly />
                    </div>
                  </div> */}
                {/* <div className="col-md-6">
                    <div className="form-group">
                      <label>Purchase From</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div> */}
                {/* </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Manufacturer <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.manufacturer)} defaultValue={this.state.data?.manufacturer} onChange={(e) => this.onChange(e, "manufacturer")} type="text" />
                      <div className="invalid-feedback">Manufacturer cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Model <span className="text-danger">*</span></label>
                      <input  className={isValid(this.state.data?.model)} defaultValue={this.state.data?.model} onChange={(e) => this.onChange(e, "model")} type="text" />
                      <div className="invalid-feedback">Model cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Serial Number <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.serialNumber)} defaultValue={this.state.data?.serialNumber} onChange={(e) => this.onChange(e, "serialNumber")} type="text" />
                      <div className="invalid-feedback">Serial number cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Supplier <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.supplier)} defaultValue={this.state.data?.supplier} onChange={(e) => this.onChange(e, "supplier")} type="text" />
                      <div className="invalid-feedback">Supplier cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Warranty <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.warranty)} defaultValue={this.state.data?.warranty} onChange={(e) => this.onChange(e, "warranty")} type="text" />
                      <div className="invalid-feedback">Warranty cannot be empty</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Cost</label>
                      <input className={isValid(this.state.data?.cost)} defaultValue={this.state.data?.cost} placeholder="$" onChange={(e) => this.onChange(e, "cost")} type="text" />
                      <div className="invalid-feedback">Cost cannot be empty</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <Select
                        defaultValue={this.state.data?.status}
                        bordered={false}
                        style={{ width: '100%' }}
                        name='status'
                        className={isValid(this.state.data?.status != null)}
                        onChange={this.onSelectStt}>
                        <Select.Option key="Available">Available</Select.Option>
                        <Select.Option key="Unavailable">Unavailable</Select.Option>
                      </Select>
                      <div className="invalid-feedback">Please select statu for asset !</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset User</label>
                      <Select
                        defaultValue={this.state.data?.employee}
                        bordered={false}
                        style={{ width: '100%' }}
                        name='status'
                        className={isValid(this.state.employees.length > 0)}
                        onChange={this.onSelectEmp}>
                        {this.state.employees?.map((employee, index) =>
                          <Select.Option key={index}>{employee?.firstName + " " + employee?.lastName}</Select.Option>
                        )}
                      </Select>
                      <div className="invalid-feedback">Please select employee for asset !</div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className={isValid(this.state.data?.description)} defaultValue={this.state.data?.description} onChange={(e) => this.onChange(e, "description")}  />
                      <div className="invalid-feedback">Please input description !</div>
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button type="submit" className="btn btn-primary submit-btn">Save</button>
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

export default EditAssets;