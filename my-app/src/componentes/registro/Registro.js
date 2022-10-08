import React, {useState} from 'react';
import './Registro.css';

/*
function validarEmail (valor) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor));
}
*/

const loadDataUser = ({name, password, email}) => {
  if (name === "") console.log('Falta el nombre');
  else if(password.length < 8) console.log('La contraseña tiene menos de 8 caracteres');
};

export function Registro(){
  const [nameUser, setName] = useState('');
  const [passUser, setPass] = useState('');
  const [emailUser, setEmail] = useState('');

  return (
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="Nombre" onChange = {(valor) => setName(valor.target.value)}/>
        <input type="password" placeholder="Contraseña" onChange = {(valor) => setPass(valor.target.value)}/>
        <input type="email" placeholder="Correo electrónico" onChange = {(valor) => setEmail(valor.target.value)}/>
        <button type= "submit" onClick = {loadDataUser({name: nameUser, password: passUser, email: emailUser})}>Registrar</button>
        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form>
    </div>
  </div>);
}