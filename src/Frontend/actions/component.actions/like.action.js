import {

  LOADER_STARTED,
  SAVE_LIKE_FAILED,
  SAVE_LIKE_SUCCESS,
  FETCH_LIKES_FAILED,
  FETCH_LIKES_SUCCESS,
  SAVE_DISLIKE_FAILED,
  SAVE_DISLIKE_SUCCESS,
  FETCH_DISLIKES_FAILED,
  FETCH_DISLIKES_SUCCESS,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_FAILED,
} from '../../config/constants'

export const asyncStarted = () =>{
  return{
    type:LOADER_STARTED,
  }
};

export const asyncLikeBuzzFailed = (err) =>{
  return{
    type:SAVE_LIKE_FAILED,err
  }
};

export const asyncLikeBuzzSuccess = (data) =>{
  return{
    type:SAVE_LIKE_SUCCESS,data
  }
};

export const asyncgetLikeFailed = (err) => {
  return{
    type:FETCH_LIKES_FAILED,err,
  }
};

export const asyncgetLikeSuccess = (data) =>{
  return{
    type:FETCH_LIKES_SUCCESS,data
  }
};

export const likeloaderStarted = () => {
  return{
    type:LOADER_STARTED
  }
};

export const asyncdisLikeBuzzFailed = (err) =>{
  return{
    type:SAVE_DISLIKE_FAILED,err
  }
};

export const asyncdisLikeBuzzSuccess = (data) =>{
  return{
    type:SAVE_DISLIKE_SUCCESS,data
  }
};

export const asyncgetdisLikeFailed = (err) =>{
  return{
    type:FETCH_DISLIKES_FAILED,err
  }
};

export const asyncgetdisLikeSuccess = (data) =>{
  return{
    type:FETCH_DISLIKES_SUCCESS,data
  }
};

export const asyncdeleteLikeSuccess = (data) =>{
  return{
    type:DELETE_LIKE_SUCCESS,data
  }
};

export const asyncdeleteLikeFailed = (err) =>{
  return{
    type:DELETE_LIKE_FAILED,err
  }
};