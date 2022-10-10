import defaultPhotoUser from '../img/r1.png';

function verifyEmail(email){
  return (/^\w+([-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email));
}

function verifyPassword(password){
    const passwordHaveSpecialCharacters = /\W|_/.test(password);
    const passwordHaveUpperCaseAndLowerCase = /^(?=.*[A-Z])(?=.*[a-z])/.test(password);

    return password.length >= 8 && passwordHaveSpecialCharacters && passwordHaveUpperCaseAndLowerCase;
}

export function verifyDataUser(dataUser){
  if (dataUser.Name === ""){
    alert('Falta el nombre');
    return false;
  } else if(!verifyPassword(dataUser.Password)){
    alert('La contraseña tiene menos de 8 caracteres');
    return false;
  } else if(!verifyEmail(dataUser.Email)){
    alert('el email es inválido');
    return false;
  } 
  return true;
}

export const defaultDataUser = {
    Name: "",
    Password: "",
    Email: "",
    Photo: defaultPhotoUser
};