import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

async function imgRobot(robotId){
    const tkn = JSON.parse(localStorage.getItem("user")).token;
    
    return await axios.get(baseURL + "/image", {params: { token: tkn, robot_id: robotId }})
    .then((response) => response.data)
    .catch((_) => []);
}

export {imgRobot};