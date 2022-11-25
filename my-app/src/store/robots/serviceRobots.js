import exportServiceLogin from '../../componentes/Servicios/serviceLogin';
import verifyDataRobot from './verifyDataRobot';
import swal from 'sweetalert';
import API from '../api';

const endpointUploadRobot = '/upload/robot';
const endpointListRobots = '/robots';
const endpointImageRobot = '/image';

function alertSwal(msg, icon){
    swal({ text: msg, icon: icon, timer: '2500' }); 
}

const handleResponseUploadRobot = (code) => {
    alertSwal('Error en los datos', 'error'); 
    if(code === 400 || code === 404) exportServiceLogin.serviceLogOut();
};

function handleResponseListRobots(code, response, callback){
    callback(code === 200);
    if(code !== 200) return {state: 'ERROR', data: response.detail};
    
    localStorage.setItem('robotListUser', JSON.stringify(response));
    return {state: 'OK', data: response};
}

function getToken(){
    const user = JSON.parse(localStorage.getItem('user'));
    const token = (user)? user.token : '';

    return token;
}

function filesRobot(dataRobot){
    const files = new FormData();
    files.append('config', dataRobot.config);
    files.append('avatar', dataRobot.avatar);
    
    return files;
}

function dataAddRobotPost(dataRobot){
    return {
        params: {
            name: dataRobot.name,
            tkn: getToken()
        },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    };
}

const serviceUploadRobot = async (dataRobot) => {
    const resultsVerifyDataRobot = verifyDataRobot(dataRobot);
    if (resultsVerifyDataRobot.state === 'OK'){        
        await API.post(endpointUploadRobot, filesRobot(dataRobot), dataAddRobotPost(dataRobot))
            .then(respuesta => alertSwal(respuesta.data.msg, 'success'))
            .catch(error => handleResponseUploadRobot(error.response.status));
    }
    else alertSwal(resultsVerifyDataRobot.data, 'error');
};

async function serviceListRobots(callback){
    return await API.get(endpointListRobots, {params: {token: getToken()}})
        .then(response => handleResponseListRobots(response.status, response.data, callback))
        .catch((error) => handleResponseListRobots(error.response.status, error.response, callback));
};

function dataImagetRobot(robot_id){
    return {
        params: {
            token: getToken(),
            robot_id: robot_id
        }
    }
}

async function serviceImageRobot(callback, robot_id){
    await API.get(endpointImageRobot, dataImagetRobot(robot_id))
        .then(response => callback(response.data))
        .catch(err => callback(""));
}

export {serviceListRobots, serviceUploadRobot, serviceImageRobot};
