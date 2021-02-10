import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                    <App
                        state={state}
                        dispatch={store.dispatch.bind(store)}
                        store={store} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );

    reportWebVitals();
}
rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});