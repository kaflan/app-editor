import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const enhancer = applyMiddleware(routerMiddleware(history));

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),enhancer);
window.store = store;


export default store;