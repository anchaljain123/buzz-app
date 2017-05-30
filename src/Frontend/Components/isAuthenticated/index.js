import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {asyncgetCurrentUser} from '../../actions'
import gearimg from '../Assets/images/gear.gif'

export default (NewComponent) => {
  class AuthHOC extends React.Component {
    componentWillMount () {
      this.props.dispatch(asyncgetCurrentUser()); //currentloggin user
    }
    render() {
      const { props } = this;

      if (props.userReducers.loading) { //request is processing
        return <img style={{width:'100%'}} src={gearimg}/>
      }
      if (props.userReducers.users && props.userReducers.users.length && props.userReducers.loading === false) {
        return <NewComponent {...props} />
      } else {
        return <Redirect to="/" />
      }
    }
  }

  const mapStateToProps = state => {
    return state;
  };

 return connect(mapStateToProps)(AuthHOC);

}