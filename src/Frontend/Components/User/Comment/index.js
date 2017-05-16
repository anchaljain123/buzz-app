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
  componentWillMount(){
    this.props.dispatch(asyncgetComment());
  }
  postComment = (commentState) =>{
    this.props.postComment(commentState);
  };

  render(){

    let { comments } = this.props.commentReducer;
    return(
      <div>
        <button onClick={(e)=>this.setState({showcmnt:false})}
                style={{'background': 'none', 'border': 'none',color:'white','background':'black'}}>
          <i className="fa fa-comment" aria-hidden="true"></i>Comment
        </button>&nbsp;

        <button onClick={(e)=>this.setState({showcmnt:true})}
                style={{'background': 'none', 'border': 'none',color:'white','background':'black'}}>
          <i className="fa fa-bars" aria-hidden="true"></i>Show
        </button>

        {
          this.state.showcmnt?
            <ShowComment buzzid={this.props.buzzid} comments={comments}/>
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