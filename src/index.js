import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();
