import {
  SAVE_COMPLAINT_SUCCESS,
  SAVE_COMPLAINT_FAILED,

  FETCH_COMPLAINT_SUCCESS,
  FETCH_COMPLAINT_FAILED,

  DELETE_COMPLAINT_FAILED,
  DELETE_COMPLAINT_SUCCESS,

  RESOLVE_COMPLAINT_SUCCESS,
  RESOLVE_COMPLAINT_FAILED,


} from '../../config/constants'


export const asyncSaveComplaintSuccess = (data) =>{
  return{
    type:SAVE_COMPLAINT_SUCCESS,data
  }
};

export const asyncSaveComplaintFailed = (err) =>{
  return{
    type:SAVE_COMPLAINT_FAILED,err
  }
};

export const asyncComplaintsFailed = (err) =>{
  return{
    type:FETCH_COMPLAINT_FAILED,err
  }
};

export const asyncComplaintsSuccess = (data) =>{
  return{
    type: FETCH_COMPLAINT_SUCCESS,data
  }
};



export const asyncDeleteComplaintFailed = (err) =>{
  return{
    type:DELETE_COMPLAINT_FAILED,err
  }
};

export const asyncDeleteComplaintSuccess = (data) =>{
  return{
    type:DELETE_COMPLAINT_SUCCESS,data
  }
};

export const asyncResolveComplaintSuccess = (data) =>{
  return{
    type:RESOLVE_COMPLAINT_SUCCESS,data,
  }
};

export const asyncResolveComplaintFailed = (err) =>{

  return{
    type:RESOLVE_COMPLAINT_FAILED,err
  }
};