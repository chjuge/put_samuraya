import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewText } from './redux/state.js';

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewText={updateNewText} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}