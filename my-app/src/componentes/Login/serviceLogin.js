import API from './api'

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

// respuesta corresponde a la data enviada desde el backEnd
// userlogin sera email o username dependiendo con cual se logueo el usuario
const manejoRespuesta = (code, respuesta, userlogin) => {
    switch (code) {
        case 200:
            localStorage.setItem('user', JSON.stringify({
                userlogin: userlogin,
                token: respuesta.token,
            }));
            window.location.reload();
            break;
        case 400:
            alert(respuesta.detail);
            break;
        default:
            alert("Error No Contemplado, " + respuesta)
            break;
    }
}

const serviceLogIn = async (is_login_email, userlogin, password) => {
    return await API.post('login', dataLogin(is_login_email, userlogin, password))
    .then(respuesta => {
        manejoRespuesta(respuesta.status, respuesta.data, userlogin);
    })
    .catch((error) => manejoRespuesta(error.response.status, error.response.data, userlogin))
    .then(Logueado => Logueado)
};

const serviceLogOut = () => {
    localStorage.removeItem('user');
};

const exportServiceLogin = {
  serviceLogIn,
  serviceLogOut
}

export default exportServiceLogin;