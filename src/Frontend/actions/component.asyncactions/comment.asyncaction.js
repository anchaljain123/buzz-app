import {

  asyncsaveCommentSuccess,
  asyncsaveCommentFailed,

  asyncCommentSuccess,
  asyncCommentFailed,

  asyncDeleteCommentSuccess,
  asyncDeleteCommentFailed,

} from '../component.actions/comment.action'

import {
  asyncgetBuzz
} from './buzz.asyncaction'

import {

  saveCommentURI,
  fetchCommentURI,
  deleteCommentURI,

} from '../../config/constants'

import fetch from 'isomorphic-fetch'

export const asyncgetComment = () =>{
  return(dispatch) =>{
    fetch(fetchCommentURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncCommentSuccess(data))
      })
      .catch(err=>{
        dispatch(asyncCommentFailed(err))
      })
  }
};

export const asyncsaveComment = (commentDetails) =>{
  return(dispatch) =>{
    fetch(saveCommentURI,{
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(commentDetails)
    })
      .then(res=>res.json())
      .then(data=>{
        dispatch(asyncsaveCommentSuccess(data));
        dispatch(asyncgetBuzz());
        dispatch(asyncgetComment())
      })
      .catch(err=>{
        dispatch(asyncsaveCommentFailed(err))
      })
  }
};

export const asyncdeleteComment = (commentData) => {
  return(dispatch) =>{
    fetch(deleteCommentURI,{
      method:'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(commentData),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncDeleteCommentSuccess(data));
      })
      .catch(err => {
        dispatch(asyncDeleteCommentFailed(err));
      })
  }
};