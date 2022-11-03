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
    if(verifyDataSimulation(dataSimulation)) {
        dataSimulation.token = JSON.parse(localStorage.getItem("user")).token;
        dataSimulation.user_creator = JSON.parse(localStorage.getItem("user")).userlogin; 
        dataSimulation.id_robot = dataSimulation.id_robot + "";
        dataSimulation.n_rounds_simulations = parseInt(dataSimulation.n_rounds_simulations);
        await axios.post(baseURL + "/simulation/add", dataSimulation,{
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((response) => localStorage.setItem("simulacion", JSON.stringify(response.data)))
        .catch((err) => alert(err.response.datail));
    }
}

export {ListaRobots, defaultDataSimulation, EjecutarPartida};