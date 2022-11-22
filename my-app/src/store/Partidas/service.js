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
    const token = JSON.parse(localStorage.getItem("user")).token;
    return await axios.get(baseURL + "/matchs?token=" + token)
      .then((response) => callback(response.data))
      .catch((_) => callback([]));
}

async function servicioPartida(postData, callback) {
    await axios.post(baseURL + "/match/add", postData)
    .then((response) => {
      callback({...postData, id_match: response.data.id_match})
    })
      .catch((error) => {
        if (error.response.status === 409) alert(error.response.data.detail);
        else if (error.response.status === 422) alert(error.response.data.detail[0].msg);
      });
  }

export {servicioListarGames, getToken, getNameUser, servicioPartida};
