
import {
    SAVE_LIKE_FAILED,
    SAVE_LIKE_SUCCESS,
    FETCH_LIKES_FAILED,
    FETCH_LIKES_SUCCESS,

} from '../../config/constants'

const initialState = {
    likes:[],

};

export const likeReducer = (state=initialState,action) =>{

    switch(action.type){

        case SAVE_LIKE_FAILED:{
            return{
                ...state,
                err:action.err
            }
        }

        case SAVE_LIKE_SUCCESS:{
            return{
                ...state,

            }
        }

        case FETCH_LIKES_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

        case FETCH_LIKES_SUCCESS:{
            return{
                ...state,
                likes:action.data,
            }
        }


    }


    return state
}