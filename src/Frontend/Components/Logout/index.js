import React ,{ Component } from 'react'
import LandingPage from '../LandingPg'
import { Route, Redirect } from 'react-router-dom'

class Logout extends Component{
    componentWillMount(){
        //this.props.logout();
    }
    render(){
        return(
            <div>
                { <div>
                  {/*  <Redirect to="/"/>
                    <Route exact path="/" component={LandingPage}/>*/}
                    <a href="http://localhost:4000/logout">Logout</a>
                </div>
                }
            </div>
        )
    }
}

export default Logout