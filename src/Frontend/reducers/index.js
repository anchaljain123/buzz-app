import { combineReducers } from 'redux'

import {
    userReducers
} from './Component.reducer/user.reducer'

import {
    buzzReducer
} from './Component.reducer/buzz.reducer'

import {
    complaintReducer
} from './Component.reducer/complaint.reducer'

import {
    likeReducer
} from './Component.reducer/like.reducer'

export const rootReducer  =  combineReducers({
    userReducers,
    buzzReducer,
    complaintReducer,
    likeReducer
})