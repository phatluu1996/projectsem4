import axios from 'axios';
import { api, ADD, DELETE, UPDATE, GET } from './constants';
import moment from "moment";
import { notification, Button, Modal, Space } from 'antd';
import { InfoOutlined } from '@material-ui/icons';
import React, { Component } from "react";


const { confirm } = Modal;

export const axiosAction = (url, method, successCallback, errorCallback, data = {}) => {
    const response = undefined;
    switch (method) {
        case GET:
            api.get(url).then(res => {
                successCallback(res);
            }).catch(err => {
                console.log(err);
                errorCallback(err);
            });
            break;

        case ADD:
            api.post(url, data).then(res => {
                successCallback(res);
            }).catch(err => {
                console.log(err);
                errorCallback(err);
            });
            break;

        case UPDATE:
            api.put(url, data).then(res => {
                successCallback(res);
            }).catch(err => {
                console.log(err);
                errorCallback(err);
            });
            break;

        case DELETE:
            api.delete(url).then(res => {
                successCallback(res);
            }).catch(err => {
                console.log(err);
                errorCallback(err);
            });
            break;

        default:
            api.get(url).then(res => {
                successCallback(res);
            }).catch(err => {
                console.error(err);
                errorCallback(err);
            });
            break;
    }
}


export const axiosActions = (params = [{
    url: "",
    method: "",
    callback: null,
    data: {}
}]) => {
    const requests = [];
    const callbacks = [];
    params.map(param => {
        switch (param.method) {
            case GET:
                requests.push(api.get(param.url))
                callbacks.push(param.callback);
                break;

            case ADD:
                requests.push(api.post(param.url, param.data))
                callbacks.push(param.callback);
                break;

            case UPDATE:
                requests.push(api.put(param.url, param.data))
                callbacks.push(param.callback);
                break;

            case DELETE:
                requests.push(api.delete(param.url))
                callbacks.push(param.callback);
                break;
        }
    });
    axios.all(requests).then(resArr => {
        resArr.map((res, idx) => {
            callbacks[idx](res);
        })
    }).catch(errArr => {
        notify('error', "Technical error !", "Error", 500, () => {
            console.error(errArr);
        });
    });
}

export const notify = (type, message, title = '', timeOut = 2000, callback = () => { }) => {
    notification[type]({
        message: title,
        description: message,
        duration: timeOut / 1000,
        placement: "bottomRight"
    });
};

export const isFormValid = (e) => {
    let idx = 0;
    const invalidFormControls = e.target.getElementsByClassName("form-control");
    const invalideFormChecks = e.target.getElementsByClassName("form-check-input");
    for (idx = 0; idx < invalidFormControls.length; ++idx) {
        if (invalidFormControls[idx].className.includes("is-invalid")) {
            notify('warning', "Please input require fields", "Fail !", 3000);
            return false;
        }
    }

    for (idx = 0; idx < invalideFormChecks.length; ++idx) {
        if (invalideFormChecks[idx].className.includes("is-invalid")) {
            notify('warning', "Please input require fields", "Fail !", 3000);
            return false;
        }
    }

    return true;
}

export const isValid = (condition) => {
    return condition ? "form-control is-valid" : "form-control is-invalid";
}

export const countAge = (text) => {
    // if(moment(text).yearformat('YYYY') === moment().format('YYYY')) return 0
    // const age = moment(text).fromNow().split(" ");
    // return age[0];
    const current = moment().year();
    const birthday = moment(text).year();
    return current - birthday;
}

export const stringSort = (value1, value2) => {
    return ('' + value1).localeCompare(value2);
}

export const numberSort = (value1, value2) => {
    return value1 - value2;
}

export const dateSort = (value1, value2) => {
    // return moment.utc(value1.timeStamp).diff(moment.utc(value2.timeStamp));
    return moment(value1).diff(moment(value2))
}

export const momentSort = (value1, value2) => {
    // return moment.utc(value1.timeStamp).diff(moment.utc(value2.timeStamp));
    return value1.diff(value2)
}

export const encodeBase64 = (file, callback) => {
    // Encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
        // console.log(reader.result);
        // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
    };
    reader.readAsDataURL(file);
}

export const showConfirm = (title, content, onOk, onCancel) => {
    confirm({
        title: title,
        icon: <InfoOutlined />,
        content: content,

        onOk() {
            if (onOk) {
                onOk();
            }
        },

        onCancel() {
            if (onCancel) {
                onCancel();
            }
        },
    });
};

export const logout = (onOk) => {
    showConfirm("Are you sure ?",
        "All the changes without saving could be lost !",
        () => {
            localStorage.removeItem('userToken');
            localStorage.removeItem('headerName');
            localStorage.removeItem('userName');
            localStorage.removeItem('userId');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userAvatar');            
            onOk();
        }
    );


}

export const valid_email_regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/);
export const valid_password_regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
export const valid_number_regex = new RegExp('^[0-9]*$');

export const isValidWithRegex = (val, type) => {
    switch (type.toLowerCase().trim()) {
        case "password":
            return valid_password_regex.test(val);
        case "email":
            return valid_email_regex.test(val);
        case "identity":
            return valid_number_regex.test(val);

        default:
            return false;
    }
}
