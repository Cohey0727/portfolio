import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import logger from 'redux-logger';
import app from './app';
const reducer = combineReducers({ app });

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(saga);
