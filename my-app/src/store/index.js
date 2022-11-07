import {createStore, combineReducers} from 'redux';
import reducerReg from './register/reducer';
import reducerRobot from './addRobot/reducer';

const reducers = combineReducers({
        reducerReg,
        reducerRobot
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;