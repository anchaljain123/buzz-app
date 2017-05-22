import {

  asyncSaveSuccess,
  asyncSaveFailed,

  asyncBuzzSuccess,
  asyncBuzzFailed,

  asyncDeleteSuccess,
  asyncDeleteFailed,

  asyncStarted,
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
        dispatch(asyncgetBuzz());
      })
      .catch(err => {
        dispatch(asyncSaveFailed(err));
      })
  }
};

export  const asyncgetBuzz =() =>{
  return(dispatch) =>{
    fetch(fetchBuzzURI, {
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
        dispatch(asyncgetBuzz());
      })
      .catch(err => {
        dispatch(asyncDeleteFailed(err));
      })
  }
};