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
            /* <div id="header">
             <div className="top">

             <div id="logo">
             <span className="image avatar48"><img src="#" alt="" /></span>
             <h1 id="title">{userName}</h1>
             <p>Engineer</p>
             </div>

             <nav id="nav">
             <ul>
             <li><Link to="/profile/activity"  >Activity</Link></li>
             <li><Link to="/profile/lostnfound"  >Lost And Found</Link></li>
             <li><Link to="/profile/complaint"  >Complaint</Link></li>
             <li><Link to="#"  className="skel-layers-ignoreHref">Resolve</Link></li>
             </ul>
             </nav>
             </div>
             </div>*/
            <div>
                {userName}
                <ul>
                    <li><Link to="/profile/activity">Activity</Link></li>
                    <li><Link to="/profile/lostnfound">LostnFound</Link></li>
                    <li><Link to="/profile/complaint">Complaint</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar