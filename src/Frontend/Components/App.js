import React,{Component} from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { Route} from 'react-router-dom'
import Login from './Login'
import Profile from  './Profile'


const App = () =>{
    return(
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/login"
                   render={ props => (<Login {...props}/>)}/>
            <Route path = "/profile" component={Profile}/>
            <Footer/>
        </div>
    )
}



export default App;