import API from './api'
import React from 'react';

const dataLogin = (is_login_email ,userlogin, password) => {
    let email = "";
    let username = "";
    if(is_login_email) {
        email = userlogin;
        return {
            username: "",
            password : password,
            email : email
        };
    } else {
        username = userlogin
        return {
            username: username,
            password : password,
            email : ""
        };
    }
};

const serviceLogIn = (is_login_email, userlogin, password) => {
    let Logueado = false;
    if(is_login_email) {
        API.post('login', dataLogin(is_login_email, userlogin, password))
        .then((respuesta) => {
            if(200 === respuesta.status) {
                localStorage.setItem('user', JSON.stringify({
                    userlogin: userlogin,
                    token: respuesta.data.token,
                }))
                console.log("ingreso: ", Logueado);
                Logueado = true; // si todo salio bien
                console.log("salio: ", Logueado);
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
                Logueado = false; // si todo salio bien
            }
            // return respuesta.data;
        })
        .catch((error) => {
            alert("email serviceLogIn ERROR: " + error);
        })
        return Logueado;
    } else {
        API.post('login', dataLogin(is_login_email, userlogin, password))
        .then((respuesta) => {
            if(200 === respuesta.status) {
                localStorage.setItem('user', JSON.stringify({
                    userlogin: userlogin,
                    token: respuesta.data.token,
                }))
                Logueado = true; // si todo salio bien
            } else {
                alert("Error al intentar logearte, respuesta: " + respuesta);
                Logueado = false;
            }
        })
        .catch((error) => {
            alert("username serviceLogIn ERROR: " + error);
        })
        return Logueado;
    }
};

const serviceLogOut = () => {
    localStorage.removeItem('user');
};

const exportServiceLogin = {
  serviceLogIn,
  serviceLogOut
}

export default exportServiceLogin;