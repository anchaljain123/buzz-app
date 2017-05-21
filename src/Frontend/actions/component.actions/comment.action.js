import {
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_FAILED,

  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILED,

  DELETE_COMMENT_FAILED,
  DELETE_COMMENT_SUCCESS,
} from '../../config/constants'

export const asyncsaveCommentFailed = (err) =>{
  return{
    type:SAVE_COMMENT_FAILED,err
  }
};

export const asyncsaveCommentSuccess = (data) =>{
  return{
    type:SAVE_COMMENT_SUCCESS,data
  }
};

export const asyncCommentSuccess = (data) =>{
  return{
    type:FETCH_COMMENT_SUCCESS,data
  }
};

export const asyncCommentFailed = (err) =>{
  return{
    type:FETCH_COMMENT_FAILED,err
  }
};

export const asyncDeleteCommentFailed = (err) => {
  return {
    type: DELETE_COMMENT_FAILED, err
  }
};

export const asyncDeleteCommentSuccess = (data) =>{
  return{
    type:DELETE_COMMENT_SUCCESS,data
  }
};
