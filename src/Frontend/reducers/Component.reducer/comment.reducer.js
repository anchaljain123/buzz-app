
import {
  SAVE_COMMENT_FAILED,
  SAVE_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILED,
  FETCH_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILED,
  DELETE_COMMENT_SUCCESS,

} from '../../config/constants'

const initialState = {
  comments:[],
};

export const commentReducer = (state=initialState,action) =>{

  switch(action.type){

    case SAVE_COMMENT_FAILED:{
      return{
        ...state,
        err:action.err,
      }
    }

    case SAVE_COMMENT_SUCCESS:{
      let comments = state.comments.concat(action.data);
      return{
        ...state,
        comments:comments
      }
    }

    case FETCH_COMMENT_SUCCESS:{
      return{
        ...state,
        comments:action.data,
      }
    }

    case FETCH_COMMENT_FAILED:{
      return{
        ...state,
        err:action.err
      }
    }

    case DELETE_COMMENT_SUCCESS:{
      return{
        ...state,
        comments:action.data,
      }
    }
    case DELETE_COMMENT_FAILED:{
      return{
        ...state,
        err:action.err
      }
    }

  }


  return state
};