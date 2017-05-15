
import {
    HIT_BUZZ_FAILED,
    HIT_BUZZ_SUCCESS,
    LIKE_BUZZ_FAILED,
    LIKE_BUZZ_SUCCESS,

} from '../../config/constants'

const initialState = {
    likes:[],

};

export const likeReducer = (state=initialState,action) =>{

    switch(action.type){

        case HIT_BUZZ_FAILED:{
            return{
                ...state,err:action.err
            }
        }

        case HIT_BUZZ_SUCCESS:{
            return{
                ...state,
                likes:action.data
            }
        }

        case LIKE_BUZZ_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

        case LIKE_BUZZ_SUCCESS:{
            return{
                ...state,
                likes:action.data,
            }
        }


    }


    return state
}