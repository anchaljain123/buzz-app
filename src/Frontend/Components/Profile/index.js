import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Logout from '../Logout'
import Complaints from '../User/Category/Complaints';
import {asyncgetCurrentUser} from '../../actions';
import Navbar from './Navbar'
import '../assets/Styling/logo.css'
import '../assets/Styling/profile.css'
import '../assets/Styling/colors.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false,
            img: '',
        }
    }

    componentWillMount() {
        this.props.dispatch(asyncgetCurrentUser());

    }

    logout = () => {
        this.setState({
            islogout: false,
            img: '',
        })
    }

    render() {
        let userDetails = this.props.userReducers.users;

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
                                    <li className="dropdown"><a href="#" className="dropdown-toggle"
                                                                data-toggle="dropdown">

                                        {
                                            userDetails.map((item) => {
                                                return (
                                                    <span>
                                                    <span className="user-avatar pull-left"
                                                          style={{marginRight: '8px', marginTop: '-5px'}}>

                                                        <img src={item.profile.image.url}
                                                             className="img-responsive img-circle" title=""
                                                             alt="John Doe" width="30px" height="30px"/>

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
                                                        userDetails.map((item) => {
                                                            return (
                                                                <div className="row">
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
                                                                <a
                                                                    className="btn btn-default btn-sm pull-right"
                                                                    onClick={(e) => this.setState({islogout: true})}>
                                                                    <i className="fa fa-power-off"
                                                                       aria-hidden="true"></i>Logout</a>
                                                                {
                                                                    this.state.islogout ?
                                                                        <Logout logout={this.logout}/> : ""
                                                                }
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
                                        userDetails.map((item) => {
                                            return (
                                                <div align="center">
                                                    <img src={item.profile.image.url}
                                                         className="thumbnail img-responsive" width="300px"
                                                         height="300px"/>
                                                    <h1><strong>{item.userName}</strong></h1>
                                                    <hr/>
                                                </div>

                                            )
                                        })
                                    }
                                    <div className="media-body">

                                        <Navbar userprofile={userDetails}/>

                                        <Redirect from="/profile" to="/profile/activity"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <Route exact
                               path={`${match.url}/activity`}
                               render={props => <Activity {...props} userDetails={userDetails}/>}
                        />
                        <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
                        <Route exact path={`${match.url}/complaint`} render={props =>
                            <Complaints {...props} userDetails={userDetails}/>}
                        />
                    </div>
                </div>
            </div>


            /*            <div>
             <nav className="navbar navbar-inverse">
             <div className="container-fluid">
             <div className="navbar-header">
             <span className="site-logo">Logo </span>
             {
             userDetails.map((item)=>{
             return(
             <span>{item.userName}
             <img src={item.profile.image.url}/>
             </span>
             )
             })
             }
             </div>
             <div className="collapse navbar-collapse" id="myNavbar">
             <ul className="nav navbar-nav navbar-right">
             <li><a
             style={{cursor:'pointer'}}
             onClick={(e) => this.setState({islogout:true})}>
             <span className="glyphicon glyphicon-log-out"></span>Logout</a>
             {
             this.state.islogout?
             <Logout logout={this.logout}/> :""
             }
             </li>
             </ul>
             </div>
             </div>
             </nav>
             <div className="container-fluid">
             <div className="row content">
             <Navbar userprofile = {userDetails} />
             <div className="col-sm-9">
             <Route exact
             path={`${match.url}/activity`}
             render={props => <Activity {...props} userDetails={userDetails}/>}
             />
             <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
             <Route exact path={`${match.url}/complaint`} render={props =>
             <Complaints {...props} userDetails={userDetails}/>}
             />
             <Redirect from="/profile" to="/profile/activity" />

             </div>
             </div>
             </div>
             </div>*/
        )
    }
}

const ProfileContainer = connect(state => state)(Profile);
export default ProfileContainer;