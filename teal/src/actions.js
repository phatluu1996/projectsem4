import axios from 'axios';
import { api, ADD, DELETE, UPDATE, GET } from './constants';

export const axiosAction = (url, method, callback, data = {}) => {
    const response = undefined;
    switch (method) {
        case GET:
            api.get(url).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        case ADD:
            api.post(url, data).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        case UPDATE:
            api.put(url, data).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        case DELETE:
            api.delete(url).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        default:
            api.get(url).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;
    }
}

// {
//     url: "", method : "", callback : null, data : { }
// }

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
        // errArr.map(err => {
        //     console.log(err);
        // })
        console.log(errArr);
    });
}

