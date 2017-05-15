
import {

    SAVE_DISLIKE_FAILED,
    SAVE_DISLIKE_SUCCESS,
    FETCH_DISLIKES_FAILED,
    FETCH_DISLIKES_SUCCESS,

} from '../../config/constants'

const initialState = {
    dislikes:[],

};

export const dislikeReducer = (state=initialState,action) =>{

    switch(action.type){

        case SAVE_DISLIKE_SUCCESS:{
            return{
                ...state,
                dislikes:action.data,
            }
        }

        case SAVE_DISLIKE_FAILED:{
            return{
                ...state,err:action.err,
            }
        }

        case FETCH_DISLIKES_SUCCESS:{
            return{
                ...state,
                dislikes:action.data,

            }
        }

        case FETCH_DISLIKES_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

    }


    return state
}