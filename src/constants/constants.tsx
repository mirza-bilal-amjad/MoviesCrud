import axios from "axios/index";

export const API_BASE_URL = 'https://fakestoreapi.com';
export const API_BASE_URL2 = 'https://dummyapi.online/api';

export const instance = axios.create({
    baseURL: API_BASE_URL,
})
export const instance2 = axios.create({
    baseURL: API_BASE_URL2,
})