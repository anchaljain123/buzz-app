import React,{Component} from 'react'

class RecentBuzzRow extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div>
                {this.props.item.content}
            </div>
        )
    }
}


export default RecentBuzzRow;