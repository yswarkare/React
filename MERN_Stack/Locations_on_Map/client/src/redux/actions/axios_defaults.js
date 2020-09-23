import axios from "axios";

const defaults = {
    baseURL: "/api",
}

const api = axios.create(defaults);

export default api;