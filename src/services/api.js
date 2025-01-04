import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Your backend URL

export const saveWireframe = async (data) => {
    return axios.post(`${API_BASE_URL}/saveProject`, data);
};

export const fetchWireframes = async (userId) => {
    return axios.get(`${API_BASE_URL}/loadProjects/${userId}`);
};
