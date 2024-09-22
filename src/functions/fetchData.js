import axios from "axios";

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data.body; 
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};