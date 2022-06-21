import React, { Component } from "react";
import OpenChat from "../../sidebar/openchatheader" 
import { Sent_img } from "../../imagepath"
import { Link } from 'react-router-dom';

class Taxes extends Component {
  
  render() {
  
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-8 col-6">
              <h4 className="page-title">Taxes</h4>
            </div>
            <div className="col-sm-4 col-6 text-right m-b-30">
              <Link to="/add-tax" className="btn btn-primary btn-rounded"><i className="fas fa-plus" /> Add Tax</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table m-b-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tax Name </th>
                      <th>Tax Percentage (%) </th>
                      <th>Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>VAT</td>
                      <td>14%</td>
                      <td>
                        <div className="dropdown action-label">
                          <a className="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                            Inactive
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Active</a>
                            <a className="dropdown-item" href="#">Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="/edit-tax"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_tax"><i className="fas fa-trash m-r-5" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>GST</td>
                      <td>30%</td>
                      <td>
                        <div className="dropdown action-label">
                          <a className="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                            Active
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Active</a>
                            <a className="dropdown-item" href="#">Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v" /></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="/edit-tax"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_tax"><i className="fas fa-trash m-r-5" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <OpenChat/>
        <div id="delete_tax" className="modal fade delete-modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src={Sent_img} alt="" width={50} height={46} />
              <h3>Are you sure want to delete this Tax?</h3>
              <div className="m-t-20"> <a href="#" className="btn btn-white mr-0" data-dismiss="modal">Close</a>
                <button type="submit" className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Taxes;
