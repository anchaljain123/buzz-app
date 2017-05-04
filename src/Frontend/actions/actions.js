import {
FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
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