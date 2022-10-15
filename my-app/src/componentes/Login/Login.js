import React, { useState, useRef } from "react";

import exportServiceLogin from "./serviceLogin";
//instalo para validar si es un email, npm install validator
import validator from "validator";

const UserLogin = () => {
  const [userlogin, setUserlogin] = useState("");
  const [password, setPassword] = useState("");
  const [usuarioAceptado, setUsuarioAceptado] = useState(false);

  const onChangeUserlogin = (e) => {
    setUserlogin(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Loguearse = (is_login_email, userlogin, password) => {
    setUsuarioAceptado(
      exportServiceLogin.serviceLogIn(is_login_email, userlogin, password)
    );
  };

  // No hay chequeo de password pues suponemos el usuario
  // escribira su password ingresado al registrarse y no otra cosa.

  const handleLogin = (e) => {
    e.preventDefault();
    if ("" === userlogin || "" === password)
      alert("campos vacios, escriba algo");
    else {
      if (validator.isEmail(userlogin)) {
        // console.log(userlogin);
        Loguearse(true, userlogin, password);
        console.log("email validator");
      } else {
        console.log(userlogin);
        Loguearse(false, userlogin, password);
        console.log("username validator");
      }
      setUserlogin("");
      setPassword("");
    }
  };

  return (
    <div className="Login-screen">
      <div className="Login-title">Sing In</div>
      <form onSubmit={handleLogin}>
        <label>
          userlogin:
          <input
            type="text"
            placeholder="ingrese su email o username"
            value={userlogin}
            onChange={onChangeUserlogin}
          ></input>
        </label>
        <label>
          password:
          <input
            type="text"
            placeholder="ingrese su password"
            value={password}
            onChange={onChangePassword}
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {usuarioAceptado && (
        <div className="alert alert-success mt-4" role="alert">
          El usuario esta Logueado en PyRobots
        </div>
      )}
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <UserLogin />
    </div>
  );
};

export default Login;
