import exportServiceLogin from '../../componentes/Servicios/serviceLogin';
import verifyDataRobot from './verifyDataRobot';
import axios from 'axios';

const baseURL = 'http://localhost:8000';
const endpoint = '/upload/robot';

const handleResponse = (code, respuesta) => {
    if(code === 200) alert(respuesta.msg);
    else alert("Error en los datos");
    
    if(code === 400 || code === 404) exportServiceLogin.serviceLogOut();

};

const filesRobot = (dataRobot) => {
    const files = new FormData();
    files.append('config', dataRobot.config);
    files.append('avatar', dataRobot.avatar);
    return files;
};

const paramsData = (name) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = (user)? user.token : '';
    const userLogin = (user)? user.userlogin : '';

    return {
            name: name,
            tkn: token,
            username: userLogin
    }
};

const headers = () => {
    return {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
    }
};

const serviceUploadRobot = async (dataRobot) => {
    const resultsVerifyDataRobot = verifyDataRobot(dataRobot);
    if (resultsVerifyDataRobot.state === 'OK')
        await axios.post(baseURL + endpoint, paramsData(dataRobot.name), filesRobot(dataRobot), headers())
        .then(respuesta => handleResponse(respuesta.status, respuesta.data))
        .catch((error) => handleResponse(error.response.status, error.response.data));
    else
        alert(resultsVerifyDataRobot.data);
};

const exportServiceRobot = {
    serviceUploadRobot
};

export default exportServiceRobot;