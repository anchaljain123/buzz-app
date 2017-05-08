import React,{ Component } from 'react'

import { Link } from 'react-router-dom'
import '../../assets/Styling/main.css'

class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const userName = this.props.userprofile.userName;
        return(
            <div>
                <div className="col-sm-3 sidenav hidden-xs">
                    <h2>{userName}</h2>
                    <ul className="nav nav-pills nav-stacked">
                        <li key={Math.random()*10000} ><Link to="/profile/activity">Activity</Link></li>
                        <li key={Math.random()*100000}><Link to="/profile/lostnfound">LostnFound</Link></li>
                        <li key={Math.random()*1000000}><Link to="/profile/complaint">Complaint</Link></li>
                    </ul><br/>
                </div>
                <br/>

            </div>
        )
    }
}

export default Navbar