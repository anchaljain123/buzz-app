import React,{Component} from 'react'
import { Link } from 'react-router-dom'


const Home = () =>{
    return(

        <div>


            {/*<Link to ="/login"><button>login using Gmail</button></Link>*/}


            <a href="http://localhost:4000/auth/google">
                <input type="submit" value="sign in with google" />
            </a>

        </div>
    )
}

export default Home;