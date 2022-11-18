import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

function getToken(){
    const storage = localStorage.getItem('user');
    if(storage) return JSON.parse(storage).token;
    else return "";
}

function getNameUser(){
    const storage = localStorage.getItem('user');
    if(storage) return JSON.parse(storage).userlogin;
    else return "";
}


async function servicioListarGames(token, callback) {
    return await axios.get(baseURL + "/matchs?token=" + token)
      .then((response) => callback(response.data))
      .catch((_) => callback([]));
}

async function servicioPartida(postData) {
    await axios.post(baseURL + "/match/add", postData)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          alert(error.response.data.detail);
        }
        if (error.response.status === 422) {
          alert(error.response.data.detail[0].msg);
        }
        if (error.response) {
          console.log(`Returned with error: ${error.response.status}`);
        }
      });
  }

export {servicioListarGames, getToken, getNameUser, servicioPartida};
