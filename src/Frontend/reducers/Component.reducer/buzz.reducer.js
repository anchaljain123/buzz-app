
import {
    SAVE_BUZZ_SUCCESS,
    SAVE_BUZZ_FAILED,
    FETCH_BUZZ_SUCCESS,
    FETCH_BUZZ_FAILED,
    DELETE_BUZZ_FAILED,
    DELETE_BUZZ_SUCCESS,
    LOADER_STARTED,

} from '../../config/constants'

const initialState = {
    buzz:[],
    loading:'',
}

export const buzzReducer = (state=initialState,action) =>{

    switch(action.type){


        case LOADER_STARTED :
            return{
                ...state,
                loading:true,

            }


        case SAVE_BUZZ_SUCCESS:
           return {
               ...state,
               loading:false,
        }

        case SAVE_BUZZ_FAILED:
            return{
            ...state,
                err:action.err,
                loading:false,
        }

        case FETCH_BUZZ_SUCCESS:{

            return{
                ...state,
                buzz:action.data,
            }
        }

        case FETCH_BUZZ_FAILED:{
            return{
                ...state,
                err:action.err
            }
        }

        case DELETE_BUZZ_SUCCESS:{
            return{
                ...state,
                buzz:action.data
            }
        }

        case DELETE_BUZZ_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

    }


return state
}