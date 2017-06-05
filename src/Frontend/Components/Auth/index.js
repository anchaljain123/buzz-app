import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Resolve from '../User/Category/Buzz/Resolve'
import Complaints from '../User/Category/Complaints';
/*
Component consists of routes when user logged in
 */
class Auth extends Component {

  render() {
    let {match} = this.props;
    let {userDetails} = this.props;
    return (
      <div>
            <Switch>
              <Route exact path={`${match.url}/activity`}
                     render={props => <Activity {...props} userDetails={userDetails}/>}/>
              <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
              <Route exact path={`${match.url}/complaint`}
                     render={props => <Complaints {...props} userDetails={userDetails}/>}/>
              <Route path={`${match.url}/resolve`}
                     render={props => <Resolve {...props} userDetails={userDetails}/>}/>
              <Redirect from="/profile" to="/profile/activity"/>
            </Switch>
       </div>
    )
  }
}
export default Auth;
