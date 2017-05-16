import React ,{ Component } from 'react'
import LandingPage from '../LandingPg'
import { Route, Redirect } from 'react-router-dom'

 const Logout =()=>{
     return(

                    <a className="btn btn-default btn-sm pull-right" href="http://localhost:4000/logout">
                      <i className="fa fa-power-off" aria-hidden="true"></i>Logout
                    </a>



        )

}

export default Logout