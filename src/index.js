import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import appReducer from './store/reducer'
import { Provider }  from 'react-redux'
import { reducer as formReducer} from 'redux-form'

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    form : formReducer,
    app : appReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

