import {defaultDataUser, verifyDataUser} from './data/dataUser';
import React, {useState} from 'react';
import './Registro.css';

function requestAndLoadDataBack(dataUser){
  return {OK:true, campoInvalido:'name/email'};
}

function loadDataUser(dataRegisterUser){
  console.log(dataRegisterUser);
  if(verifyDataUser(dataRegisterUser)){
    /* 
    Pasar datos al back. Si el back responde que todo salió bien, entonces se mandará 
    el email de confirmación. Caso contrario, el back devolverá cuales datos dan error y se
    pedirá al usuario que los ingrese nuevamente.
   */
    const response = requestAndLoadDataBack(dataRegisterUser);
    if(response.OK) alert('Se envió el mail de confirmación');
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