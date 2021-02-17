import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersPage from "./usersPage";
let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    usersPage,
    auth: authReducer
});

let store = createStore(reducers);

export default store;