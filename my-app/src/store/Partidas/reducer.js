import {getToken, servicioListarGames} from './service';

const defaultDataUser = {
    token: getToken()
};

function reducer(dataUser = defaultDataUser, action){   
    if (action.type === 'GET_DATA_GAMES_USER') return servicioListarGames(dataUser.token, action.data);
    
    return dataUser;
}

export default reducer;