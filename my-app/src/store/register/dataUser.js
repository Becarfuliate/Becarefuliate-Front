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
    alert('El nombre no puede estar vacío o contener espacios');
    return false;
  } else if(!verifyPassword(dataUser.password)){
    alert('La contraseña es inválida');
    return false;
  } else if(!verifyEmail(dataUser.email)){
    alert('el email es inválido');
    return false;
  }
  return true;
}