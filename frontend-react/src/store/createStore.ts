import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import reduxThunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(reduxThunk));