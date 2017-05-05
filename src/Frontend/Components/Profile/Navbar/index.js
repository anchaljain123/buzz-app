import React,{ Component } from 'react'

import { Link } from 'react-router-dom'


class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const userName = this.props.userprofile.userName;
        return(
            <div>
                {userName}
                <ul>
                    <li>Buzz</li>
                    <ul>
                        <li><Link to="/profile/activity">Activity</Link></li>
                        <li><Link to="/profile/lostnfound">LostnFound</Link></li>
                    </ul>
                    <li><Link to="/profile/complaint">Complaint</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar