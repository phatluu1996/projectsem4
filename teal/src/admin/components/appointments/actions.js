import { api, ADD, DELETE, GET_ALL, GET_ONE, UPDATE } from '../../../constants';

export const appointmentAction = (url, method, callback, data = {}, id = undefined) => {
    const response = undefined;
    switch (method) {
        case GET_ALL:
            api.get(url).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        case GET_ONE:
            api.get(url + "/" + id).then(res => {
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
            api.put(url + "/" + id, data).then(res => {
                callback(res);
            }).catch(err => {
                console.log(err);
            });
            break;

        case DELETE:
            api.delete(url + "/" + id).then(res => {
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

