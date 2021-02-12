import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersPage from "./usersPage";
let reducers = combineReducers({dialogsReducer,profileReducer, usersPage});

let store = createStore(reducers);

export default store;