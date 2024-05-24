import axios from 'axios';

export function fetchHomeInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/info`);
};

export function fetchHomeBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/homr/baner`);
};
