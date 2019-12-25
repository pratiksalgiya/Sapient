import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { combineReducers } from 'redux'
//import reducer from './reducer';
import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const store1 = store();
ReactDOM.render(
    <Provider store={store1}>
        <App />
    </Provider>,
    document.getElementById('root')
)


serviceWorker.unregister();
