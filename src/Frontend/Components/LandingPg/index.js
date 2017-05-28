import React,{Component} from 'react'
import '../Assets/Styling/style2.css'
import '../Assets/Styling/demo.css'
import gplus from '../Assets/images/gplus.jpg'
/*
Presentation Component : Landing page of app
 */
const LandingPg = (props) =>{
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
                            <a className="google-button" href="http://localhost:4000/auth/google">
                                <img src={gplus}/>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
};

export default LandingPg;