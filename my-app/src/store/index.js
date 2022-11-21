import {createStore, combineReducers} from 'redux';
import reduceSim from './simulation/reducer';
import reducerRegReg from './register/reducer';
import reducerRobot from './addRobot/reducer';;

const reducers = combineReducers({
        reducerRegReg,
        reducerRobot
        reduceSim
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;