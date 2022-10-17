import {defaultDataUser} from './dataUser';
import loadDataUser from './dataLoad';
import React, {useState} from 'react';
import './Register.css';

function loadImg64(file, callback, dataUser) {
	const reader = new FileReader();
  reader.onload = () => {
    const img64 = reader.result;
    callback({ ...dataUser, "avatar": img64});
  };
	reader.readAsDataURL(file);
}

function Register(){
  const [dataUser, setDataUser] = useState(defaultDataUser);

  const dataUserChange = (formBarInfo) => {
    const dateUserMod = formBarInfo.target;
    const {name,value} = dateUserMod;
    
    if (name !== "avatar") setDataUser({ ...dataUser, [name]: value});
    else loadImg64(dateUserMod.files[0], setDataUser, dataUser);
  };

  return (
  <div className="login-page">
    <div className="form">
      <form className="register-form" onSubmit={() => loadDataUser(dataUser)}>
        <input type="text" placeholder="Nombre" name= "username"
        onChange= {dataUserChange} required/>

        <input type="password" placeholder="Contraseña" name= "password"
        onChange= {dataUserChange} required/>

        <input type="email" placeholder="Correo electrónico"  name= "email" 
        onChange= {dataUserChange} required/>

        <input type="file" accept="image/png, image/jpeg" placeholder= 'foto por defecto' name= "avatar"
        onChange= {dataUserChange}/>

        <button type= "submit">Registrar</button>
        <p class="message">Already registered? <a href="/users/login">Sign In</a></p>
      </form>
    </div>
  </div>);
}


export default Register;