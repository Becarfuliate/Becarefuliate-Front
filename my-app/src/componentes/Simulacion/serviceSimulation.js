import verifyDataSimulation from './verifyData';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

const defaultDataSimulation = {
    id_robot: [],
    n_rounds_simulations: 0,
    user_creator: "",
    token: ""
};

async function ListaRobots(){
    const tkn = JSON.parse(localStorage.getItem("user")).token;

    return await axios.get(baseURL + "/robots?token=" + tkn)
    .then((response) => response.data)
    .catch((_) => []);
}

async function EjecutarPartida(dataSimulation){
    dataSimulation.token = JSON.parse(localStorage.getItem("user")).token;
    dataSimulation.user_creator = JSON.parse(localStorage.getItem("user")).userlogin; 
    
    if(verifyDataSimulation(dataSimulation)) {
        await axios.post(baseURL + "/crearSimulacion", dataSimulation)
        .then((response) => localStorage.setItem("simulacion", JSON.stringify(response.data)))
        .catch((err) => alert(err.response.datail));
    }
}

export {ListaRobots, defaultDataSimulation, EjecutarPartida};