import verifyDataSimulation from './verifyData';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

const defaultDataSimulation = {
    id_Robots: [],
    cant_Rondas: 0, 
    token: JSON.parse(localStorage.getItem("user")).token
};

async function ListaRobots(){
    const tkn = JSON.parse(localStorage.getItem("user")).token;
  
    return await axios.get(baseURL + "/robots?token=" + tkn)
    .then((response) => response.data)
    .catch((_) => []);
  }

async function ejecutarPartida(dataSimulation){
    if(verifyDataSimulation(dataSimulation))
        await axios.post(baseURL + "/crearSimulacion", dataSimulation)
        .then((response) => alert("Pasar a nay"))
        .catch((err) => alert(err.response.datail));
}

export {ListaRobots, defaultDataSimulation, ejecutarPartida};