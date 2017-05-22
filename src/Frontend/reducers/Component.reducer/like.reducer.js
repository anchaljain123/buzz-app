import {
  SAVE_LIKE_FAILED,
  SAVE_LIKE_SUCCESS,
  FETCH_LIKES_FAILED,
  FETCH_LIKES_SUCCESS,
  LOADER_STARTED,
  DELETE_LIKE_FAILED,
  DELETE_LIKE_SUCCESS,


} from '../../config/constants'

const initialState = {
  likes: [],
  isliked: false,
};

export const likeReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOADER_STARTED: {
      return {
        ...state,
        isliked: false,
      }
    }

    case SAVE_LIKE_FAILED: {
      return {
        ...state,
        err: action.err,
        isliked: false,
      }
    }

    case SAVE_LIKE_SUCCESS: {
      return {
        ...state,
        isliked: true,

      }
    }

    case FETCH_LIKES_FAILED: {
      return {
        ...state,
        err: action.err,
      }
    }

    case FETCH_LIKES_SUCCESS: {
      return {
        ...state,
        likes: action.data,
      }
    }
    case DELETE_LIKE_SUCCESS:{
      return{
        ...state,
        likes:action.data
      }
    }

    case DELETE_LIKE_FAILED:{
      return{
        ...state,
        err:action.err
      }
    }

  }
  return state
};