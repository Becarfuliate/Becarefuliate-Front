import React, {useState} from 'react';
import './Registro.css';

function verifyEmail(email){
  return (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email));
}

function verifyDataUser(dataUser){
  if (dataUser.name === ""){
    alert('Falta el nombre');
    return false;
  } else if(dataUser.password.length <= 8){
    alert('La contraseña tiene menos de 8 caracteres');
    return false;
  } else if(!verifyEmail(dataUser.email.toString())){
    alert('el email es inválido');
    return false;
  } 
  return true
  
}
function requestAndLoadDataBack(dataUser){
  return {OK:true, campoInválido:'name/email'};
}
function loadDataUser(dataUser){
  if(verifyDataUser(dataUser)){
  /* 
  Pasar datos al back. Si el back responde que todo salió bien, entonces se mandará 
  el email de confirmación. Caso contrario, el back devolverá cuales datos dan error y se
  pedirá al usuario que los ingrese nuevamente.
  */
  const response = requestAndLoadDataBack(dataUser);
  if(response.OK) alert('mail de confirmación envíado');
  else alert('tal dato no es correcto');
  }
}

export function Registro(){
  const [nameUser, setName] = useState('');
  const [passUser, setPass] = useState('');
  const [emailUser, setEmail] = useState('');

  return (
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="Nombre" onChange = {(email) => setName(email.target.value)}/>
        <input type="password" placeholder="Contraseña" onChange = {(email) => setPass(email.target.value)}/>
        <input type="email" placeholder="Correo electrónico" onChange = {(email) => setEmail(email.target.value)}/>
        <button type= "submit" onClick = {() => loadDataUser({name: nameUser, password: passUser, email: emailUser})}>Registrar</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form>
    </div>
  </div>);
}