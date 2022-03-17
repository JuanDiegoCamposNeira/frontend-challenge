import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
})

export default axiosClient;