import React,{Component} from 'react'
import { connect } from 'react-redux'
import { asyncAction } from '../actions'

class Profile extends Component{

    constructor(props){
        super(props);
    }


    componentWillMount(){
        this.props.dispatch(asyncAction())
    }
    render() {

        let userDetails = this.props.userData;
        console.log(this.props,"--------profile")
        return (
            <div>
             hello
            </div>
        )
    }
}

const ProfileContainer = connect(state=>state)(Profile);
export default ProfileContainer;