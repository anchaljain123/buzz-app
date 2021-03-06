import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  LOADER_STARTED,
  SET_LOADING_TRUE,

} from '../../config/constants'

export const asyncloaderStarted = () =>{
  return{
    type:SET_LOADING_TRUE
  }
};
export const asyncFetchSuccess = (data) =>{
  return {
    type:FETCH_USERS_SUCCESS,data,
  }
};

export const asyncFetchFailed =(err) =>{
  return{
    type:FETCH_USERS_FAILED,err,
  }
};

export const asyncCurrentUserSuccess =(data) =>{
  return{
    type:FETCH_USER_SUCCESS,data,
  }
};

export const asyncCurrentUserFailed = (err) =>{
  return{
    type:FETCH_USER_FAILED,err,
  }
};
