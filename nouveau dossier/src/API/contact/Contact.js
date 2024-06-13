// api.js
import axios from 'axios';

export const sendFormData = async (formData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/contact/store`,formData)
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        throw error;
    }
};


export function fetchContactInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact/info`);
};

export function fetchContactBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/contact/baner`);
};
