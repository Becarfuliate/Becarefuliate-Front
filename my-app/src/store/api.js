import axios from "axios";

const URL = 'http://127.0.0.1:8000/'; 

export default axios.create({
        baseURL: URL,
        timeout: 0,
});