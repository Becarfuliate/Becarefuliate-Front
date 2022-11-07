import exportServiceLogin from '../../componentes/Servicios/serviceLogin';
import verifyDataRobot from './verifyDataRobot';
import axios from 'axios';

const handleResponse = (code, respuesta) => {
    switch (code) {
        case 200:
            alert(respuesta.msg);
            break;
        case 409:
            alert(respuesta.detail);
            break;
        case 400:
            alert(respuesta.detail);
            exportServiceLogin.serviceLogOut();
            break;
        case 404:
            alert(respuesta.detail);
            exportServiceLogin.serviceLogOut();
            break;
        case 422:
            alert(respuesta.detail);
            break;    
        default:
            alert("Error No Contemplado, " + respuesta);
            break;
    }
};

const filesRobot = (filePy, fileImg) => {
    let files = new FormData();
    files.append('config', filePy);
    files.append('avatar', fileImg);
    return files;
};

const paramsData = (name) => {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.token) {
        return {
            params: {
                name: name,
                tkn: user.token,
                username: user.userlogin
            }
        }
    } else {
        return {
            params: {
                name: name,
                tkn: "",
                username: ""
            }
        }
    }
};

const headers = () => {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    }
};

const serviceUploadRobot = async (dataRobot) => {
    console.log(dataRobot);
    const resultsVerifyDataRobot = verifyDataRobot(dataRobot);
    if (resultsVerifyDataRobot.state === 'OK')
        await axios.post('http://localhost:8000/upload/robot', filesRobot(dataRobot.config, dataRobot.avatar), 
                        paramsData(dataRobot.name) ,headers())
        .then(respuesta => handleResponse(respuesta.status, respuesta.data))
        .catch((error) => handleResponse(error.response.status, error.response.data));
    else
        alert(resultsVerifyDataRobot.data);
};

const exportServiceRobot = {
    serviceUploadRobot
};

export default exportServiceRobot;