import axios from "axios";

const URL = 'http://127.0.0.1:8000/'; 
const endpoints = {
        uploadRobot: '/upload/robot',
        listRobots: '/robots',
        imageRobot: '/image',
        runSimulation: '/simulation/add'
};

function getUserLogin(){
        const user = JSON.parse(localStorage.getItem('user'));
        const userlogin = (user)? user.userlogin : '';
    
        return userlogin;    
}

function getToken(){
        const user = JSON.parse(localStorage.getItem('user'));
        const token = (user)? user.token : '';
    
        return token;
}    
const API = axios.create({ baseURL: URL, timeout: 0 });

export {API, getToken, getUserLogin, endpoints};