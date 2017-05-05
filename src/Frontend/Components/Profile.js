import React,{Component} from 'react'
import { connect } from 'react-redux'
import { asyncgetCurrentUser } from '../actions'

class Profile extends Component{

    constructor(props){
        super(props);
    }


    componentWillMount(){
        this.props.dispatch(asyncgetCurrentUser())
    }
    render() {

        let userDetails = this.props.users;

        return (
            <div>
                {
                    userDetails.map((item)=>{
                        return <div>{item.userName}</div>
                    })
                }

            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;