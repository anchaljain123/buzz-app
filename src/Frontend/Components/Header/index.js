import React,{Component} from 'react'
import headerStyling from '../assets/Styling/headerStyling'

const Header = () =>{
    return(
        <header id="page-top" style={headerStyling.headercss}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-text">
                            <span className="name">TTN Buzz</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;