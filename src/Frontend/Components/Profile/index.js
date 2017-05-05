import React,{ Component} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import Activity from '../User/Category/Buzz/Activity';
import LostnFound from '../User/Category/Buzz/LostnFound';
import Complaints from '../User/Category/Complaints/Complaints'
import { asyncgetCurrentUser } from '../../actions'
import Navbar from './Navbar'

class Profile extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(asyncgetCurrentUser())
    }
    render() {
        let userDetails = this.props.users;
        const { match } = this.props;
        return (
            <div>
                {
                    userDetails.map((item)=>{
                        return <div>{item.userName}</div>
                    })
                }
                <Navbar userprofile = {this.props.users} />
                <Route exact path={`${match.url}/activity`} component={Activity}/>
                <Route exact path="/profile/lostnfound" component={LostnFound}/>
                <Route exact path="/profile/complaint" component={Complaints}/>
            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;