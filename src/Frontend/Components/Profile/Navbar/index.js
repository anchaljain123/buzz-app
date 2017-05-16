import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component{
  constructor(props){
    super(props);
  }
  render() {
    let { userDetails } = this.props;
   //console.log('f>>>>>>>>>>>>>>>>',userDetails[0] && userDetails[0].role);
    return (
      <div>
        <div>
          <h3 key={Math.random() * 10000}><strong><Link to="/profile/activity">Activity</Link></strong></h3>
          <hr/>
          <h3 key={Math.random() * 100000}><strong><Link to="/profile/lostnfound">LostnFound</Link></strong></h3>
          <hr/>
          <h3 key={Math.random() * 1000000}><strong><Link to="/profile/complaint">Complaint</Link></strong></h3>
          <hr/>
          {
            userDetails[0] && userDetails[0].role == "Admin" ?
              <h3 key={Math.random() * 10000000}><strong><Link to="/profile/resolve">Resolve</Link></strong></h3>
              : ''
          }

        </div>
        <br/>
      </div>
    )
  }

};

export default Navbar