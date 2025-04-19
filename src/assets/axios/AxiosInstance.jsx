import axios from "axios";

const AxiosInstance = axios.create(
    {
        baseURL:"https://api-24.snipedev.com/api"
    }
);
export default AxiosInstance;