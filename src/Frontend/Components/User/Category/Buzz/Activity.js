import React,{Component} from 'react';
import CreateBuzz from '../../CreateBuzz'
import RecentBuzz from '../../RecentBuzz'

class Activity extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={{marginLeft:'250px',marginTop:'-110px'}}>
                <CreateBuzz userDetails={this.props.userDetails}/>
                <RecentBuzz />
            </div>
        )
    }

}

export default Activity;