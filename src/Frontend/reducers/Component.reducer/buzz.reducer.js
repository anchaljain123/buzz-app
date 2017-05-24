import {
  SAVE_BUZZ_SUCCESS,
  SAVE_BUZZ_FAILED,
  FETCH_BUZZ_SUCCESS,
  FETCH_BUZZ_FAILED,
  DELETE_BUZZ_FAILED,
  DELETE_BUZZ_SUCCESS,
  LOADER_STARTED,
  FETCH_LOSTNFOUND_FAILED,
  FETCH_LOSTNFOUND_SUCCESS,

} from '../../config/constants'

const initialState = {
  buzz: [],
  loading: '',
  offset:0,
  lostnfound:[],
  isMaxlen:false,
};

export const buzzReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOADER_STARTED :
      return {
        ...state,
        loading: true,
      };
    case SAVE_BUZZ_SUCCESS:
      state.buzz.unshift(action.data);
      let newBuzz = state.buzz;
      return {
        ...state,
        buzz:newBuzz,
        loading: false,
      };

    case SAVE_BUZZ_FAILED:
      return {
        ...state,
        err: action.err,
        loading: false,
        offset:state.offset+1,
      };

    case FETCH_BUZZ_SUCCESS: {
      let newbuzz =  state.buzz.concat(action.data);
      if(state.buzz.length === newbuzz.length){
       var maxlength = true
      }
      return {
        ...state,
        buzz: newbuzz,
        offset:state.offset+10,
        isMaxlen: maxlength,
      }
    }

    case FETCH_BUZZ_FAILED: {
      return {
        ...state,
        err: action.err,
      }
    }

    case DELETE_BUZZ_SUCCESS: {
      return {
        ...state,
        buzz:action.data,
        offset:state.offset-1,
      }
    }

    case DELETE_BUZZ_FAILED: {
      return {
        ...state,
        err: action.err,
      }
    }

    case FETCH_LOSTNFOUND_SUCCESS:
      return{
        ...state,
        lostnfound:action.data,
      };

    case FETCH_LOSTNFOUND_FAILED:
    {
      return{
        ...state,
        err:action.err
      }
    }
  }
  return state
};