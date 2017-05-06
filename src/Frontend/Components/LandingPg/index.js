import React,{Component} from 'react'
import '../assets/Styling/style2.css'
import '../assets/Styling/demo.css'
import gplus from '../assets/images/google-plus.png'

const LandingPg = () =>{
    return(
        <div>
            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
            </ul>
            <div className="container" >
                <header>
                    <div className="headtext">
                        <h1>TTN BUZZAPP</h1>
                        <div className="google-button">
                            <a href="http://localhost:4000/auth/google">
                                <img src={gplus}/>
                                <input type="submit" value="Sign in with google" />
                            </a>
                        </div>
                    </div>
                </header>
               {/* <div className="login">
                    <a href="http://localhost:4000/auth/google">
                        <input type="submit" value="Sign in with google" />
                    </a>
                </div>*/}
            </div>
        </div>



    )
}

export default LandingPg;