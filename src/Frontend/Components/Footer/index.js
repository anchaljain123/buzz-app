import React,{Component} from 'react'
import footerStyling from '../assets/Styling/footerStyling'

const Footer = () =>{
    return(
        <footer className="container-fluid text-center " style={footerStyling.bglightgray}>

            <div className="copyrights" style={footerStyling.marginSet}>
                <span>To The New© 2017, All Rights Reserved</span>
                <span>Web Design By: Anchal Jain</span>
            </div>
        </footer>

    )
}

export default Footer;