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
                <CreateBuzz/>
                <RecentBuzz/>
            </div>
        )
    }

}

export default Activity;