import axios, { AxiosInstance } from "axios";

const apiRequester: AxiosInstance = axios.create({
    baseURL: "/api",
    timeout: 5000,
});

export default apiRequester;