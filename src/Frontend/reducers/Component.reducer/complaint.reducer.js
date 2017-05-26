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
      let newComplaints = [];
   state.complaints.filter((item) => {
    if( action.data._id !== item._id){
     return newComplaints.push(item);
    }
   });

       return{
        ...state,
         complaints:newComplaints,
      }
    }

    case RESOLVE_COMPLAINT_FAILED:{

      return{
        ...state,
        err:action.err,
      }
    }

    case RESOLVE_COMPLAINT_SUCCESS:{
      return{
        ...state,
          complaints:action.data,
      }
    }
    case INPROCESS_COMPLAINT_SUCCESS:{
      console.log(action.data,">>>")
      state.complaints.forEach((item,i)=>{
        if(item._id === action.data._id) {
          state.complaints[i] = action.data;
          console.log(state.complaints,">>>>>>>>>>")
        }
      });

      return{
        ...state,
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