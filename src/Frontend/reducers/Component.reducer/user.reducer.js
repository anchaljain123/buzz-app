import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
}from '../../config/constants'

const initialState ={
    users : [],
    loading : true,
    err:'',
};

export const userReducers = (state=initialState,action) =>{
    switch(action.type){

        case  FETCH_USERS_SUCCESS:{
            console.log(action.data,"===")
            const users = state.users.concat(action.data);
          return{
              ...state,
              users:users,
              loading:false,
            }
        }
        case FETCH_USERS_FAILED:{
            return{
                ...state,err:action.err,loading:false,
            }
        }


    }
    return state;
}
