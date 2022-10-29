import React, {useState, useRef} from 'react' 
//import avatarRobot from "../../img/avatar-robot-defect.png"
import exportServiceLogin from './serviceLogin';
import validator from 'validator';
const avatarRobot = ''

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
        <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={handleLogin}>
                        <p>INICIAR SESIÓN</p>
                        <input
                                type="text"
                                placeholder='Email o Username'
                                value={userlogin}
                                onChange={onChangeUserlogin}/>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={onChangePassword} />
                        <button type= "submit">Submit</button>
                    </form>

                    {usuarioAceptado && (
                        <div className='alert alert-success mt-4' role="alert">
                            Bienvenido a Pyrobots !
                        </div>
                    )}

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
