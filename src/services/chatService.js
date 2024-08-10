import axios from 'axios';

const API_URL = 'http://localhost:8081/app';

export const sendMessage = (message) => {
    return axios.post(`${API_URL}/sendMessage`, message);
};

export const getMessages = () => {
    return axios.get(`${API_URL}/messages`);
};
