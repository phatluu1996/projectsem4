import axios from 'axios'; 

export const api = axios.create({
    baseURL:'http://localhost:8080/api'
});

export const GET = "get";
export const ADD     = "add";
export const UPDATE  = "update";
export const DELETE  = "delete";

