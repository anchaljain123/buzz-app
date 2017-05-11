
import {
    SAVE_COMMENT_FAILED,
    SAVE_COMPLAINT_SUCCESS

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

    }


    return state
}