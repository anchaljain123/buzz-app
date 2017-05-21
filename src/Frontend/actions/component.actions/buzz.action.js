import {

  SAVE_BUZZ_FAILED,
  SAVE_BUZZ_SUCCESS,
  FETCH_BUZZ_FAILED,
  FETCH_BUZZ_SUCCESS,
  DELETE_BUZZ_FAILED,
  DELETE_BUZZ_SUCCESS,
  LOADER_STARTED,


} from '../../config/constants'

export const asyncStarted = () =>{
  return{
    type:LOADER_STARTED,
  }
};


export const asyncSaveFailed = (err) =>{
  return{
    type: SAVE_BUZZ_FAILED,er,
  }
};

export const  asyncSaveSuccess = (data) =>{
  return{
    type:SAVE_BUZZ_SUCCESS,data
  }
};

export const asyncBuzzFailed = (err) =>{
  return{
    type:FETCH_BUZZ_FAILED,err
  }
};

export const asyncBuzzSuccess = (data) =>{
  return{
    type:  FETCH_BUZZ_SUCCESS,data
  }
};
export const asyncDeleteFailed = (err) =>{
  return{
    type:DELETE_BUZZ_FAILED,err
  }
};

export const asyncDeleteSuccess = (data) => {
  return{
    type:DELETE_BUZZ_SUCCESS,data
  }
};

