import {servicioListarGames} from './service';

function reducer(dataUser = [], action){   
    if (action.type === 'GET_DATA_GAMES_USER') return servicioListarGames(action.data);
    
    return dataUser;
}

export default reducer;