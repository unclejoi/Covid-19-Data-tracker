import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {}

const middleware = [thunk];

const initStore = createStore( rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default initStore;

