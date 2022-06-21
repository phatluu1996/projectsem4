import React, { Component } from "react";
import OpenChat from "../../sidebar/openchatheader"
import { Placeholder,User_img } from "../../imagepath";

class Mailview extends Component {
    render(){
        return(
            <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">View Message</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="mailview-content">
                  <div className="mailview-header">
                    <div className="row">
                      <div className="col-sm-9">
                        <div className="text-ellipsis m-b-10">
                          <span className="mail-view-title">HRMS Bootstrap Admin Template</span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="mail-view-action">
                          <div className="btn-group">
                            <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Delete"> <i className="fas fa-trash" /></button>
                            <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Reply"> <i className="fas fa-reply" /></button>
                            <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Forward"> <i className="fas fa-share" /></button>
                          </div>
                          <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Print"> <i className="fas fa-print" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="sender-info">
                      <div className="sender-img">
                        <img width={40} alt="" src={User_img} className="rounded-circle" />
                      </div>
                      <div className="receiver-details float-left">
                        <span className="sender-name">John Doe (johnjoe@example.com)</span>
                        <span className="receiver-name">
                          to <span>me</span>, <span>Richard</span>, <span>Paul</span>
                        </span>
                      </div>
                      <div className="mail-sent-time">
                        <span className="mail-time">18 Sep. 2017 9:42 AM</span>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="mailview-inner">
                    <p>Hello Richard,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Thanks,
                      <br /> John Doe
                    </p>
                  </div>
                </div>
                <div className="mail-attachments">
                  <p><i className="fas fa-paperclip" /> 2 Attachments - <a href="#">View all</a> | <a href="#">Download all</a></p>
                  <ul className="attachments clearfix text-center">
                    <li>
                      <div className="attach-file"><i className="far fa-file-pdf" /></div>
                      <div className="attach-info">
                        <a href="#" className="attach-filename">daily_meeting.pdf</a>
                        <div className="attach-fileize"> 842 KB</div>
                      </div>
                    </li>
                    <li>
                      <div className="attach-file"><i className="far fa-file-word-o" /></div>
                      <div className="attach-info">
                        <a href="#" className="attach-filename">documentation.docx</a>
                        <div className="attach-fileize"> 2,305 KB</div>
                      </div>
                    </li>
                    <li>
                      <div className="attach-file"><img src={Placeholder} alt="Attachment" /></div>
                      <div className="attach-info">
                        <a href="#" className="attach-filename">webdesign.png</a>
                        <div className="attach-fileize"> 1.42 MB</div>
                      </div>
                    </li>
                    <li>
                      <div className="attach-file"><img src={Placeholder} alt="Attachment" /></div>
                      <div className="attach-info">
                        <a href="#" className="attach-filename">webdevelopment.png</a>
                        <div className="attach-fileize"> 1.1 MB</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mailview-footer">
                  <div className="row">
                    <div className="col-sm-6 left-action">
                      <button type="button" className="btn btn-white mr-0"><i className="fas fa-reply" /> Reply</button>
                      <button type="button" className="btn btn-white"><i className="fas fa-share" /> Forward</button>
                    </div>
                    <div className="col-sm-6 right-action">
                      <button type="button" className="btn btn-white mr-0"><i className="fas fa-print" /> Print</button>
                      <button type="button" className="btn btn-white"><i className="fas fa-trash" /> Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div>
        );
    }
};

export default Mailview;