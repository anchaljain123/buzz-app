
import {
    SAVE_BUZZ_SUCCESS,
    SAVE_BUZZ_FAILED,
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
    }

return state
}