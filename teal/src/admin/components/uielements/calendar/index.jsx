import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal } from 'react-bootstrap';
import OpenChat from "../../sidebar/openchatheader";
import { GET } from '../../../../constants';
import { axiosActions, notify } from '../../../../actions';
import moment from 'moment';


class Calendar extends React.Component {

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
		appointments:[],
		defaultEvents: [{
			title: 'Event Name 4',
			start: Date.now() + 148000000,
			className: 'bg-purple'
		},
		{
			title: 'Test Event 1',
			start: Date.now(),
			end: Date.now(),
			className: 'bg-success'
		},
		{
			title: 'Test Event 2',
			start: Date.now() + 168000000,
			className: 'bg-info'
		},
		{
			title: 'Test Event 3',
			start: Date.now() + 338000000,
			className: 'bg-primary'
		}]
	}

	componentDidMount() {
		const id = 1;
		const fetchReq = {
			url: "/appointments-doctor/" + id,
			method: GET,
			callback: (res) => {
				notify('success', '', 'Success');
				let list = [];
				res.data.forEach((appointment) => {
					// let app = { title: '', start: '', className: '' }
					appointment.title = appointment.patient.lastName + " " + appointment.patient.firstName;
					appointment.start = new Date(appointment.date).setSeconds(0);
					appointment.end = new Date(appointment.dateEnd).setSeconds(0);
					appointment.className = moment(appointment.date).isBefore(moment()) ? 'bg-success' : 'bg-info';
					list.push(appointment);
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
			calenderevent: clickInfo.event
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
			calenderevent: clickInfo.event
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
			<div className="page-wrapper">
				{/* Page Content */}
				<div className="content">
					<div className="row">
						<div className="col-sm-8 col-4">
							<h4 className="page-title">Calendar</h4>
						</div>
						<div className="col-sm-4 col-8 text-right m-b-30">
							<a href="#" className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_event"><i className="fas fa-plus" /> Add Event</a>
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
											editable={true}
											selectable={true}
											selectMirror={true}
											dayMaxEvents={true}
											weekends={this.state.weekendsVisible}
											// initialEvents={defaultEvents}
											select={this.handleDateSelect}
											eventClick={clickInfo => this.handleEventClick(clickInfo)}
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
				<OpenChat />
				{/* Page Content */}
				<Modal centered show={iseditdelete} onHide={this.handleClose}>
					<Modal.Header closeButton toggle={() => this.oncreateeventModalClose()}>
						Add Event
					</Modal.Header>
					<Modal.Body>
						<label>Change event name</label>
						<div className='input-group'><input className='form-control' type="text" />
							<span className='input-group-append'>
								<button type='submit' className='btn btn-success'><i className='fa fa-check'></i> Save</button>
							</span>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button type="button" className="btn btn-danger submit-btn delete-event centered"
							data-dismiss="modal" onClick={() => this.removeevent()}>Delete</button>
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
				<div id="add_event" className="modal fade" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content modal-md">
							<div className="modal-header">
								<h4 className="modal-title">Add Event</h4>
								<button type="button" className="close" data-dismiss="modal">×</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label>Event Name <span className="text-danger">*</span></label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Event Date <span className="text-danger">*</span></label>
										<div className="cal-icon">
											{/* <input className="form-control datetimepicker" type="text" /> */}
										</div>
									</div>
									<div className="m-t-20 text-center">
										<button className="btn btn-primary submit-btn">Create Event</button>
									</div>
								</form>
							</div>
						</div>
					</div>
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
export default Calendar;