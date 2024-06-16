import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/documents';

interface DocumentPayload {
    content: string;
}

const documentApi = {
    getDocument: async (id: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching document:', error);
            throw error;
        }
    },
    saveDocument: async (id: string, payload: DocumentPayload) => {
        try {
            await axios.post(`${BASE_URL}/${id}`, payload);
        } catch (error) {
            console.error('Error saving document:', error);
            throw error;
        }
    }
};

export default documentApi;