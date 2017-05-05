import React,{Component} from 'react'
import '../assets/Styling/homePageCss.css'

const LandingPg = () =>{
    return(

        <div className="container" >
            <div className="login">
                <a href="http://localhost:4000/auth/google">
                    <input type="submit" value="Sign in with google" />
                </a>
            </div>
        </div>



    )
}

export default LandingPg;