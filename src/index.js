import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}
rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);

store.subscribe (() => {
    let state = store.getState();
    rerenderEntireTree(state);
    debugger;
});