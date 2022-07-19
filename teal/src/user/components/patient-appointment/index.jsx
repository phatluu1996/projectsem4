import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal } from 'react-bootstrap';
import { GET } from '../../../constants';
import { axiosActions, notify } from '../../../actions';
import moment from 'moment';
import { Popconfirm, Typography } from 'antd';
import { CheckOutlined, ClearOutlined, HistoryOutlined, LocalDiningOutlined } from '@material-ui/icons';


class PatientCalendar extends React.Component {

	state = {
		loading: true,
		startDate: new Date(),
		show: false,
		iseditdelete: false,
		addneweventobj: null,
		isnewevent: false,
		event_title: "",
		category_color: '',
		weekendsVisible: true,
		currentEvents: [],
		appointments: [],
		defaultEvents: [],
		selectAppointment: {}
	}

	cancelAppointment = () => {
		const appointmentParam = {
			url: `/appointments/cancel/${this.state.selectAppointment.id}`,
			method: GET,
			callback: (res) => {
				notify('success', '', 'Success');
				this.fetchAppointment();
				this.setState({ iseditdelete: false })
			},
			data: {}
		}

		axiosActions([appointmentParam]);
	}

	fetchAppointment() {
		const fetchReq = {
			url: `/appointments-patient/${localStorage.getItem("userName")}`,
			method: GET,
			callback: (res) => {
				// 
				let list = [];
				res.data.forEach((appointment) => {
					let event = { title: '', start: '', className: '', end: '', data: {} };
					event.title = appointment.patient.lastName + " " + appointment.patient.firstName;
					event.start = new Date(appointment.date).setSeconds(0);
					event.end = new Date(appointment.dateEnd).setSeconds(0);
					event.className = appointment.status == "canceled" || appointment.status == "rejected" ? 'bg-danger' : moment(appointment.date).isBefore(moment()) ? 'bg-success' : 'bg-primary';
					event.data = appointment;
					list.push(event);
				});
				this.setState({
					defaultEvents: list,
					currentEvents: list,
					appointments: list,
					loading: false
				});
			},
			data: {}
		}
		axiosActions([fetchReq]);
	}

	renderEventContent = (eventInfo) => {
		return (eventInfo.event.extendedProps.data.status == "canceled" || eventInfo.event.extendedProps.data.status == "rejected" ?
			<Typography.Text delete>
				<i><ClearOutlined /><b>{moment(eventInfo.event.start).format("HH:mm") + " - " + moment(eventInfo.event.end).format("HH:mm")}</b></i>
			</Typography.Text> :
			<Typography.Text>
				{moment(eventInfo.event.extendedProps.data.date).isBefore(moment()) ? <CheckOutlined /> : <HistoryOutlined />}
				<b>{moment(eventInfo.event.start).format("HH:mm") + " - " + moment(eventInfo.event.end).format("HH:mm")}</b>
			</Typography.Text>
		)
	}

	componentDidMount() {
		this.fetchAppointment();
	}

	handleChange = date => {
		this.setState({
			startDate: date
		});
	};

	handleClose = () => {
		this.setState({
			isnewevent: false,
			iseditdelete: false,
			show: false
		});
	}

	handleEventClick = (clickInfo) => {
		this.setState({
			iseditdelete: true,
			event_title: clickInfo.event.title,
			calenderevent: clickInfo.event,
			selectAppointment: clickInfo.event.extendedProps.data
		})
	}

	handleDateSelect = (selectInfo) => {
		this.setState({
			isnewevent: true,
			addneweventobj: selectInfo
		})

	}

	addnewevent() {
		const { event_title, category_color, addneweventobj } = this.state
		let calendarApi = addneweventobj.view.calendar

		calendarApi.unselect() // clear date selection

		if (event_title) {
			calendarApi.addEvent({
				id: 10,
				title: event_title,
				className: category_color,
				start: addneweventobj.startStr,
				end: addneweventobj.endStr,
				allDay: addneweventobj.allDay
			})
		}
		this.setState({ isnewevent: false })
	}

	onupdateModalClose() {
		this.setState({
			iseditdelete: false,
			event_title: ""
		})
	}

	oncreateeventModalClose() {
		this.setState({
			isnewevent: false,
			event_title: ""
		})
	}

	handleEventClick = (clickInfo) => {
		this.setState({
			iseditdelete: true,
			event_title: clickInfo.event.title,
			calenderevent: clickInfo.event,
			selectAppointment: clickInfo.event.extendedProps.data
		})
	}

	removeevent() {
		const { calenderevent } = this.state
		calenderevent.remove()
		this.setState({ iseditdelete: false })
	}

	clickupdateevent() {
		const { defaultEvents, calenderevent, event_title } = this.state
		const newArray = defaultEvents
		for (let i = 0; i < newArray.length; i++) {
			if (newArray[i].id === parseInt(calenderevent.id)) {
				newArray[i].title = event_title
			}
		}

		this.setState({ defaultEvents: newArray, iseditdelete: false })

	}

	handleClick() {
		this.setState({
			show: true
		});
	}


	render() {

		const { defaultEvents, iseditdelete, isnewevent } = this.state;

		return (
			<div className="main-content account-content">
				<div className="content">
					<div className="container">
						<div className="account-box" id="register-box">
							<div className="row">
								<div className="col-sm-7 col-4">
									<h4 className="page-title ml-3 ">My Appointment</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="card-box m-b-0">
										<div className="row">
											<div className="col-md-12">
												{/* Calendar */}
												<FullCalendar
													plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
													headerToolbar={{
														left: 'prev,next today',
														center: 'title',
														right: 'dayGridMonth,timeGridWeek,timeGridDay',
													}}
													events={this.state.appointments}
													// loading={this.state.loading}
													initialView='dayGridMonth'
													editable={false}
													// selectable={true}
													selectMirror={true}
													expandRows={true}
													dayMaxEvents={true}
													contentHeight={600}
													weekends={this.state.weekendsVisible}
													// initialEvents={defaultEvents}
													// select={this.handleDateSelect}
													eventClick={clickInfo => this.handleEventClick(clickInfo)}
													eventContent={this.renderEventContent}
												/>
												{/* /Calendar */}
											</div>
										</div>
									</div>
									<div className="modal fade none-border" id="event-modal">
										<div className="modal-dialog">
											<div className="modal-content modal-md">
												<div className="modal-header">
													<h4 className="modal-title">Add Event</h4>
													<button type="button" className="close" data-dismiss="modal">×</button>
												</div>
												<div className="modal-body" />
												<div className="modal-footer text-center">
													<button type="button" className="btn btn-primary submit-btn save-event">Create event</button>
													<button type="button" className="btn btn-danger btn-lg delete-event" data-dismiss="modal">Delete</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Modal size='xl' centered show={iseditdelete} onHide={this.handleClose} backdrop={true} style={{zIndex:10000000}}>
						<Modal.Header closeButton toggle={() => this.oncreateeventModalClose()}>
							<h3>Appointment Details</h3>
						</Modal.Header>
						<Modal.Body>
							<div className="row">
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Name</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.lastName + " " + this.state.selectAppointment?.patient?.firstName} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Birthday</label>
												<input className='form-control' type="text" readOnly value={moment(this.state.selectAppointment?.patient?.dateOfBirth).format("DD-MMMM-YYYY")} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Email</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.email} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Phone</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.phoneNumber} />
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group gender-select">
												<label className="gen-label">Gender </label>
												<div className="form-check-inline">
													<label className="form-check-label">
														<input type="radio" checked={this.state.selectAppointment?.patient?.gender} readOnly />Male
													</label>
												</div>
												<div className="form-check-inline">
													<label className="form-check-label">
														<input type="radio" name="gender" checked={!this.state.selectAppointment?.patient?.gender} readOnly />Female
													</label>
												</div>
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label>Address</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.address?.line} />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Country</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.address?.country} />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>District</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.address?.district} />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>State</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.patient?.address?.province} />
											</div>
										</div>
									</div>

								</div>
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Department</label>
												<input className='form-control' type="text" readOnly value={this.state.selectAppointment?.department?.name} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Appointment Date</label>
												<input className='form-control' type="text" readOnly value={moment(this.state.selectAppointment?.date).format("DD-MM-YYYY")} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Start time</label>
												<input className='form-control' type="text" readOnly value={moment(this.state.selectAppointment?.date).format("HH:mm")} />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>End time</label>
												<input className='form-control' type="text" readOnly value={moment(this.state.selectAppointment?.dateEnd).format("HH:mm")} />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label>Note</label>
												<textarea name='message' cols={30} rows={6} className="form-control" readOnly value={this.state.selectAppointment?.message} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							{moment(this.state.selectAppointment?.date).isAfter(moment()) && this.state.selectAppointment.status != "canceled" && this.state.selectAppointment.status != "rejected" &&
								<Popconfirm className='btn btn-danger submit-btn delete-event centered' data-dismiss="modal"
									title="Sure to cancel?" onConfirm={() => this.cancelAppointment(this.state.selectAppointment.id)}>
									<a>Cancel</a>
								</Popconfirm>}
							<button type="button" className="btn btn-warning submit-btn delete-event centered"
								data-dismiss="modal" onClick={() => this.setState({ iseditdelete: false })}>Back</button>
						</Modal.Footer>
					</Modal>

					<Modal centered show={isnewevent} onHide={this.handleClose}>
						<Modal.Header closeButton toggle={() => this.oncreateeventModalClose()}>
							Add Event
						</Modal.Header>
						<Modal.Body>
							{this.renderaddnewevent()}
						</Modal.Body>
						<Modal.Footer>
							<button type="button" className="btn btn-success submit-btn delete-event" data-dismiss="modal" onClick={() => this.addnewevent()}>Create event</button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		)
	}

	renderaddnewevent() {
		const { event_title } = this.state

		return (
			<form>
				<div className='row'>
					<div className='col-md-12'>
						<div className='form-group'>
							<label className='control-label'>Event Name</label>
							<input className='form-control' type='text' name='title' value={event_title}
								onChange={(event) => this.setState({ event_title: event.target.value })} />
						</div>
					</div>
					<div className='col-md-12'>
						<div className='form-group'>
							<label className='control-label'>Category</label>
							<select className='select form-control' name='category'
								onChange={(event) => this.setState({ category_color: event.target.value })}>
								<option value='bg-danger'>Danger</option>
								<option value='bg-success'>Success</option>
								<option value='bg-purple'>Purple</option>
								<option value='bg-primary'>Primary</option>
								<option value='bg-pink'>Pink</option>
								<option value='bg-info'>Info</option>
								<option value='bg-inverse'>Inverse</option>
								<option value='bg-orange'>Orange</option>
								<option value='bg-brown'>Brown</option>
								<option value='bg-teal'>Teal</option>
								<option value='bg-warning'>Warning</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		)
	}
}
export default PatientCalendar;