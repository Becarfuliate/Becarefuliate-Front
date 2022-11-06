import verifyDataPartida from './verifyDataPartida';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const endpoint = "";

const defaultDataPartida = {
    users: "",
    n_users: 0,
    n_rounds_simulations: 0,
    n_games_simulations: 0,
    id_partida: "",
    user_creator: "",
    token: ""
};

async function iniciarPartida(dataPartida){
    const verifyData = verifyDataPartida(dataPartida); 
    
    if(verifyData.state == 'OK'){
        return await axios.post(baseURL + endpoint, dataPartida)
        .then((response) => { return {state: 'OK', data: response.data} })
        .catch((err) => { return {state: 'ERROR', data: err} });
    }
    return verifyData;
}

export {iniciarPartida, defaultDataPartida};