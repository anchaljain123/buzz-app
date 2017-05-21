import {

  asyncSaveComplaintSuccess,
  asyncSaveComplaintFailed,

  asyncComplaintsSuccess,
  asyncComplaintsFailed,

  asyncDeleteComplaintSuccess,
  asyncDeleteComplaintFailed,

  asyncResolveComplaintSuccess,
  asyncResolveComplaintFailed,



} from '../component.actions/complaint.action'


import {
  asyncgetBuzz
} from './buzz.asyncaction'
import {

  saveComplainURI ,
  fetchComplaintsURI,
  deleteComplaintURI,
  resolveComplaintURI,


} from '../../config/constants'

import fetch from 'isomorphic-fetch'


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