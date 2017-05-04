import React , { Component } from 'react'
import { asyncAction } from '../actions'
import { connect } from 'react-redux'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
           userData:{

           }
        }
    }

    componentWillMount(){
        this.props.dispatch(asyncAction());
    }


componentWillReceiveProps(newProps){
        this.setState(newProps);
}

    render(){
        let users = this.props.users;
        return (
            <div>
                hello from login

                {

                    users.map((item,i) => {
                        const str = item.emailID;
                        if (str.includes('@tothenew.com'))
                            this.props.history.push('/profile')


                    })

                }


            </div>
        )
    }
}

const mapStateToProps = state => state;

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
