import React,{Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { browserHistory } from 'react-router';
import App from './App'
import './assets/Styling/frontpg.css'


const Container = () =>{

    return(
        <div>
            <Router history={ browserHistory }>
                <App/>
            </Router>
        </div>

    )
}

export default Container;