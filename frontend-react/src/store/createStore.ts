import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/combineReducers';
import reduxThunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(reduxThunk));