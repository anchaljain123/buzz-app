import React,{Component} from 'react'
import { connect } from 'react-redux'


class RecentBuzzRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:this.props.buzzData,
        }
    }
    deletePost = () =>{
        this.props.deleteBuzz(this.state.post);
        this.setState({
            post:""
        })

    }

    render(){
        return(
            <div>
                {this.props.buzzData.content}
                <button onClick={this.deletePost}>delete</button>
            </div>
        )
    }
}


const maptoState = state => state;
const RecentBuzzRowContainer = connect(maptoState)(RecentBuzzRow)
export default RecentBuzzRowContainer;