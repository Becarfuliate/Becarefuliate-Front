import API from '../api';

function getToken(){
    const storage = localStorage.getItem('user');
    if(storage) return JSON.parse(storage).token;
    else return "";
}

function handleresponse(code, response, callback){
    callback(code === 200);
    if(code === 200){
        localStorage.setItem('robotListUser', JSON.stringify(response));
        return {state: 'OK', data: response};
    }
    else
        return {state: 'ERROR', data: response.detail};
}

async function serviceListRobots(token, callback){
    return await API.get('/robots?token=' + token)
    .then(response => handleresponse(response.status, response.data, callback))
    .catch((error) => handleresponse(error.response.status, error.response, callback));
};

export {serviceListRobots, getToken};