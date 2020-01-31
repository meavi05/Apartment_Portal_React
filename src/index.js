import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import reducer from './store/reducer'
import { Provider }  from 'react-redux'

import './index.css';
import App from './App';
//import '..\node_modules\bootstrap\dist\css\bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

