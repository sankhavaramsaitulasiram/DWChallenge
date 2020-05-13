import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducers from './reducers'
const store = createStore(reducers,window.INITIAL_STATE,applyMiddleware(thunk));

ReactDOM.hydrate(<Provider store={store}><BrowserRouter><div>{renderRoutes(Routes)}</div></BrowserRouter></Provider>,document.querySelector('#root'));