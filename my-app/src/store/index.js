import {createStore, combineReducers} from 'redux';
import reduceSim from './simulation/reducer';
import reducerReg from './register/reducer';

const reducers = combineReducers({
        reducerReg,
        reduceSim
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;