import exportServiceLogin from '../../componentes/Servicios/serviceLogin';
import verifyDataRobot from './verifyDataRobot';
import axios from 'axios';
import swal from 'sweetalert';

const baseURL = 'http://localhost:8000';
const endpoint = '/upload/robot';

const handleResponse = (code, respuesta) => {
    if(code === 200) {
        swal({
            text: respuesta.msg,
            icon: 'success',
            timer: '1800'
        });
    }
    else {
        swal({
            text: 'Error en los datos.',
            icon: 'error',
            timer: '1800'
        });
    }
    if(code === 400 || code === 404) exportServiceLogin.serviceLogOut();

};

const filesRobot = (dataRobot) => {
    const files = new FormData();
    files.append('config', dataRobot.config);
    files.append('avatar', dataRobot.avatar);
    return {body: files};
};

const paramsData = (name) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = (user)? user.token : '';

    return {
        name: name,
        tkn: token
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
    if (resultsVerifyDataRobot.state === 'OK') {
        console.log(paramsData(dataRobot.name));
        console.log(filesRobot(dataRobot));
        await axios.post(baseURL + endpoint, paramsData(dataRobot.name), filesRobot(dataRobot), headers())
        .then(respuesta => handleResponse(respuesta.status, respuesta.data))
        .catch((error) => handleResponse(error.response.status, error.response.data));
    }
    else {
        swal({
            text: resultsVerifyDataRobot.data,
            icon: 'error',
            timer: '2500'
        });
    }
};

const exportServiceRobot = {
    serviceUploadRobot
};

export default exportServiceRobot;