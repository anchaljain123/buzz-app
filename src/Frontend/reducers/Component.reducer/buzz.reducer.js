
import {
    SAVE_BUZZ_SUCCESS,
    SAVE_BUZZ_FAILED,
    FETCH_BUZZ_SUCCESS,
    FETCH_BUZZ_FAILED,
} from '../../config/constants'

const initialState = {
    buzz:[],
}

export const buzzReducer = (state=initialState,action) =>{

    switch(action.type){
        case SAVE_BUZZ_SUCCESS:
           return {
               ...state,
        }

        case SAVE_BUZZ_FAILED:
            return{
            ...state,err:action.err
        }

        case FETCH_BUZZ_SUCCESS:{

            const buzz = state.buzz.concat(action.data);
            return{
                ...state,
                buzz:buzz,
            }
        }

        case FETCH_BUZZ_FAILED:{
            return{
                ...state,
                err:action.err
            }
        }
    }


return state
}