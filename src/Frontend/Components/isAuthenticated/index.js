import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {asyncgetCurrentUser} from '../../actions'

export default (NewComponent) => {
  class AuthHOC extends React.Component {
    componentWillMount () {
      this.props.dispatch(asyncgetCurrentUser());
    }
    render() {
      const { props } = this;

      if (props.userReducers.loading) {
        return <div>loading...</div>
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