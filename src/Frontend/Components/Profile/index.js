import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Logout from '../User/Logout'
import Complaints from '../User/Category/Complaints';
import { asyncgetCurrentUser } from '../../actions';
import Navbar from './Navbar'
import headerimg from '../assets/images/newpic.jpeg';
import '../assets/Styling/main.css'

class Profile extends Component{
    constructor(props){
        super(props);
        this.state ={
            islogout: false,
        }
    }
    componentWillMount(){
        this.props.dispatch(asyncgetCurrentUser());
    }

    logout =() =>{
        this.setState({
            islogout:false,
        })
    }
    render() {
        let userDetails = this.props.userReducers.users;
        const { match } = this.props;
        return (
            <div>
                {
                    userDetails.map((item)=>{
                        return <div>{item.userName}</div>
                    })
                }
                {/*<img src={headerimg} style={{marginLeft:'260px'}}/>*/}
                <Navbar userprofile = {userDetails} />
                <div >
                    <Route exact
                           path={`${match.url}/activity`}
                           render={props => <Activity {...props} userDetails={userDetails}/>}
                    />
                    <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
                    <Route exact path={`${match.url}/complaint`} render={props =>
                        <Complaints {...props} userDetails={userDetails}/>}
                    />
                </div>

                <button
                    style={{ position: 'absolute', top: '0px', right: '0px',}}
                    onClick={(e) => this.setState({islogout:true})}>
                    Logout</button>
                {
                    this.state.islogout?
                        <Logout logout={this.logout}/> :""
                }
            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;