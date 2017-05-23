import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Resolve from '../User/Category/Buzz/Resolve'
import Complaints from '../User/Category/Complaints';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    }
  }

  componentWillMount() {
    let {userDetails} = this.props;
    if (userDetails.length && this.props.loading === false) {
      this.setState({
        isAuth: true
      })
    }
    else {
      this.setState({
        isAuth: true
      })
    }
  }

  render() {
    let {match} = this.props;
    let {userDetails} = this.props;

    return (
      <div>
       {/* {
          this.props.loading === false ?
            this.state.isAuth ? //user exists
              userDetails.length ?//usersession maintain
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
                :
                <Redirect to="/profile/activity"/> //ifauth-pressed backbtn
              :
              <Redirect to="/"/> //failed-notAuth
            :
            <div>Loading....</div>//if not loaded
        }*/}

        {
          this.state.isAuth?
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
            :
            <Redirect to="/"/>
        }

      </div>
    )
  }
}
export default Auth;
