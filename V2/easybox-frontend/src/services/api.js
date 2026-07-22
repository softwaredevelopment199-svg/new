import axios from 'axios';
class ApiClient {
    constructor() {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "baseURL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Add token to requests
        this.client.interceptors.request.use((config) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        // Handle 401 errors
        this.client.interceptors.response.use((response) => response, (error) => {
            if (error.response?.status === 401) {
                localStorage.removeItem('authToken');
                window.location.href = '/login';
            }
            return Promise.reject(error);
        });
    }
    async get(url, config = {}) {
        const { data } = await this.client.get(url, config);
        return data.data;
    }
    async post(url, payload, config = {}) {
        const { data } = await this.client.post(url, payload, config);
        return data.data;
    }
    async put(url, payload, config = {}) {
        const { data } = await this.client.put(url, payload, config);
        return data.data;
    }
    async patch(url, payload, config = {}) {
        const { data } = await this.client.patch(url, payload, config);
        return data.data;
    }
    async delete(url, config = {}) {
        const { data } = await this.client.delete(url, config);
        return data.data;
    }
}
