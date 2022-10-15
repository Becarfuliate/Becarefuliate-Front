import {verifyDataUser} from './dataUser';
import axios from 'axios';
import {useState} from 'react';

const baseURL = 'http://localhost:3000/Registro/Crear';

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

export default loadDataUser;