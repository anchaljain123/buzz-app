

import {
    FETCH_COMPLAINT_FAILED,
    FETCH_COMPLAINT_SUCCESS,
    SAVE_COMPLAINT_SUCCESS,
    SAVE_COMPLAINT_FAILED,
} from '../../config/constants'

const initialState = {
    complaints:[],
    err:''
}

export const complaintReducer = (state = initialState,action) =>{
    switch (action.type){
        case SAVE_COMPLAINT_SUCCESS:
            return{
                ...state
            }
        case SAVE_COMPLAINT_FAILED: {
            return {
                ...state, err: action.err
            }
        }
        case FETCH_COMPLAINT_SUCCESS : {
            const complaints  =  action.data;
            return{
                ...state,complaints:complaints
            }
        }
        case FETCH_COMPLAINT_FAILED :{
            return{
                ...state,err:action.err
            }
        }

    }
    return state;
}