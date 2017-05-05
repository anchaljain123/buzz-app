import { combineReducers } from 'redux'

import {
    userReducers
} from './Component.reducer/user.reducer'

import {
    buzzReducer
} from './Component.reducer/buzz.reducer'


export const rootReducer  =  combineReducers({
    userReducers,
    buzzReducer,
})