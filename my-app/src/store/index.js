import {createStore, combineReducers} from 'redux';
import reducerSimulation from './simulation/reducer';
import reducerRegister from './register/reducer';
import reducerRobots from './robots/reducer';
import reducerListGames from './Partidas/reducer';

const reducers = combineReducers({
        reducerSimulation,
        reducerRegister,
        reducerRobots,
        reducerListGames
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;