import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import LandingPage from '../LandingPg'
import Header from '../Header'
import Footer from '../Footer'
import Login from '../Login'
import Profile from  '../Profile'


const App = () => {
    return (
        <div>
            <div>
                <Header/>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Footer/>
            </div>
        </div>
    )
}


export default App;