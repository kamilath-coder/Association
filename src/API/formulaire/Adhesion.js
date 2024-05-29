import axios from 'axios';
export const sendFormData = async (formData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/adhesion/store`,formData)
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        throw error;
    }
};