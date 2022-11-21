import {serviceListRobots} from './serviceListarRobots';

function reducer(dataUser = [], action){    
    if (action.type === 'GET_DATA_ROBOTS_USER') return serviceListRobots(dataUser.token, action.data);

    return dataUser;
}

export default reducer;