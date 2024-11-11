import axios from 'axios';

export const API_SERVICE = axios.create({
    baseURL: "http://localhost:5000/v3",
});

API_SERVICE.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            'authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
        }
    }
});