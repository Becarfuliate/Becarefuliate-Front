import API from './api';
import exportServiceLogin from '../Servicios/serviceLogin';

// guardamos el nombre del robot pues esta sera unico en el back
// y el back tendra almacenado el avatar y el archivo del mismo
const addRobotinStorage = (nameRobot) => {
    let storage = localStorage.getItem('robots');
    if (storage) {
      let storageContent = JSON.parse(localStorage.getItem('robots'));
      storageContent.push(nameRobot);
      localStorage.setItem("robots", JSON.stringify(storageContent));
    } else {
      localStorage.setItem("robots", JSON.stringify([nameRobot]));
    }
};

const handleResponse = (code, respuesta, nameRobot) => {
    let savedRobot = false;
    switch (code) {
        case 200:
            addRobotinStorage(nameRobot);
            alert(respuesta.msg);
            savedRobot = true;
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
    return savedRobot;
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

// usar comillas simples inclinadas `` para estos pasajes de datos con parametros 
const serviceUploadRobot = async (filePy, fileImg, name) => {
    return await API.post(`upload/robot`, filesRobot(filePy, fileImg), paramsData(name) ,headers())
    .then(respuesta => handleResponse(respuesta.status, respuesta.data, name))
    .catch((error) => handleResponse(error.response.status, error.response.data, name))
    .then(savedRobot => savedRobot)
};

const exportServiceRobot = {
    serviceUploadRobot
};

export default exportServiceRobot;