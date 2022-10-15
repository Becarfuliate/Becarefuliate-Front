import axios from "axios";

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token) {
        return { Authorization: 'Bearer' + user.token}
    } else {
        return {};
    }
};

const URL = 'http://127.0.0.1:8000/'; // aca seria la url del back

export default axios.create({
        baseURL: URL,
        timeout: 0,
        headers: authHeader()
});