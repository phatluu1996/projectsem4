import React, { Component } from "react";
import { axiosActions, axiosAction, isValid, isFormValid , notify } from "../../../../actions";
import { GET , UPDATE } from "../../../../constants";
import OpenChat from "../../sidebar/openchatheader";
import { DatePicker, Modal, Select } from 'antd';
import { toMoment } from '../../../../utils';

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
        manufacture: null,
        model: null,
        serialNumber: null, //
        supplier: null,
        warranty: null, //
        cost: null,
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
        console.log(res)
        this.setState({
          data: res.data,
          loading: false
        });
      },
      data: {}
    }

    const employeeParam = {
      url: "/employees-doctors",
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
    tmp.employee = this.state.employees[value];
    this.setState({
      data: tmp
    })
  }



  onSubmit = (e) => {
    e.preventDefault();
    const tmp = { ...this.state.data }
    console.log(tmp);
    if (!isFormValid(e)) return;
    axiosAction("/assets/"+this.id,UPDATE, res => {
      if (res.data.success) {
        notify('success', '', 'Success')
        this.props.history.push("/admin/assets");
      } else {
        Modal.error({
          title: `Add new asset fail"`,
          content: (
            <>
              {res.data.message}
            </>
          )
        });
      }
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
      case 'manufacture':
        tmp.manufacture = value;
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
                          className={isValid(this.state.data?.purchaseDate != null)} aria-required
                          value={toMoment(this.state.data?.purchaseDate)}
                          showTime={false}
                          format="YYYY-MM-DD"
                          clearIcon={true}
                          allowClear={true}
                          onChange={(e)=>this.onChangeDate(e)}
                          onSelect={(e)=>this.onChangeDate(e)}
                        ></DatePicker>
                      </div>
                      <div className="invalid-feedback">Please choise assets purchase date !</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Manufacture <span className="text-danger">*</span></label>
                      <input className={isValid(this.state.data?.manufacture)} defaultValue={this.state.data?.manufacture} onChange={(e) => this.onChange(e, "manufacture")} type="text" />
                      <div className="invalid-feedback">Manufacture cannot be empty</div>
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
                      <label>Warranty(month)<span className="text-danger">*</span></label>
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
                        value={this.state.data?.status}
                        bordered={false}
                        style={{ width: '100%' }}
                        name='status'
                        className={isValid(this.state.data?.status != null)}
                        onChange={this.onSelectStt}>
                        <Select.Option key="Available">Available</Select.Option>
                        <Select.Option key="Unavailable">Unavailable</Select.Option>
                      </Select>
                      <div className="invalid-feedback">Please select status for asset !</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Asset User</label>
                      <Select
                        value={this.state.data?.employee?.firstName +" "+ this.state.data?.employee?.lastName}
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
                  <button className="btn btn-danger submit-btn" onClick={() => this.props.history.push("/admin/assets")}>Back</button>
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