import {getToken, serviveListRobots} from './serviceListarRobots';

const defaultDataUser = {
    token: getToken()
};

function reducer(dataUser = defaultDataUser, action){    
    if (action.type === 'GET_DATA_ROBOTS_USER') return serviveListRobots(dataUser.token);

    return dataUser;
}

export default reducer;