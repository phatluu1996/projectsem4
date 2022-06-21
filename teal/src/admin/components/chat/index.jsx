import React, { Component } from "react";
import { Link } from 'react-router-dom';
import OpenChat from "../sidebar/openchatheader"
import { User_img,Placeholder,Doctor_03,Doctor_thumb_03,Attachment } from "../imagepath"

class Chat extends Component {
   
    render(){
        return(
            <>  
            <div className="page-wrapper">
        <div className="chat-main-row">
          <div className="chat-main-wrapper">
            <div className="col-lg-9 message-view task-view">
              <div className="chat-window">
                <div className="fixed-header">
                  <div className="navbar">
                    <div className="user-details mr-auto">
                      <div className="float-left user-img m-r-10">
                        <Link to="/profile" title="Jennifer Robinson"><img src={Doctor_thumb_03} alt="" className="w-40 rounded-circle" /><span className="status online" /></Link>
                      </div>
                      <div className="user-info float-left">
                        <Link to="/profile"><span className="font-bold">Jennifer Robinson</span> <i className="typing-text">Typing...</i></Link>
                        <span className="last-seen">Last seen today at 7:50 AM</span>
                      </div>
                    </div>
                    <div className="search-box">
                      <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-append">
                          <button className="btn" type="button"><i className="fas fa-search" /></button>
                        </span>
                      </div>
                    </div>
                    <ul className="nav custom-menu">
                      <li className="nav-item">
                        <a href="#chat_sidebar" className="nav-link task-chat profile-rightbar float-right"><i className="fas fa-user" /></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/admin-template/voice-call"><i className="fas fa-phone" /></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/admin-template/video-call"><i className="fas fa-video" /></a>
                      </li>
                      <li className="nav-item dropdown dropdown-action">
                        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-cog" /></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="">Delete Conversations</a>
                          <a className="dropdown-item" href="">Settings</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-contents">
                  <div className="chat-content-wrap">
                    <div className="chat-wrap-inner">
                      <div className="chat-box">
                        <div className="chats">
                          <div className="chat chat-right">
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Hello. What can I do for you?</p>
                                  <span className="chat-time">8:30 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-line">
                            <span className="chat-date">October 8th, 2015</span>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>I'm just looking around.</p>
                                  <p>Will you tell me something about yourself? </p>
                                  <span className="chat-time">8:35 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Are you there? That time!</p>
                                  <span className="chat-time">8:40 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-right">
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Where?</p>
                                  <span className="chat-time">8:35 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                  <span className="chat-time">8:42 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>You wait for notice.</p>
                                  <span className="chat-time">8:30 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Consectetuorem ipsum dolor sit?</p>
                                  <span className="chat-time">8:50 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>OK?</p>
                                  <span className="chat-time">8:55 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content img-content">
                                  <div className="chat-img-group clearfix">
                                    <p>Uploaded 3 Images</p>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                  </div>
                                  <span className="chat-time">9:00 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-right">
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>OK!</p>
                                  <span className="chat-time">9:00 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Uploaded 3 files</p>
                                  <ul className="attach-list">
                                    <li><i className="far fa-file" /> <a href="#">example.avi</a></li>
                                    <li><i className="far fa-file" /> <a href="#">activity.psd</a></li>
                                    <li><i className="far fa-file" /> <a href="#">example.psd</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Consectetuorem ipsum dolor sit?</p>
                                  <span className="chat-time">8:50 am</span>
                                </div>
                              </div>
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>OK?</p>
                                  <span className="chat-time">8:55 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-right">
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content img-content">
                                  <div className="chat-img-group clearfix">
                                    <p>Uploaded 6 Images</p>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                    <a className="chat-img-attach" href="#">
                                      <img width={182} height={137} alt="" src={Placeholder} />
                                      <div className="chat-placeholder">
                                        <div className="chat-img-name">placeholder.jpg</div>
                                        <div className="chat-file-desc">842 KB</div>
                                      </div>
                                    </a>
                                  </div>
                                  <span className="chat-time">9:00 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <ul className="attach-list">
                                    <li className="pdf-file"><i className="far fa-file-pdf" /> <a href="#">Document_2016.pdf</a></li>
                                  </ul>
                                  <span className="chat-time">9:00 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-right">
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <ul className="attach-list">
                                    <li className="pdf-file"><i className="far fa-file-pdf" /> <a href="#">Document_2016.pdf</a></li>
                                  </ul>
                                  <span className="chat-time">9:00 am</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <p>Typing ...</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="message-bar">
                    <div className="message-inner">
                      <a className="link attach-icon" href="#" data-toggle="modal" data-target="#drag_files"><img src={Attachment} alt="" /></a>
                      <div className="message-area">
                        <div className="input-group">
                          <textarea className="form-control" placeholder="Type message..." defaultValue={""} />
                          <span className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="far fa-paper-plane" /></button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="chat_sidebar">
              <div className="chat-window video-window">
                <div className="fixed-header">
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item"><a className="nav-link" href="#calls_tab" data-toggle="tab">Calls</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab">Profile</a></li>
                  </ul>
                </div>
                <div className="tab-content chat-contents">
                  <div className="content-full tab-pane" id="calls_tab">
                    <div className="chat-wrap-inner">
                      <div className="chat-box">
                        <div className="chats">
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Cristina Groves" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">phone_missed</i>
                                    <div className="call-info">
                                      <div className="call-user-details">
                                        <span className="call-description">Jeffrey Warden missed the call</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Jennifer Robinson" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">Jennifer Robinson</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">call_end</i>
                                    <div className="call-info">
                                      <div className="call-user-details"><span className="call-description">This call has ended</span></div>
                                      <div className="call-timing">Duration: <strong>5 min 57 sec</strong></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-line">
                            <span className="chat-date">January 29th, 2015</span>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <Link to="/profile" className="avatar">
                                <img alt="Cristina Groves" src={Doctor_thumb_03} className="img-fluid rounded-circle" />
                              </Link>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">ring_volume</i>
                                    <div className="call-info">
                                      <div className="call-user-details">
                                        <a href="#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling Jennifer ...</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-full tab-pane show active" id="profile_tab">
                    <div className="display-table">
                      <div className="table-row">
                        <div className="table-body">
                          <div className="table-content">
                            <div className="chat-profile-img">
                              <div className="edit-profile-img">
                                <img src={Doctor_03} alt="" />
                                <span className="change-img">Change Image</span>
                              </div>
                              <h3 className="user-name m-t-10 m-b-0">Cristina Groves</h3>
                              <small className="text-muted">Gynecologist</small>
                              <Link to="/edit-profile" className="btn btn-primary edit-btn"><i className="fas fa-pencil-alt" /></Link>
                            </div>
                            <div className="chat-profile-info">
                              <ul className="user-det-list">
                                <li>
                                  <span>Username:</span>
                                  <span className="float-right text-muted">@cristina_groves</span>
                                </li>
                                <li>
                                  <span>DOB:</span>
                                  <span className="float-right text-muted">3rd March</span>
                                </li>
                                <li>
                                  <span>Email:</span>
                                  <span className="float-right text-muted">cristinagroves@example.com</span>
                                </li>
                                <li>
                                  <span>Phone:</span>
                                  <span className="float-right text-muted"> 770-889-6484</span>
                                </li>
                              </ul>
                            </div>
                            <div className="transfer-files">
                              <ul className="nav nav-tabs nav-tabs-solid nav-justified m-b-0">
                                <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a></li>
                                <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                              </ul>
                              <div className="tab-content">
                                <div className="tab-pane show active" id="all_files">
                                  <ul className="files-list">
                                    <li>
                                      <div className="files-cont">
                                        <div className="file-type">
                                          <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                        </div>
                                        <div className="files-info">
                                          <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span className="file-author"><a href="#">Loren Gatlin</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul className="files-action">
                                          <li className="dropdown dropdown-action">
                                            <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-h" /></a>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="">Download</a>
                                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="my_files">
                                  <ul className="files-list">
                                    <li>
                                      <div className="files-cont">
                                        <div className="file-type">
                                          <span className="files-icon"><i className="far fa-file-pdf" /></span>
                                        </div>
                                        <div className="files-info">
                                          <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul className="files-action">
                                          <li className="dropdown dropdown-action">
                                            <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-h" /></a>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="">Download</a>
                                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="drag_files" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Drag and drop files upload</h3>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <form id="js-upload-form">
                  <div className="upload-drop-zone" id="drop-zone">
                    <i className="fas fa-cloud-upload-alt fa-2x" /> <span className="upload-text">Just drag and drop files here</span>
                  </div>
                  <h4>Uploading</h4>
                  <ul className="upload-list">
                    <li className="file-list">
                      <div className="upload-wrap">
                        <div className="file-name">
                          <i className="fas fa-portrait" /> photo.png
                        </div>
                        <div className="file-size">1.07 gb</div>
                        <button type="button" className="file-close">
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="progress progress-xs progress-striped">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                      </div>
                      <div className="upload-process">37% done</div>
                    </li>
                    <li className="file-list">
                      <div className="upload-wrap">
                        <div className="file-name">
                          <i className="far fa-file" /> task.doc
                        </div>
                        <div className="file-size">5.8 kb</div>
                        <button type="button" className="file-close">
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="progress progress-xs progress-striped">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                      </div>
                      <div className="upload-process">37% done</div>
                    </li>
                    <li className="file-list">
                      <div className="upload-wrap">
                        <div className="file-name">
                          <i className="fas fa-portrait" /> dashboard.png
                        </div>
                        <div className="file-size">2.1 mb</div>
                        <button type="button" className="file-close">
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="progress progress-xs progress-striped">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                      </div>
                      <div className="upload-process">Completed</div>
                    </li>
                  </ul>
                </form>
                <div className="m-t-30 text-center">
                  <button className="btn btn-primary submit-btn">Add to upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="add_group" className="modal fade">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Create a group</h3>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <p>Groups are where your team communicates. They’re best when organized around a topic — #leads, for example.</p>
                <form>
                  <div className="form-group">
                    <label>Group Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Send invites to: <span className="text-muted-light">(optional)</span></label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="m-t-50 text-center">
                    <button className="btn btn-primary submit-btn">Create Group</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="add_chat_user" className="modal fade " role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Create Chat Group</h3>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <div className="input-group m-b-30">
                  <input placeholder="Search to start a chat" className="form-control search-input" id="btn-input" type="text" />
                  <span className="input-group-append">
                    <button className="btn btn-primary">Search</button>
                  </span>
                </div>
                <div>
                  <h5>Recent Conversations</h5>
                  <ul className="chat-user-list">
                    <li>
                      <a href="#">
                        <div className="media">
                          <span className="avatar align-self-center">J</span>
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">Jeffery Lalor</div>
                            <span className="designation">Team Leader</span>
                          </div>
                          <div className="text-nowrap align-self-center">
                            <div className="online-date">1 day ago</div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media ">
                          <span className="avatar align-self-center">B</span>
                          <div className="media-body align-self-center text-nowrap">
                            <div className="user-name">Bernardo Galaviz</div>
                            <span className="designation">Web Developer</span>
                          </div>
                          <div className="align-self-center text-nowrap">
                            <div className="online-date">3 days ago</div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="media">
                          <span className="avatar align-self-center">
                            <img src={User_img} alt="John Doe" />
                          </span>
                          <div className="media-body text-nowrap align-self-center">
                            <div className="user-name">John Doe</div>
                            <span className="designation">Web Designer</span>
                          </div>
                          <div className="align-self-center text-nowrap">
                            <div className="online-date">7 months ago</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="m-t-50 text-center">
                  <button className="btn btn-primary submit-btn">Create Group</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="share_files" className="modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Share File</h3>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <div className="files-share-list">
                  <div className="files-cont">
                    <div className="file-type">
                      <span className="files-icon"><i className="far fa-file-pdf" /></span>
                    </div>
                    <div className="files-info">
                      <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                      <span className="file-author"><a href="#">Bernardo Galaviz</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Share With</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="m-t-50 text-center">
                  <button className="btn btn-primary submit-btn">Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OpenChat/>
      </div>   
            </>     
        );
    }
}  

export default Chat;