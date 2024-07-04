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


export const fetchMember = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/about/members/${id}`);
      console.log(response.data.info);
      return response.data.info;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'article:', error);
      throw error;
    }
  };