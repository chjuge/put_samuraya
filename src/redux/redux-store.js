import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersPage from "./usersPage";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    usersPage,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;