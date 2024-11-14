import axios from "axios";

const API_URL = "http://localhost:3001";

export const getProjects = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/projects`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};
