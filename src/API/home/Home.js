import axios from 'axios';

export function fetchHomeInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/info`);
};

export function fetchHomeBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/baner`);
};

export function fetchMembers() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/members`);
};
export function fetchNouvelles() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/articles`);
};

export function fetchPartenaire() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/home/partenaire`);
};

export const subscribe = async (email) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/home/subscribe`, { email });
        console.log()
        return response.data;
    } catch (error) {
        throw error;
    }
};
