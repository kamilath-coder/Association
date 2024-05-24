import axios from 'axios';

export function fetchAboutInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/about/info`);
};

export function fetchAboutBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/about/baner`);
};

export function fetchMembers() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/about/members`);
};