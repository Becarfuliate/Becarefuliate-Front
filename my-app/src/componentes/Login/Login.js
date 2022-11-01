import React, {useState} from 'react' 
import exportServiceLogin from '../Servicios/serviceLogin';
import validator from 'validator';
import { useHistory } from 'react-router-dom';

const UserLogin = () => {
    const [userlogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserlogin = (e) => {
        setUserlogin(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const Loguearse = (is_login_email, userlogin, password) => {
       exportServiceLogin.serviceLogIn(is_login_email, userlogin, password);
    };

    // No hay chequeo de password pues suponemos el usuario
    // escribira su password ingresado al registrarse y no otra cosa.

    const handleLogin = (e) => {
        e.preventDefault();
        if("" === userlogin || "" === password)
            alert("algunos campos estan vacios, escriba algo")
        else {
            Loguearse(validator.isEmail(userlogin), userlogin, password);
            setUserlogin("");
            setPassword("");
        }
    };

    const history = useHistory();
    React.useEffect(() => {
        if (localStorage.getItem("user")) history.push('/');
    }, [localStorage]);

    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form" onSubmit={handleLogin}>
                    <p>INICIAR SESIÓN</p>
                    <input type="text" placeholder='Email o Username' value={userlogin} onChange={onChangeUserlogin}/>
                    <input type="password" placeholder='Password' value={password} onChange={onChangePassword} />
                     <input type="submit" value= 'Submit'/>
                </form>
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
