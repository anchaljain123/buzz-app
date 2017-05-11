
import {
    SAVE_COMMENT_FAILED,
    SAVE_COMPLAINT_SUCCESS,
    FETCH_COMPLAINT_FAILED,
    FETCH_COMPLAINT_SUCCESS,

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

        case SAVE_COMPLAINT_SUCCESS:{
            return{
                ...state,

            }
        }

        case FETCH_COMPLAINT_SUCCESS:{

            console.log('----*********************------',action.data);

            return{
                ...state,
                comments:action.data,
            }
        }

        case FETCH_COMPLAINT_FAILED:{
            return{
                ...state,
                err:action.err
            }
        }

    }


    return state
}