
import { createStore ,applyMiddleware } from 'redux'
import { userReducers } from '../reducers'
import { middleware } from  '../middlewares'

const Middleware = applyMiddleware(...middleware);
const store = createStore(userReducers,Middleware);

export default store;