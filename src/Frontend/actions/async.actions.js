import {
    asyncFetchSuccess,
    asyncFetchFailed,
    asyncCurrentUserSuccess,
    asyncCurrentUserFailed,
    asyncSaveSuccess,
    asyncSaveFailed,

} from './actions'

import { fetchURI , fetchCurrentUserURI,savePostURI } from '../config/constants'
import fetch from 'isomorphic-fetch'

export const asyncAction = () => {
    return (dispatch) => {
        fetch(fetchURI)
            .then(response => response.json())
            .then(data => {
                dispatch(asyncFetchSuccess(data));
            })
            .catch(err => {
                dispatch(asyncFetchFailed(err));
            });
    }
};

export  const asyncgetCurrentUser =() =>{
    return(dispatch) =>{
        fetch(fetchCurrentUserURI, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then(data=> {
                dispatch(asyncCurrentUserSuccess(data))
            })
                    .catch(err=>{
                        dispatch(asyncCurrentUserFailed(err))
                    })

    }
}

export const asyncSavePost = (postDetails) =>{
    return(dispatch) =>{
        fetch(savePostURI,{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(postDetails),
        })
            .then(res=>res.json())
            .then(data => {
                dispatch(asyncSaveSuccess(data));
            })
            .catch(err => {
                dispatch(asyncSaveFailed(err));
            })
    }
}