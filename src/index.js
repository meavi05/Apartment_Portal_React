import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import appReducer from './store/reducer'
import authReducer from './reducers/authReducer'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import jwtDecode from 'jwt-decode'
import * as actions from './store/action'
import './index.css'

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    form: formReducer,
    app: appReducer,
    auth: authReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const checkTokenExpirationMiddleware = store => next => action => {
    const token = localStorage.getItem("token");
    if (null != token) {
        console.log(jwtDecode(token))
        if (jwtDecode(token).exp < Date.now() / 1000) {
            localStorage.clear();
            next(actions.logOutAction());
            next(action)
        }
    }
    next(action)
};
const middlewares = [thunk, checkTokenExpirationMiddleware]
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
let persistor = persistStore(store)
export default persistor
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

