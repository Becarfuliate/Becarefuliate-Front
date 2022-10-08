import defaultDataUser from './data/dataUser';
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

export function Registro(){
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

        <input className="photo-user" type="file" accept="image/png, image/jpeg" 
        onChange={dataUserChange}/>

        <button type= "submit">Registrar</button>
      </form>
    </div>
  </div>);
}