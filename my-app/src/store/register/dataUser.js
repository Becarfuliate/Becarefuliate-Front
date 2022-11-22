import swal from "sweetalert";

function verifyEmail(email){
  return (/^\w+([-|.]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|mi.unc)\.(?:|com|es|edu.ar)+$/.test(email));
}

function verifyPassword(password){
  const passwordHaveSpecialCharacters = /\W/.test(password);
  const passwordHaveSpace = /\s/.test(password);
  const passwordHaveUpperCaseAndLowerCase = /^(?=.*[A-Z])(?=.*[a-z])/.test(password);
  const passwordHaveNumber = /[1-9]/.test(password);
  
  return password.length >= 8 && 
        passwordHaveSpecialCharacters && 
        passwordHaveUpperCaseAndLowerCase &&
        !passwordHaveSpace &&
        passwordHaveNumber;
}

function verifyName(name){
  const nameIsEmpty = name === "";
  const nameHaveSpace = /\s/.test(name);

  return !nameIsEmpty & !nameHaveSpace;
}

export function verifyDataUser(dataUser){
  if (!verifyName(dataUser.username)){
    swal({
      text: 'El nombre no puede estar vacío ni contener espacios.',
      icon: 'warning',
      timer: '1800'
    });
    return false;
  } else if(!verifyPassword(dataUser.password)){
    swal({
      text: 'La contraseña es inválida.',
      icon: 'warning',
      timer: '1800'
    });
    return false;
  } else if(!verifyEmail(dataUser.email)){
    swal({
      text: 'La dirección de correo es inválida.',
      icon: 'warning',
      timer: '1800'
    });
    return false;
  }
  return true;
}