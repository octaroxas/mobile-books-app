import axios from "axios";

const api = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    baseURL: ''
})

export default api;