import axios from 'axios';

const API_BASE = 'http://demo-slot-server.herokuapp.com/slot';

function parseResponse(response) {
    return response.data;
}

export function fetchConfig() {
    return axios.get(`${API_BASE}/config`).then(parseResponse);
}

export function fetchState() {
    return axios.get(`${API_BASE}/state`).then(parseResponse);
}

export function resetState() {
    return axios.get(`${API_BASE}/reset`).then(parseResponse);
}

export function spin(lineBet, linesCount) {
    return axios.get(`${API_BASE}/spin?lineBet=${lineBet}&linesCount=${linesCount}`).then(parseResponse);
}