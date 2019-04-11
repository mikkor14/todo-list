import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import TodoReducer from './Reducers'
import {fetchTodos} from "./Actions/TodoActions";
import compose from "redux/src/compose";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    TodoReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

store.dispatch(fetchTodos());

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
