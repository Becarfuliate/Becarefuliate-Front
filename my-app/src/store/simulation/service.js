import verifyDataSimulation from './verifyData';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

async function runSimulation(dataSimulation, callback){ 
    if(verifyDataSimulation(dataSimulation)){
        dataSimulation.id_robot = dataSimulation.id_robot.substring(1);
        dataSimulation.user_creator = JSON.parse(localStorage.getItem("user")).userlogin;
        dataSimulation.token = JSON.parse(localStorage.getItem("user")).token;
        return await axios.post(baseURL + "/simulation/add", dataSimulation)
        .then((response) => {
            localStorage.setItem("simulacion", JSON.stringify(response.data));
            callback(true);
            return {state: 'OK', data: response};
        })
        .catch((err) => {
            callback(false);
            return {state: 'ERROR', data: err};
        });
    }
    callback(false);
    return {state: 'ERROR', data: ''};
}

export {runSimulation};