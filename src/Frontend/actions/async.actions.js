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
  asyncCommentSuccess,
  asyncCommentFailed,
  asyncdisLikeBuzzSuccess,
  asyncdisLikeBuzzFailed,
  asyncgetdisLikeSuccess,
  asyncgetdisLikeFailed,
  asyncDeleteComplaintSuccess,
  asyncDeleteComplaintFailed,
  asyncResolveComplaintSuccess,
  asyncResolveComplaintFailed,

} from './actions'

import {
  fetchURI ,
  fetchdisLikeURI,
  fetchCurrentUserURI,
  savePostURI,
  fetchBuzzURI,
  saveComplainURI ,
  fetchComplaintsURI,
  deletePostURI,
  deleteComplaintURI,
  hitBuzzURI,
  fetchLikeURI,
  saveCommentURI,
  fetchCommentURI,
  disLikeBuzzURI,
  resolveComplaintURI,

} from '../config/constants'

import fetch from 'isomorphic-fetch'

export const asyncAction = () => { //get users
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
};

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
};

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
};

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
        dispatch(asyncSaveComplaintSuccess(data));
        dispatch(asyncgetComplaints())
      })
      .catch(err=>{
        dispatch(asyncSaveComplaintFailed(err))
      })
  }
};

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
};

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
};

export  const asyncgetLikes =() =>{
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
};

export const asyncsaveLike = (hitDetails) =>{
  return(dispatch) =>{
    fetch(hitBuzzURI,{
      method:'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(hitDetails)
    })
      .then(res=>res.json())
      .then(data=>{
        dispatch(asyncLikeBuzzSuccess(data));
        dispatch(asyncgetLikes());
        dispatch(asyncgetDislikes());
        dispatch(asyncgetBuzz())
      })
      .catch(err=>{
        dispatch(asyncLikeBuzzFailed(err))
      })
  }
};

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
        dispatch(asyncsaveCommentSuccess(data));
        dispatch(asyncgetBuzz());
        dispatch(asyncgetComment())


      })
      .catch(err=>{
        dispatch(asyncsaveCommentFailed(err))
      })
  }
};

export const asyncgetComment = () =>{
  return(dispatch) =>{
    fetch(fetchCommentURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncCommentSuccess(data))
      })
      .catch(err=>{
        dispatch(asyncCommentFailed(err))
      })
  }
};

export const asyncsaveDislike = (disLikeDetails) =>{

  return(dispatch) =>{
    fetch(disLikeBuzzURI,{
      method:'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(disLikeDetails)
    })
      .then(res=>res.json())
      .then(data=>{
        dispatch(asyncdisLikeBuzzSuccess(data));
        dispatch(asyncgetLikes());
        dispatch(asyncgetDislikes());
        dispatch(asyncgetBuzz());
      })
      .catch(err=>{
        dispatch(asyncdisLikeBuzzFailed(err))
      })
  }
};

export  const asyncgetDislikes =() =>{
  return(dispatch) =>{
    fetch(fetchdisLikeURI, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(data=> {
        dispatch(asyncgetdisLikeSuccess(data));
        dispatch(asyncgetBuzz());
      })
      .catch(err=>{
        dispatch(asyncgetdisLikeFailed(err))
      })
  }
};

export const asyncCloseComplaint = (complaintId) => {
  return(dispatch) =>{
    fetch(deleteComplaintURI,{
      method:'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(complaintId),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncDeleteComplaintSuccess(data));
        dispatch(asyncgetComplaints());

      })
      .catch(err => {
        dispatch(asyncDeleteComplaintFailed(err));
      })
  }
};

export const asyncResolveComplaint = (complaintId) => {
  return(dispatch) =>{
    fetch(resolveComplaintURI,{
      method:'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(complaintId),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(asyncResolveComplaintSuccess(data));
        dispatch(asyncgetComplaints());

      })
      .catch(err => {
        dispatch(asyncResolveComplaintFailed(err));
      })
  }
};