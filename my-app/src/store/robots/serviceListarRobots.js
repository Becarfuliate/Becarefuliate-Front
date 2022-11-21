import API from '../api';

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
    const tken = JSON.parse(localStorage.getItem("user")).token;
    return await API.get('/robots?token=' + tken)
    .then(response => handleresponse(response.status, response.data, callback))
    .catch((error) => handleresponse(error.response.status, error.response, callback));
};

export {serviceListRobots};