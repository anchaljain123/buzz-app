import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import LandingPage from '../LandingPg'
import Header from '../Header'
import Footer from '../Footer'
import '../Assets/Styling/app.css'
import Login from '../Login'
import Profile from  '../Profile'
import footerStyling from '../Assets/Styling/footerStyling'

const App = () => {
    return (
        <div id="wrap">
            <div>

                <Route exact path="/" component={LandingPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                {/*<footer className="container-fluid text-center" style={footerStyling.bglightgray} >*/}
                {/*<Footer/>*/}
                {/*</footer>*/}
            </div>
        </div>
    )
}


export default App;