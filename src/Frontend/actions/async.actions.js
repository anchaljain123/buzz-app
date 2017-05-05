import {
    asyncFetchSuccess,
    asyncFetchFailed,
    asyncCurrentUserSuccess,
    asyncCurrentUserFailed

} from './actions'

import { fetchURI , fetchCurrentUserURI } from '../config/constants'
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
            .then(data=>{
                dispatch(asyncCurrentUserSuccess(data))
                    .catch(err=>{
                        dispatch(asyncCurrentUserFailed(err))
                    })
            })
    }
}