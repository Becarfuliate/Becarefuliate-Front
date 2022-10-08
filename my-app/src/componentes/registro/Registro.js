import defaultDataUser from './dataUser';
import React, {useState} from 'react';
import './Registro.css';

function verifyEmail(email){
  return (/^\w+([-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email));
}

function verifyDataUser(dataUser){
  console.log(typeof dataUser.Password);
  if (dataUser.Name === ""){
    alert('Falta el nombre');
    return false;
  } else if(dataUser.Password.length < 8){
    alert('La contraseña tiene menos de 8 caracteres');
    return false;
  } else if(!verifyEmail(dataUser.Email)){
    alert('el email es inválido');
    return false;
  } 
  return true;
}

function requestAndLoadDataBack(dataUser){
  return {OK:true, campoInvalido:'name/email'};
}

function sendMail(email){
  alert('mail de confirmación enviado');
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
    if(response.OK) sendMail(dataRegisterUser.Email);
    else alert('tal dato no es correcto');
  }
}

export function Registro(){
  const [dataUser, setDataUser] = useState(defaultDataUser);
  
  return (
  <div className="login-page">
    <div className="form">
      <form className="register-form" onSubmit={() => loadDataUser(dataUser)}>
        <input type="text" placeholder="Nombre" 
                onChange= {(name) => setDataUser({ ...dataUser, Name: name.target.value})}/>

        <input type="password" placeholder="Contraseña" 
                onChange= {(password) => setDataUser({ ...dataUser, Password: password.target.value})}/>

        <input type="email" placeholder="Correo electrónico" 
                onChange= {(email) => setDataUser({ ...dataUser, Email: email.target.value})}/>

        <input className="photo-user" type="file" accept="image/png, image/jpeg" 
                onChange={(photo) => setDataUser({ ...dataUser, Photo: photo.target.value})}/>

        <button type= "submit">Registrar</button>
      </form>
    </div>
  </div>);
}