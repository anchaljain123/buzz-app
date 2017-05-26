import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import Logout from '../Logout'
import {asyncLogout} from '../../actions';
import Navbar from './Navbar'
import Auth from '../Auth'
import isAuth from '../isAuthenticated'
import ttnlogo from '../Assets/images/ttn.png'
import '../Assets/Styling/logo.css'
import '../Assets/Styling/profile.css'
import '../Assets/Styling/colors.css'

class Profile extends Component {
  render() {
    let userDetails = this.props.userReducers.users;
    let {loading} = this.props.userReducers;
    return (
      <div className="mainbody container-fluid">
        <div className="row">
          <div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="./ORqmj" style={{margin: '-12px'}}>
                  <img alt="Brand" src={ttnlogo} width="81px" height="60px"/>
                </a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="user-avatar pull-left" style={{marginRight: '8px', marginTop: '-5px'}}>
                      <img src={userDetails[0].profile.image.url}
                           className="img-responsive img-circle" width="30px" height="30px"/>
                    </span>
                    <span className="user-name">
                      {userDetails[0].userName}
                     </span>
                    <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-content">
                          <div className="row" >
                            <div className="col-md-3">
                              <img src={userDetails[0].profile.image.url}/>
                            </div>
                            <div className="col-md-7">
                              <span>{userDetails[0].userName}</span>
                              <p className="text-muted small">
                                {userDetails[0].emailID}</p>
                            </div>
                          </div>
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

                  <img src={userDetails[0].profile.image.url}
                       className="thumbnail img-responsive"
                       width="100px"
                       height="100px"
                  />
                  <h1><strong>{userDetails[0].userName}</strong></h1>
                  <hr/>
                  <div className="media-body">
                      <Navbar userDetails={userDetails}/>
                  </div>
                </div>

              </div>
            </div>
            <div className="panel panel-default" style={{"backgroundColor":"#6ccfd4"}}>
              <div className="panel-body">
                <a href="http://localhost:9000/aboutus" style={{"color":"white"}}>Aboutus</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <Auth userDetails={userDetails} match={this.props.match} loading={loading}/>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(state => state)(isAuth(Profile));