import {getToken, serviceListRobots} from './serviceListarRobots';

const defaultDataUser = {
    token: getToken()
};

function reducer(dataUser = defaultDataUser, action){    
    if (action.type === 'GET_DATA_ROBOTS_USER') return serviceListRobots(dataUser.token, action.data);
    
    return dataUser;
}

export default reducer;