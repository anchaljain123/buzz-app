import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Complaints from '../User/Category/Complaints';
import { asyncgetCurrentUser } from '../../actions';
import Navbar from './Navbar'
import '../assets/Styling/main.css'

class Profile extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(asyncgetCurrentUser())
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
                <Navbar userprofile = {userDetails} />
                <div >
                    <Route exact
                           path={`${match.url}/activity`}
                           render={props => <Activity {...props} userDetails={userDetails}/>}
                    />
                    <Route exact path={`${match.url}/lostnfound`} component={LostnFound}/>
                    <Route exact path="/profile/complaint" component={Complaints}/>
                </div>
            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;