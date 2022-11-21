import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

function getToken(){
    const storage = localStorage.getItem('user');
    if(storage) return JSON.parse(storage).token;
    else return "";
}

async function servicioListarGames(callback) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    return await axios.get(baseURL + "/matchs?token=" + token)
      .then((response) => callback(response.data))
      .catch((error) => callback([]));
}

export {servicioListarGames, getToken};
