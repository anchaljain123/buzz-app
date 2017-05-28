import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import LandingPage from '../LandingPg'
import '../Assets/Styling/app.css'
import About from '../About'
import Profile from  '../Profile'
/*
Stateless Component
 */
const App = () => {
    return (
        <div id="wrap">
            <div>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/profile" component={Profile}/>
                <Route path ="/aboutus" component={About}/>
            </div>
        </div>
    )
};


export default App;