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
    LOADER_STARTED,
    HIT_BUZZ_FAILED,
    HIT_BUZZ_SUCCESS,
    LIKE_BUZZ_FAILED,
    LIKE_BUZZ_SUCCESS,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_FAILED,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAILED,
    SAVE_DISLIKE_FAILED,
    SAVE_DISLIKE_SUCCESS,
    FETCH_DISLIKES_FAILED,
    FETCH_DISLIKES_SUCCESS,


} from '../config/constants'

export const asyncStarted = () =>{
    return{
        type:LOADER_STARTED,
    }
}

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

export const asyncLikeBuzzFailed = (err) =>{
    return{
        type:HIT_BUZZ_FAILED,err
    }
}

export const asyncLikeBuzzSuccess = (data) =>{
    return{
        type:HIT_BUZZ_SUCCESS,data
    }
}

export const asyncgetLikeFailed = (err) => {
    return{
        type:LIKE_BUZZ_FAILED,err,
    }
}

export const asyncgetLikeSuccess = (data) =>{
    return{
        type:LIKE_BUZZ_SUCCESS,data
    }
}

export const asyncsaveCommentFailed = (err) =>{
    return{
        type:SAVE_COMMENT_FAILED,err
    }
}

export const asyncsaveCommentSuccess = (data) =>{
    return{
        type:SAVE_COMMENT_SUCCESS,data
    }
}

export const asyncCommentSuccess = (data) =>{
    return{
        type:FETCH_COMMENT_SUCCESS,data
    }
}

export const asyncCommentFailed = (err) =>{
    return{
        type:FETCH_COMMENT_FAILED,err
    }
}

export const asyncdisLikeBuzzFailed = (err) =>{
    return{
        type:SAVE_DISLIKE_FAILED,err
    }
}

export const asyncdisLikeBuzzSuccess = (data) =>{
    return{
        type:SAVE_DISLIKE_SUCCESS,data
    }
}

export const asyncgetdisLikeFailed = (err) =>{
    return{
        type:FETCH_DISLIKES_FAILED,err
    }
}

export const asyncgetdisLikeSuccess = (data) =>{
    return{
        type:FETCH_DISLIKES_SUCCESS,data
    }
}