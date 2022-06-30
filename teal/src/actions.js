import axios from 'axios';
import { api, GET_LOCATION, ADD, DELETE, UPDATE, GET} from './constants';
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
        case GET_LOCATION:
            const url = "https://countriesnow.space/api/v0.1/countries/states";
            axios.get(url).then(res => {
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
                console.log(err);
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
        notify('error', "Technical error !", "Error", 500, ()=>{
            console.log(errArr);
        });
    });
}

export const notify = (type, message, title = '', timeOut = 2000, callback = () => {}) => {
    
        switch (type) {
            case 'info':
                NotificationManager.info(message, title, timeOut);
                break;
            case 'success':
                NotificationManager.success(message, title, timeOut);
                break;
            case 'warning':
                NotificationManager.warning(message, title, timeOut);
                break;
            case 'error':
                NotificationManager.error(message, title, timeOut);
                break;
        }
};

export const isFormValid = (e) => {
    let idx = 0;
    const invalidFields = e.target.getElementsByClassName("form-control")
    for (idx = 0; idx < invalidFields.length; ++idx) {
      if (invalidFields[idx].className.includes("is-invalid")) {
        notify('warning', "Please input require fields", "Fail !", 3000);
        return false;
      }
    }
    return true;
}

