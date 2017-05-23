import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Logout from '../Logout'
import Complaints from '../User/Category/Complaints';
import {asyncgetCurrentUser, asyncLogout} from '../../actions';
import Navbar from './Navbar'
import Auth from '../Auth'
import Resolve from '../User/Category/Buzz/Resolve'
import '../Assets/Styling/logo.css'
import '../Assets/Styling/profile.css'
import '../Assets/Styling/colors.css'
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
     // isAuthenticated: false,
    }
  }

  componentWillMount() {
    this.props.dispatch(asyncgetCurrentUser());
    //console.log(this.props.userReducers.loading, "<<<<<<<===<<");
   // console.log(this.props.userReducers.users, ">>>>>>>>>====>>")
  }

  /*
   export default (isAuthRoute) => (NewComponent) => {
   class Auth extends React.Component {
   render() {
   const { props } = this;
   if (props.sessionCreate.loading) {
   return <div>loading...</div>
   }
   if (isAuthRoute){
   if(props.sessionCreate.sessionData) {
   return <NewComponent {...this.props} />
   } else {
   return <Redirect to="/"/>
   }
   }else if(props.sessionCreate.sessionData) {
   return <Redirect to='/home'/>
   } else {
   return <NewComponent {...this.props}/>
   }
   }
   }
   const mapStateToProps = state => {
   return state;
   };
   return connect(mapStateToProps)(Auth);
   }
   */
/*  componentWillReceiveProps(newprops) {
    console.log(newprops.userReducers, "---newprops>>>>>>>>>>");
    if (!(newprops.userReducers.users.length) && newprops.userReducers.loading === false) {//failed
      console.log("invaliduser");
     // this.setState({isAuthenticated: false,});
      this.props.history.push('/');//no user exists
    }
    if (newprops.userReducers.users.length && newprops.userReducers.loading === false) {//success
      console.log("valid user");
      //this.setState({isAuthenticated: true,})
    }
  }*/

  render() {
    let userDetails = this.props.userReducers.users;
    let {loading} = this.props.userReducers;
    console.log(this.props.userReducers, ".profile", loading, ".loader");
    const {match} = this.props;
    return (
      <div className="mainbody container-fluid">
        <div className="row">
          <div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="./ORqmj"
                   style={{marginRight: '-8px', marginTop: '-5px'}}>
                  <img alt="Brand" src="https://lut.im/7trApsDX08/GeilMRp1FIm4f2p7.png" width="30px"
                       height="30px"/>
                </a>
              </div>
              <div className="navbar-collapse collapse">

                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {
                      userDetails.map((item, i) => {
                        return (
                          <span key={i}>
                            <span className="user-avatar pull-left" style={{marginRight: '8px', marginTop: '-5px'}}>
                              <img src={item.profile.image.url}
                                   className="img-responsive img-circle" width="30px" height="30px"/>
                            </span>
                            <span className="user-name">
                              {item.userName}
                             </span>
                          </span>
                        )
                      })
                    }
                    <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-content">
                          {
                            userDetails.map((item, i) => {
                              return (
                                <div className="row" key={i}>
                                  <div className="col-md-5">
                                    <img src={item.profile.image.url}/>
                                  </div>
                                  <div className="col-md-7">
                                    <span>{item.userName}</span>
                                    <p className="text-muted small">
                                      {item.emailID}</p>
                                    <div className="divider">
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                        <div className="navbar-footer">
                          <div className="navbar-footer-content">
                            <div className="row">
                              <div className="col-md-6">
                              </div>
                              <div className="col-md-6">
                                <Logout/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{paddingTop: '50px'}}></div>
          <div className="col-lg-3 col-md-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="media">
                  {
                    userDetails.map((item, i) => {
                      return (
                        <div key={i}>
                          <img src={item.profile.image.url}
                               className="thumbnail img-responsive"
                               width="100px"
                               height="100px"
                          />
                          <h1><strong>{item.userName}</strong></h1>
                          <hr/>
                        </div>

                      )
                    })
                  }
                  <div className="media-body">
                    <Navbar userDetails={userDetails}/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
{/*            <Switch>
              <Route exact path={`${match.url}/activity`}
                     render={props => <Activity {...props} userDetails={userDetails}/>}/>
              <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
              <Route exact path={`${match.url}/complaint`}
                     render={props => <Complaints {...props} userDetails={userDetails}/>}/>
              <Route path={`${match.url}/resolve`}
                     render={props => <Resolve {...props} userDetails={userDetails}/>}/>
              <Redirect from="/profile" to="/profile/activity"/>

            </Switch>*/}
            { userDetails.length ?
              <Auth userDetails={userDetails} match={match} loading={loading}
              /> :
              <div></div>
            }
          </div>
        </div>
      </div>
    )
  }
}

const ProfileContainer = connect(state => state)(Profile);
export default ProfileContainer;