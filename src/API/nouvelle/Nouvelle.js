import axios from 'axios';

export function fetchNouvelleInfo() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/nouvelle/info`);
};

export function fetchNouvelleBanner() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/nouvelle/baner`);
};

export function fetchNouvelles() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/nouvelle/articles`);
};

export function fetchNouvelleslast() {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/api/nouvelle/last`);
};

export const fetchArticle = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/nouvelle/article/${id}`);
    console.log(response.data.info);
    return response.data.info;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    throw error;
  }
};