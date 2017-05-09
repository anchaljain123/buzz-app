import React,{Component} from 'react';
import CreateBuzz from '../../CreateBuzz'


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

            </div>
        )
    }

}

export default Activity;