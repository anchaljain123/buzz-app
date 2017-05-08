import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    SAVE_BUZZ_FAILED,
    SAVE_BUZZ_SUCCESS,
    FETCH_BUZZ_FAILED,
    FETCH_BUZZ_SUCCESS,
    SAVE_COMPLAINT_SUCCESS,
    SAVE_COMPLAINT_FAILED,
    FETCH_COMPLAINT_SUCCESS,
    FETCH_COMPLAINT_FAILED,
    DELETE_BUZZ_FAILED,
    DELETE_BUZZ_SUCCESS,
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

export const asyncBuzzFailed = (err) =>{
    return{
        type:FETCH_BUZZ_FAILED,err
    }
}

export const asyncBuzzSuccess = (data) =>{
    return{
        type:  FETCH_BUZZ_SUCCESS,data
    }
}

export const asyncSaveComplaintSuccess = (data) =>{
    return{
        type:SAVE_COMPLAINT_SUCCESS,data
    }
}

export const asyncSaveComplaintFailed = (err) =>{
    return{
        type:SAVE_COMPLAINT_FAILED,err
    }
}

export const asyncComplaintsFailed = (err) =>{
    return{
        type:FETCH_COMPLAINT_FAILED,err
    }
}

export const asyncComplaintsSuccess = (data) =>{
    return{
        type: FETCH_COMPLAINT_SUCCESS,data
    }
}

export const asyncDeleteFailed = (err) =>{
    return{
        type:DELETE_BUZZ_FAILED,err
    }
}

export const asyncDeleteSuccess = (data) => {
    return{
        type:DELETE_BUZZ_SUCCESS,data
    }
}