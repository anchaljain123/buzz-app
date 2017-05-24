import {
  FETCH_COMPLAINT_FAILED,
  FETCH_COMPLAINT_SUCCESS,
  SAVE_COMPLAINT_SUCCESS,
  SAVE_COMPLAINT_FAILED,
  DELETE_COMPLAINT_FAILED,
  DELETE_COMPLAINT_SUCCESS,
  RESOLVE_COMPLAINT_FAILED,
  RESOLVE_COMPLAINT_SUCCESS,
  INPROCESS_COMPLAINT_FAILED,
  INPROCESS_COMPLAINT_SUCCESS,

} from '../../config/constants'

const initialState = {
  complaints:[],
  err:''
};

export const complaintReducer = (state = initialState,action) =>{
  switch (action.type){
    case SAVE_COMPLAINT_SUCCESS:
      return{
        ...state
      };
    case SAVE_COMPLAINT_FAILED: {
      return {
        ...state, err: action.err
      }
    }
    case FETCH_COMPLAINT_SUCCESS : {
      const complaints  =  action.data;
      return{
        ...state,complaints:complaints
      }
    }
    case FETCH_COMPLAINT_FAILED :{
      return{
        ...state,err:action.err
      }
    }
    case DELETE_COMPLAINT_FAILED:{
      return{
        ...state,err:action.err
      }
    }
    case DELETE_COMPLAINT_SUCCESS:{
      console.log("---reducer",action.data,'...delete...',state.complaints.length);
      return{
        ...state,
      }
    }

    case RESOLVE_COMPLAINT_FAILED:{
      return{
        ...state,
        err:action.err,
      }
    }

    case RESOLVE_COMPLAINT_SUCCESS:{
      console.log(state.complaints,'...resolve..',action.data)
      return{
        ...state
      }
    }
    case INPROCESS_COMPLAINT_SUCCESS:{
      console.log(state.complaints,'...inprocess..',action.data)
      return{
        ...state
      }
    }
    case INPROCESS_COMPLAINT_FAILED:{
      return{
        ...state,
        err:action.err
      }
    }

  }
  return state;
};