import React,{Component} from 'react';
import CreateBuzz from '../../CreateBuzz'
import RecentBuzz from '../../RecentBuzz'

class Activity extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="well">
                    <CreateBuzz userDetails={this.props.userDetails}/>
                </div>
                <div className="well">
                    <RecentBuzz/>
                </div>
            </div>
        )
    }

}

export default Activity;