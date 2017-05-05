import {
FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    SAVE_BUZZ_FAILED,
    SAVE_BUZZ_SUCCESS,

} from '../config/constants'

export const asyncFetchSuccess = (data) =>{
    return {
        type:FETCH_USERS_SUCCESS,data,
    }
}
export const asyncFetchFailed =(err) =>{
    return{
        type:FETCH_USERS_FAILED,err,
    }
}

export const asyncCurrentUserSuccess =(data) =>{
    return{
        type:FETCH_USER_SUCCESS,data,
    }
}

export const asyncCurrentUserFailed = (err) =>{
    return{
        type:FETCH_USER_FAILED,err,
    }
}

export const asyncSaveFailed = (err) =>{
    return{
        type: SAVE_BUZZ_FAILED,er,
    }
}

export const  asyncSaveSuccess = (data) =>{
    return{
        type:SAVE_BUZZ_SUCCESS,data
    }
}
