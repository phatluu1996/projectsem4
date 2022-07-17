import axios from 'axios';
import moment from 'moment';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const GET = "get";
export const ADD = "add";
export const UPDATE = "update";
export const DELETE = "delete";
export const outOfficeHours = [1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23, 24];
export const DayOptions = [
    { value: '0', label: 'Sunday', shortLabel: 'sun' },
    { value: '1', label: 'Monday', shortLabel: 'mon' },
    { value: '2', label: 'Tuesday', shortLabel: 'tue' },
    { value: '3', label: 'Wednesday', shortLabel: 'wed' },
    { value: '4', label: 'Thursday', shortLabel: 'thur' },
    { value: '5', label: 'Friday', shortLabel: 'fri' },
    { value: '6', label: 'Saturday', shortLabel: 'sat' },
]



export const disabledHoursFromNow = () => {
    const hours = [];
    for (let i = 0; i < moment().hour(); i += 1) {
        if (!outOfficeHours.includes(i)) {
            hours.push(i);
        }
    }
    return hours;
};

export const disabledMinutesFromNow = (selectedHour) => {
    const minutes = [];
    if (selectedHour === moment().hour()) {
        for (let i = 0; i < moment().minute(); i += 1) minutes.push(i);
    }
    return minutes;
};

export const disabledHours = (hours) => {
    return hours;
}

export const disabledMinutes = (minutes) => {
    return minutes;
}

export const employeeRoles = [
    {
        value: 'NURSE',
        label: 'Nurse'
    },
    {
        value: 'LABORATORIST',
        label: 'Laboratorist'
    },
    {
        value: 'PHARMACIST',
        label: 'Pharmacist'
    },
    {
        value: 'ACCOUNTANT',
        label: 'Accountant'
    },
    {
        value: 'RECEPTIONIST',
        label: 'Receptionist'
    },
    {
        value: 'OTHER',
        label: 'Other'
    }
]

export const leave_type = [
    { value: 'cassual', label: 'Casual Leave' },
    { value: 'medical', label: 'Medical Leave' },
    { value: 'unpaid', label: 'Loss of Pay' },
]
export const leave_status = [
    { value: 'pending', label: 'Pending', color: "purple" },
    { value: 'approved', label: 'Approved', color: "green" },
    { value: 'rejected', label: 'Rejected', color: "red" }
]

export const appointment_status = [
    { value: 'pending', label: 'Pending', color: "purple", next_status: [{ value: 'approved', label: 'Approved', color: "green" }, { value: 'rejected', label: 'Rejected', color: "red" }] },
    { value: 'approved', label: 'Approved', color: "green", next_status: [{ value: 'canceled', label: 'Canceled', color: "yellow" }] },
    { value: 'rejected', label: 'Rejected', color: "red", next_status: [] },
    { value: 'canceled', label: 'Canceled', color: "yellow", next_status: [] },
]

export const ADMIN = "ROLE_ADMIN";
export const PATIENT = "ROLE_PATIENT";
export const RECEPTION = "ROLE_RECEPTION";
export const DOCTOR = "ROLE_DOCTOR";

export const appointment_timeranges = [
    {
      value: "08:00",
      label: "08:00am - 08:30am",
    },
    {
      value: "08:30",
      label: "08:30am - 09:00am",
    },
    {
      value: "09:00",
      label: "09:00am - 09:30am",
    },
    {
      value: "09:30",
      label: "09:30am - 10:00am",
    },
    {
      value: "10:00",
      label: "10:00am - 10:30am",
    },
    {
      value: "10:30",
      label: "10:30am - 11:00am",
    },
    {
      value: "11:00",
      label: "11:00am - 11:30am",
    },
    {
      value: "11:30",
      label: "11:30am - 12:00am",
    },
    {
      value: "13:00",
      label: "01:00pm - 01:30pm",
    },
    {
      value: "13:30",
      label: "01:30pm - 02:00pm",
    },
    {
      value: "14:00",
      label: "02:00pm - 02:30pm",
    },
    {
      value: "14:30",
      label: "02:30pm - 03:00pm",
    },
    {
      value: "15:00",
      label: "03:00pm - 03:30pm",
    },
    {
      value: "15:30",
      label: "03:30pm - 04:00pm",
    },
    {
      value: "16:00",
      label: "04:00pm - 04:30pm",
    },
    {
      value: "16:30",
      label: "04:30pm - 05:00pm",
    },
    {
      value: "17:00",
      label: "05:00pm - 05:30pm",
    },
    {
      value: "17:30",
      label: "05:30pm - 06:00pm",
    },
  ];



