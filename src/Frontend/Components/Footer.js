import React,{Component} from 'react'
import footerStyling from './assets/Styling/footerStyling'

const Footer = () =>{
    return(
        <footer className="container-fluid text-center " style={footerStyling.bglightgray}>

            <div className="copyrights" style={footerStyling.marginSet}>
                <p>To The New© 2017, All Rights Reserved
                    <br/><span>Web Design By: Anchal Jain</span>
                </p>
            </div>
        </footer>

    )
    }

    export default Footer;