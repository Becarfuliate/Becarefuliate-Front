import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const endpoint = "";

function verifyDataPartida(dataPartida){
    const err = ""
    return {state: 'ERROR', data: err};
}

async function iniciarPartida(dataPartida){
    const verifyData = verifyDataPartida(dataPartida); 
    
    if(verifyData.state == 'OK'){
        return await axios.post(baseURL + endpoint, dataPartida)
        .then((response) => { return {state: 'OK', data: response.data} })
        .catch((err) => { return {state: 'ERROR', data: err} });
    }
    return verifyData;
}

export default iniciarPartida;


