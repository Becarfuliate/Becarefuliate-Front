import API from './api'
import React from 'react';

let email = "";
let username = "";
const Envio = (is_login_email, userlogin, password) => {
    if(is_login_email) {
        email = userlogin;
        API.post('login', JSON.stringify({
            username: "",
            password : password,
            email : email
        }))
        .then((respuesta) => {
            if(200 === respuesta.status) {
                localStorage.setItem('user', JSON.stringify({
                    email: email,
                    token: respuesta.data.token,
                }))
                return true; // si todo salio bien
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
                return false; // si todo salio bien
            }
            // return respuesta.data;
        })
        .catch((error) => {
            alert("email serviceLogIn ERROR: " + error);
        })
    } else {
        username = userlogin;
        API.post('login', JSON.stringify({
            username: username,
            password : password,
            email : ""
        }))
        .then((respuesta) => {
            if(200 === respuesta.status) {
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    token: respuesta.data.token,
                }))
                return true; // si todo salio bien
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
                return false;
            }
        })
        .catch((error) => {
            alert("username serviceLogIn ERROR: " + error);
        })
    }
};

const serviceLogIn = (is_login_email, userlogin, password) => {
    return Envio(is_login_email, userlogin, password);
};

const serviceLogOut = () => {
    localStorage.removeItem('user');
};

const exportServiceLogin = {
  serviceLogIn,
  serviceLogOut
}

export default exportServiceLogin;