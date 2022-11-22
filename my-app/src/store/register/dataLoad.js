import { verifyDataUser } from './dataUser';
import axios from 'axios';

async function loadDataUser(dataRegisterUser){
  const baseURL = 'http://localhost:8000/register';
  //console.log(dataRegisterUser);
  if(verifyDataUser(dataRegisterUser)) 
    return await axios.post(baseURL, dataRegisterUser)
      .then( () =>  {
        alert('Se envió el mail de confirmación');
      })
      .catch( (error) => {
        if (error.response.status === 409) alert(error.response.data.detail);
        else alert("ERROR en los datos");
      });
}

export default loadDataUser;