import React , { Component } from 'react'
import { asyncAction } from '../../actions'
import { connect } from 'react-redux'

class Login extends Component{
    constructor(props){
        super(props);

    }
    componentWillMount(){
        this.props.dispatch(asyncAction());
    }
    render(){
        let users = this.props.userReducers.users;

        return (
            <div>
                {
                    users.map((item,i) => {
                        const str = item.emailID;
                        if (str.includes('@tothenew.com'))
                            this.props.history.push('/profile/activity');
                        else{
                            this.props.history.push('/');
                        }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => state;
const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
