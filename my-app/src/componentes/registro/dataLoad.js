import { verifyDataUser } from './dataUser';
import axios from 'axios';

function loadDataUser(dataRegisterUser){
  const baseURL = 'http://localhost:8000/register';

  if(verifyDataUser(dataRegisterUser)){
    axios.post(baseURL, dataRegisterUser)
    .then( () =>  alert('Se envió el mail de confirmación'))
    .catch( (error) => {
      if (error.response.status === 409) alert(error.response.data.detail);
      else alert(error.response.status);
    });
  }
}

export default loadDataUser;