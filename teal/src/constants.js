import axios from 'axios';
import moment from 'moment';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export const GET = "get";
export const ADD = "add";
export const UPDATE = "update";
export const DELETE = "delete";
export const outOfficeHours = [1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23, 24];
export const DayOptions = [
    { value: '1', label: 'Sunday', shortLabel: 'sun' },
    { value: '2', label: 'Monday', shortLabel: 'mon' },
    { value: '3', label: 'Tuesday', shortLabel: 'tue' },
    { value: '4', label: 'Wednesday', shortLabel: 'wed' },
    { value: '5', label: 'Thursday', shortLabel: 'thur' },
    { value: '6', label: 'Friday', shortLabel: 'fri' },
    { value: '7', label: 'Saturday', shortLabel: 'sat' },
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
        value : 'ADMIN',
        label : 'Admin'
    },
    {
        value : 'DOCTOR',
        label : 'Doctor'
    },
    {
        value : 'NURSE',
        label : 'Nurse'
    },
    {
        value : 'LABORATORIST',
        label : 'Laboratorist'
    },
    {
        value : 'PHARMACIST',
        label : 'Pharmacist'
    },
    {
        value : 'ACCOUNTANT',
        label : 'Accountant'
    },
    {
        value : 'RECEPTIONIST',
        label : 'Receptionist'
    },
]

