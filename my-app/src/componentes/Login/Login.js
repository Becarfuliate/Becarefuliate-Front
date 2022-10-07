// El usuario para loguearse necesita:

// Contraseña con más de 8 caracteres (contando mayúsculas y minúsculas).

// Nombre o email para identificar la cuenta.

// Tener la cuenta confirmada.

import React, {useState, useRef} from 'react' 
//instalo para validar si es un email
import validator from 'validator';

const Login = () => {
    const [userlogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");
    const [cuentaActivada, setCuentaActivada] = useState(false);

    const onChangeUserlogin = (e) => {
        setUserlogin(e.target.value);
    };
    console.log("ingreso de datos: " + userlogin);

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if("" === userlogin || "" === password)
            alert("campos vacios, escriba algo")
        else {
            // cheque si userlogin es un usename o un email viendo si tiene un @
            if(validator.isEmail(userlogin))
                console.log("email validator");
            else
                console.log("username validator");
            // Si pregunta si el email fue confirmado.
            setCuentaActivada(true);
            console.log(cuentaActivada);
            alert('Submit ' + userlogin + " " + password);
        }
    };

    return (
        <div className='Login-screen'>
            <div className='Login-title'>
                Sing In
            </div>
            <form onSubmit={handleLogin}>
                <label>
                    userlogin:
                    <input
                        type="text"
                        placeholder='ingrese su email o username'
                        value={userlogin}
                        onChange={onChangeUserlogin}
                    >
                    </input>
                </label>
                <label>
                    password:
                    <input
                        type="text"
                        placeholder='ingrese su password'
                        value={password}
                        onChange={onChangePassword}
                    >
                    </input>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login