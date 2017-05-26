import {
  asyncFetchSuccess,
  asyncFetchFailed,
  asyncCurrentUserSuccess,
  asyncCurrentUserFailed,
  asyncloaderStarted,
} from '../component.actions/user.action'

import {
  fetchURI ,
  fetchdisLikeURI,
  fetchCurrentUserURI,

} from '../../config/constants'

import fetch from 'isomorphic-fetch'

export const asyncAction = () => { //get users
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
    dispatch(asyncloaderStarted());
    return fetch(fetchCurrentUserURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
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
};
