function verifyEmail(email){
  return (/^\w+([-|.]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|mi.unc)\.(?:|com|es|edu.ar)+$/.test(email));
}

function verifyPassword(password){
  const passwordHaveSpecialCharacters = /\W/.test(password);
  const passwordHaveSpace = /\s/.test(password);
  const passwordHaveUpperCaseAndLowerCase = /^(?=.*[A-Z])(?=.*[a-z])/.test(password);
  
  return password.length >= 8 && 
        passwordHaveSpecialCharacters && 
        passwordHaveUpperCaseAndLowerCase &&
        !passwordHaveSpace;
}

export function verifyDataUser(dataUser){
  if (dataUser.Name === ""){
    alert('Falta el nombre');
    return false;
  } else if(!verifyPassword(dataUser.Password)){
    alert('La contraseña es inválida');
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
    Photo: {}
};