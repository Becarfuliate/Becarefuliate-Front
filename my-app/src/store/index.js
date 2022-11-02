import {createStore, combineReducers} from 'redux';
import reducer from './register/reducer'

const reducers = combineReducers({
        reducer,
});

const store =  createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;