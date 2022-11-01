import './Login.css'
import React, {useState } from 'react' 
import avatarRobot from "../../img/avatar-robot-defect.png"
import exportServiceLogin from '../Servicios/serviceLogin';
import validator from 'validator';

const UserLogin = () => {
    const [userlogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");
    // Si el usuarioAceptado es verdadero =>
    // Que esta logueado  => Que confirmo por email ser un jugador de Pyrobots
    const [usuarioAceptado, setUsuarioAceptado] = useState(false);
    const [avatar, setAvatar] = useState(avatarRobot);

    const onChangeUserlogin = (e) => {
        setUserlogin(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const Loguearse = (is_login_email, userlogin, password) => {
        exportServiceLogin.serviceLogIn(is_login_email, userlogin, password)
        .then(respuesta => setUsuarioAceptado(respuesta));
    };

    // No hay chequeo de password pues suponemos el usuario
    // escribira su password ingresado al registrarse y no otra cosa.

    const handleLogin = (e) => {
        e.preventDefault();
        if("" === userlogin || "" === password)
            alert("algunos campos estan vacios, escriba algo")
        else {
            if(validator.isEmail(userlogin)) {
                Loguearse(true, userlogin, password);
            }
            else {
                Loguearse(false, userlogin, password);
            }
            setUserlogin("");
            setPassword("");
        }
    };

    return (
        <div id='Login-screen'>
            <div id='sub-Login-screen'>
                <div>

                    <div id="imgs">
                        <div id="container-image-robot">
                            <img src={avatar} alt="avatar-robot" id="avatar-robot"/>
                        </div>
                    </div>


                    <div id='Login-title'>
                        Sign In
                    </div>

                    <form id='Login-form' onSubmit={handleLogin}>
                        <div>
                            <input
                                className='input-label-user'
                                type="text"
                                placeholder='Email o Username'
                                value={userlogin}
                                onChange={onChangeUserlogin}
                            >
                            </input>
                        </div>
                        <div>
                            <input
                                className='input-label-user'
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={onChangePassword}
                            >
                            </input>
                        </div>
                        <div id='login-submit'>
                            <input className='input-submit' type="submit" value="Submit" />
                        </div>
                        <div>
                            <p id='link-singUp'>
                                <a href="/users/registro">Sign Up</a>
                            </p>
                        </div>
                    </form>

                    {usuarioAceptado && (
                        <div id='alert alert-success mt-4' role="alert">
                            Bienvenido a Pyrobots !
                        </div>
                    )}

                </div>
            </div>
        </div>

    );
};

const Login = () => {
    return (
        <div>
            <UserLogin />
        </div>
    );
}

export default Login
