import API from "./api";

function getToken(){
    const storage = localStorage.getItem('user');
    
    if(storage) return JSON.parse(storage).token;
    else return "";
}

const handleresponse = (code, response) => {
    if(code === 200){
        localStorage.setItem('robotListUser', response);
        return {state: 'OK', data: response};
    }
    else 
        return {state: 'ERROR', data: response.detail};

}

const serviceListRobots = async (token) => {
    //VER
    return await API.get(`/robots?token=${token}`)
    .then(response => handleresponse(response.status, response.data))
    .catch((error) => handleresponse(error.response.status, error.response.data));
};

export default {serviceListRobots, getToken};