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

        const { buzzData } = this.props;

        return(
            <div>
                {buzzData.content}
                {
                    buzzData.img?
                        <img src={'http://localhost:4000/'+buzzData.img.path}/>:
                        ""
                }

                <button onClick={this.deletePost}>delete</button>
            </div>
        )
    }
}


const maptoState = state => state;
const RecentBuzzRowContainer = connect(maptoState)(RecentBuzzRow)
export default RecentBuzzRowContainer;