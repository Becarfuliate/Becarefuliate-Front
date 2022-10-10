import {defaultDataUser, verifyDataUser} from './data/dataUser';
import axios from 'axios';
import React, {useState} from 'react';
import './Register.css';

const baseURL = 'Cuentas/Crear';

function CreateAccountForUser(dataUser){
  const [accountCreationInfo, setAccountCreationInfo] = useState(null);
  axios.post(baseURL, dataUser)
  .then(
    (dataLoadResponse) => setAccountCreationInfo(dataLoadResponse.data)
  );

  return accountCreationInfo;
}

function loadDataUser(dataRegisterUser){
  if(verifyDataUser(dataRegisterUser)){
    const accountCreationInfo = CreateAccountForUser(dataRegisterUser);

    if(accountCreationInfo.OK) alert('Se envió el mail de confirmación');
    else alert('tal dato no es correcto');
  }
}

export function Register(){
  const [dataUser, setDataUser] = useState(defaultDataUser);
  
  const dataUserChange = (formBarInfo) => {
    const {name,value} = formBarInfo.target;
    setDataUser({ ...dataUser, [name]: value});
  };

  return (
  <div className="login-page">
    <div className="form">
      <form className="register-form" onSubmit={() => loadDataUser(dataUser)}>
        <input type="text" placeholder="Nombre" name= "Name"
        onChange= {dataUserChange} required/>

        <input type="password" placeholder="Contraseña" name= "Password"
        onChange= {dataUserChange} required/>

        <input type="email" placeholder="Correo electrónico"  name= "Email" 
        onChange= {dataUserChange} required/>

        <input type="file" accept="image/png, image/jpeg" placeholder= 'foto por defecto' name= "Photo"
        onChange={dataUserChange}/>

        <button type= "submit">Registrar</button>
      </form>
    </div>
  </div>);
}