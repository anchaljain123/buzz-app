import {

  asyncSaveSuccess,
  asyncSaveFailed,

  asyncBuzzSuccess,
  asyncBuzzFailed,

  asyncDeleteSuccess,
  asyncDeleteFailed,

  asyncStarted,
  asynclostnfoundBuzzSuccess,
  asyncBuzzlostnfoundFailed,

} from '../component.actions/buzz.action'

import {

  savePostURI,
  fetchBuzzURI,
  deletePostURI,
} from '../../config/constants'

import fetch from 'isomorphic-fetch'

export const asyncSavePost = (postDetails) =>{
  return(dispatch) =>{

    dispatch(asyncStarted());
    fetch(savePostURI,{
      method:'post',
      body:postDetails,
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncSaveSuccess(data));
      })
      .catch(err => {
        dispatch(asyncSaveFailed(err));
      })
  }
};

export  const asyncgetBuzz =(offset) =>{

  return(dispatch) =>{
    fetch(`http://localhost:4000/buzz?offset=${offset}`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncBuzzSuccess(data))
      })
      .catch(err=>{
        dispatch(asyncBuzzFailed(err))
      })
  }
};

export const asyncgetLostnFoundBuzz = () => {
  return (dispatch)=>{
    fetch(fetchBuzzURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asynclostnfoundBuzzSuccess(data))
      })
      .catch(err=>{
        dispatch(asyncBuzzlostnfoundFailed(err))
      })
  }
};

export const asyncdeletePost = (postDetails) => {
  return(dispatch) =>{
    fetch(deletePostURI,{
      method:'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(postDetails),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncDeleteSuccess(data));

      })
      .catch(err => {
        dispatch(asyncDeleteFailed(err));
      })
  }
};