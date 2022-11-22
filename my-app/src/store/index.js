import {createStore, combineReducers} from 'redux';
import reducerSimulation from './simulation/reducer';
import reducerRegister from './register/reducer';
import reducerListRobots from './robots/reducer';
import reducerListGames from './Partidas/reducer';
import reducerAddRobot from './addRobot/reducer';

const reducers = combineReducers({
        reducerSimulation,
        reducerRegister,
        reducerListRobots,
        reducerListGames,
        reducerAddRobot
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;