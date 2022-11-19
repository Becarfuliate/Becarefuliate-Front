import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

const user = JSON.parse(localStorage.getItem("user"));

function getToken(){
    if(user) return user.token;
    else return "";
}

function getUser(){
    if(user) return user.userlogin;
    else return "";
}

async function runSimulation(dataSimulation, callback){ 
        dataSimulation.id_robot = dataSimulation.id_robot.substring(1);
        return await axios.post(baseURL + "/simulation/add", dataSimulation)
        .then((response) => {
            localStorage.setItem("simulacion", JSON.stringify(response.data));
            callback(true);
        })
        .catch((_) => callback(false));
}

export {runSimulation, getToken, getUser};