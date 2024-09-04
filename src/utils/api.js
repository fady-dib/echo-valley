import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3006/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
    },
});


export default api;