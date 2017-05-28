import {
  asyncLikeBuzzSuccess,
  asyncLikeBuzzFailed,

  asyncgetLikeSuccess,
  asyncgetLikeFailed,

  asyncdisLikeBuzzSuccess,
  asyncdisLikeBuzzFailed,

  asyncgetdisLikeSuccess,
  asyncgetdisLikeFailed,

  asyncdeleteLikeSuccess,
  asyncdeleteLikeFailed,

  asyncStarted,

} from '../component.actions/like.action'


import {
  asyncgetBuzz
} from './buzz.asyncaction'

import {

  fetchdisLikeURI,
  hitBuzzURI,
  fetchLikeURI,
  disLikeBuzzURI,
  deleteLikeURI,
} from '../../config/constants'

import fetch from 'isomorphic-fetch'

export  const asyncgetLikes =() =>{
  return(dispatch) =>{
    fetch(fetchLikeURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncgetLikeSuccess(data));
      })
      .catch(err=>{
        dispatch(asyncgetLikeFailed(err))
      })
  }
};

export const asyncsaveLike = (hitDetails) =>{
  return(dispatch) =>{
    dispatch(asyncStarted());
    fetch(hitBuzzURI,{
      method:'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(hitDetails)
    })
      .then(res=>res.json())
      .then(data=>{
        dispatch(asyncLikeBuzzSuccess(data));
        dispatch(asyncgetLikes());
        dispatch(asyncgetDislikes());
      })
      .catch(err=>{
        dispatch(asyncLikeBuzzFailed(err))
      })
  }
};

export const asyncsaveDislike = (disLikeDetails) =>{
  return(dispatch) =>{
    dispatch(asyncStarted());
    fetch(disLikeBuzzURI,{
      method:'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(disLikeDetails)
    })
      .then(res=>res.json())
      .then(data=>{
        dispatch(asyncdisLikeBuzzSuccess(data));
        dispatch(asyncgetLikes());
        dispatch(asyncgetDislikes());
      })
      .catch(err=>{
        dispatch(asyncdisLikeBuzzFailed(err))
      })
  }
};

export  const asyncgetDislikes =() =>{
  return(dispatch) =>{
    fetch(fetchdisLikeURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncgetdisLikeSuccess(data));
      })
      .catch(err=>{
        dispatch(asyncgetdisLikeFailed(err))
      })
  }
};

export const asyncdeletefromLike = (postInfo) =>{ //deleteLikes of deletedPost
  return (dispatch) => {
    fetch(deleteLikeURI,{
      credentials: 'include',
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(postInfo)
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncdeleteLikeSuccess(data));
        dispatch(asyncgetLikes());
      })
      .catch(err=>{
        dispatch(asyncdeleteLikeFailed(err))
      })
  }
};



