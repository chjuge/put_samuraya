import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducerCopy';
import profileReducer from './profileReducerCopy';

let reducers = combineReducers({dialogsReducer,profileReducer});

let store = createStore(reducers);

export default store;