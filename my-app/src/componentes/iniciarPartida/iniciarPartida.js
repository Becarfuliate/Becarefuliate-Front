import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const endpoint = "/match/run";

const defaultDataPartida = {
    id_match: 0,
    name_user: ""
};

async function iniciarPartida(dataPartida){
    return await axios.post(baseURL + endpoint, dataPartida)
        .then((response) => { return {state: 'OK', data: response.data} })
        .catch((err) => { return {state: 'ERROR', data: err.detail} });
}

export {iniciarPartida, defaultDataPartida};