import { verifyDataUser } from './dataUser';
import axios from 'axios';
import swal from "sweetalert";

async function loadDataUser(dataRegisterUser){
  const baseURL = 'http://localhost:8000/register';
  
  if(verifyDataUser(dataRegisterUser)) 
    return await axios.post(baseURL, dataRegisterUser)
      .then( () =>  {
        swal({
          text: 'Se envió el mail de confirmación.',
          icon: 'success',
          timer: '1800'
        });
      })
      .catch( (error) => {
        if (error.response.status === 409) {
          swal({
            text: error.response.data.detail,
            icon: 'error',
            timer: '1800'
          });
        }
        else {
          swal({
            text: error.response.status,
            icon: 'error',
            timer: '2500'
          });
        }
      });
}

export default loadDataUser;