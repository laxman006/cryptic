const axios = require('axios');

class ApiService {
    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            timeout: 1000,
        });
    }

    async get(endpoint) {
        try {
            const response = await this.axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    async post(endpoint, data) {
        try {
            const response = await this.axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw new Error(`Error posting data: ${error.message}`);
        }
    }
}

module.exports = new ApiService('https://kofuku-idealabs.onrender.com/');

