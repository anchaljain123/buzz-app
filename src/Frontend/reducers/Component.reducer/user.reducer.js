import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
}from '../../config/constants'

const initialState ={
    users : [],
    loading : true,
    err:'',
};

export const userReducers = (state=initialState,action) =>{
    switch(action.type){

        case  FETCH_USERS_SUCCESS:{

            const users = (action.data);

          return{
              ...state,
              users:users,
              loading:false,
            }
        }
        case FETCH_USERS_FAILED:{
            return{
                ...state,err:action.err,
                loading:false,
            }
        }

        case FETCH_USER_SUCCESS:{
            const users = action.data;
            return{
                ...state,
                users:users,
            }
        }
        case FETCH_USER_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

    }
    return state;
}
