import API from './api'
import React from 'react';

let email = "";
let username = "";
const Envio = (is_login_email, userlogin, password) => {
    if(is_login_email) {
        email = userlogin;
        API.post('login', JSON.stringify({
            email: email,
            password: password
        }))
        .then((respuesta) => {
            if(0 === respuesta.data.codigo) {
                localStorage.setItem('user', JSON.stringify({
                    userlogin: userlogin,
                    token: respuesta.data.token,
                }))
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
            }
            // return respuesta.data;
        })
        .catch((error) => {
            alert("serviceLogIn error: " + error);
        })
    } else {
        username = userlogin;
        API.post('login', JSON.stringify({
            username: username,
            password: password
        }))
        .then((respuesta) => {
            if(0 === respuesta.data.codigo) {
                localStorage.setItem('user', JSON.stringify({
                    userlogin: userlogin,
                    token: respuesta.data.token,
                }))
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
            }
            // return respuesta.data;
        })
        .catch((error) => {
            alert("serviceLogIn error: " + error);
        })
    }
};

const serviceLogIn = (is_login_email, userlogin, password) => {
    return Envio(is_login_email, userlogin, password);
};

const serviceLogOut = () => {
    localStorage.removeItem('user');
};

export default { serviceLogIn, serviceLogOut };