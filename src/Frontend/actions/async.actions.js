import {
    asyncFetchSuccess,
    asyncFetchFailed,
    asyncCurrentUserSuccess,
    asyncCurrentUserFailed,
    asyncSaveSuccess,
    asyncSaveFailed,
    asyncBuzzSuccess,
    asyncBuzzFailed,
    asyncSaveComplaintSuccess,
    asyncSaveComplaintFailed,
    asyncComplaintsSuccess,
    asyncComplaintsFailed,
    asyncDeleteSuccess,
    asyncDeleteFailed,
    asyncStarted,
    asyncLikeBuzzSuccess,
    asyncLikeBuzzFailed,
    asyncgetLikeSuccess,
    asyncgetLikeFailed,
    asyncsaveCommentSuccess,
    asyncsaveCommentFailed,


} from './actions'

import {
    fetchURI ,
    fetchCurrentUserURI,
    savePostURI,
    fetchBuzzURI,
    saveComplainURI ,
    fetchComplaintsURI,
    deletePostURI,
    hitBuzzURI,
    fetchLikeURI,
    saveCommentURI,

} from '../config/constants'

import fetch from 'isomorphic-fetch'

export const asyncAction = () => {
    return (dispatch) => {
        fetch(fetchURI)
            .then(response => response.json())
            .then(data => {
                dispatch(asyncFetchSuccess(data));
            })
            .catch(err => {
                dispatch(asyncFetchFailed(err));
            });
    }
};

export  const asyncgetCurrentUser =() =>{
    return(dispatch) =>{
        fetch(fetchCurrentUserURI, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then(data=> {
                dispatch(asyncCurrentUserSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncCurrentUserFailed(err))
            })
    }
}

export const asyncSavePost = (postDetails) =>{
    return(dispatch) =>{

        dispatch(asyncStarted());
        fetch(savePostURI,{
            method:'post',
            body:postDetails,
        })
            .then(res => res.json())
            .then(data => {
                dispatch(asyncSaveSuccess(data));
                dispatch(asyncgetBuzz());
            })
            .catch(err => {
                dispatch(asyncSaveFailed(err));
            })
    }
}

export  const asyncgetBuzz =() =>{
    return(dispatch) =>{
        fetch(fetchBuzzURI, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then(data=> {
                dispatch(asyncBuzzSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncBuzzFailed(err))
            })
    }
}

export const asyncSaveComplaint = (complainDetails) => {
    return(dispatch) => {
        fetch(saveComplainURI,{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(complainDetails)
        })
            .then(res=>res.json())
            .then(data=>{
                dispatch(asyncSaveComplaintSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncSaveComplaintFailed(err))
            })
    }
}

export  const asyncgetComplaints =() =>{
    return(dispatch) =>{
        fetch(fetchComplaintsURI, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then(data=> {
                dispatch(asyncComplaintsSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncComplaintsFailed(err))
            })
    }
}

export const asyncdeletePost = (postDetails) => {
    return(dispatch) =>{
        fetch(deletePostURI,{
            method:'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(postDetails),
        })
            .then(res => res.json())
            .then(data => {
                dispatch(asyncDeleteSuccess(data));
                dispatch(asyncgetBuzz());

            })
            .catch(err => {
                dispatch(asyncDeleteFailed(err));
            })
    }
}

export const asyncsaveHitCount = (hitDetails) =>{

    return(dispatch) =>{
        fetch(hitBuzzURI,{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(hitDetails)
        })
            .then(res=>res.json())
            .then(data=>{
                dispatch(asyncLikeBuzzSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncLikeBuzzFailed(err))
            })
    }
}

export  const asyncgetLike =() =>{
    return(dispatch) =>{
        fetch(fetchLikeURI, {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res=>res.json())
            .then(data=> {
                dispatch(asyncgetLikeSuccess(data));
                dispatch(asyncgetBuzz());
            })
            .catch(err=>{
                dispatch(asyncgetLikeFailed(err))
            })
    }
}

export const asyncsaveComment = (commentDetails) =>{
    return(dispatch) =>{
        fetch(saveCommentURI,{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(commentDetails)
        })
            .then(res=>res.json())
            .then(data=>{
                dispatch(asyncsaveCommentSuccess(data))
            })
            .catch(err=>{
                dispatch(asyncsaveCommentFailed(err))
            })
    }
}