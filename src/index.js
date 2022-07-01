import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './util/useContext';
import { initialState, Reduce } from './util/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={Reduce}>
        <App />
    </StateProvider>
);


