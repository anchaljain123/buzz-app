import React , { Component } from 'react'
import { asyncAction } from '../../actions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom';

class Login extends Component{
  constructor(props){
    super(props);

  }
  componentWillMount(){

    this.props.dispatch(asyncAction());

  }

  /* componentDidMount(){

   let users = this.props.userReducers.users;
   users.map((item) => {
   const str = item.emailID;
   if (str.includes('@tothenew.com'))
   this.props.history.push('/profile/activity');
   else{
   this.props.history.push('/');
   }
   })
   }*/

  render(){
    let users = this.props.userReducers.users;

    return (
      <div>
     {/*   {
          users.map((item) => {
            const str = item.emailID;
            if (str.includes('@tothenew.com'))
              this.props.history.push('/activity');
            else{
              this.props.history.push('/');
            }
          })
        }*/}
      </div>
    )
  }
}

const mapStateToProps = state => state;
const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
