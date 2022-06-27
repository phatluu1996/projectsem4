import axios from 'axios'; 

export const api = axios.create({
    baseURL:'http://localhost:8080/api'
});

export const GET_ALL = "all";
export const GET_ONE = "one";
export const ADD     = "add";
export const UPDATE  = "update";
export const DELETE  = "delete";

