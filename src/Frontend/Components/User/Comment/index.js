import React,{Component} from 'react'
import ShowComment from './Showcomment'
import { asyncgetComment } from '../../../actions'
import {connect} from 'react-redux'
import CommentForm from './CommentForm'

class Comment extends Component{

    constructor(props){
        super(props);

        this.state = {
            showcmnt:false,
        }
    }

    postComment = (commentState) =>{
        this.props.postComment(commentState);
    }


    render(){

        return(
            <div>
                    <button onClick={(e)=>this.setState({showcmnt:false})}>Comment</button>
                    <button onClick={(e)=>this.setState({showcmnt:true})}>ShowComment</button>
                    {
                        this.state.showcmnt?
                            <ShowComment buzzid={this.props.buzzid}/>
                            :<CommentForm
                                userDetails={this.props.userDetails}
                                postComment={this.postComment}
                            />
                    }
                </div>
        )
    }
}

const mapTostate = state=>state;
const CommentContainer = connect(mapTostate)(Comment)
export default CommentContainer;