import React,{Component} from 'react';
import CreateBuzz from '../../CreateBuzz'


class Activity extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                    <CreateBuzz userDetails={this.props.userDetails}/>

            </div>
        )
    }

}

export default Activity;