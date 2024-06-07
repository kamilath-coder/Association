// api.js
import axios from 'axios';

// export const sendFormData = async (formData) => {
//     try {
//         const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/contact/store`,formData)
//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de l\'envoi du formulaire :', error);
//         throw error;
//     }
// };


export function fetchActivityInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/activity/info`);
};

export function fetchActivityBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/activity/baner`);
};

export function fetchNouvelles() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/activity/articles`);
};

export function fetchNouvelleslast() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/activity/last`);
};


export const fetchArticle = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/activity/article/${id}`);
    console.log(response.data.info);
    return response.data.info;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    throw error;
  }
};


export const sendFormData = async (formData) => {
  try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/activity/store`,formData)
      return response.data;
  } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      throw error;
  }
};