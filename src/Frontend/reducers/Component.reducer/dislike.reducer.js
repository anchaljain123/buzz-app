import {
  SAVE_DISLIKE_FAILED,
  SAVE_DISLIKE_SUCCESS,
  FETCH_DISLIKES_FAILED,
  FETCH_DISLIKES_SUCCESS,
  LOADER_STARTED,

} from '../../config/constants'

const initialState = {
  dislikes: [],
  isdisliked: false,
};

export const dislikeReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOADER_STARTED: {
      return {
        ...state,
        isdisliked: false,
      }
    }
    case SAVE_DISLIKE_SUCCESS: {
      return {
        ...state,
        isdisliked: true,

      }
    }

    case SAVE_DISLIKE_FAILED: {
      return {
        ...state,
        err: action.err,
        isdisliked: false,
      }
    }

    case FETCH_DISLIKES_SUCCESS: {

      return {
        ...state,
        dislikes: action.data,

      }
    }

    case FETCH_DISLIKES_FAILED: {
      return {
        ...state,
        err: action.err,
      }
    }

  }
  return state
};