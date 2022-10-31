import './Login.css'
import React, {useState} from 'react' 
import avatarRobot from "../../img/avatar-robot-defect.png"
import exportServiceLogin from './serviceLogin';
import validator from 'validator';

const UserLogin = () => {
    const [userlogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");
    // Si el usuarioAceptado es verdadero =>
    // Que esta logueado  => Que confirmo por email ser un jugador de Pyrobots
    const [usuarioAceptado, setUsuarioAceptado] = useState(false);
    const [avatar] = useState(avatarRobot);

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
        <div className='Login-screen'>
            <div className='sub-Login-screen'>
                <div>

                    <div className="imgs">
                        <div className="container-image-robot">
                            <img src={avatar} alt="avatar-robot" className="avatar-robot"/>
                        </div>
                    </div>


                    <div className='Login-title'>
                        Sign In
                    </div>

                    <form className='Login-form' onSubmit={handleLogin}>
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
                        <div className='login-submit'>
                            <input className='input-submit' type="submit" value="Submit" />
                        </div>
                        <div>
                            <p className='link-singUp'>
                                <a href="/users/registro">Sign Up</a>
                            </p>
                        </div>
                    </form>

                    {usuarioAceptado && (
                        <div className='alert alert-success mt-4' role="alert">
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
