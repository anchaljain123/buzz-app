import React, {Component} from 'react'
import ShowComment from './Showcomment'
import {asyncgetComment,asyncdeleteComment} from '../../../actions'
import {connect} from 'react-redux'
import CommentForm from './CommentForm'

class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    this.props.dispatch(asyncgetComment());
  }
  postComment = (commentState) => {
    this.props.postComment(commentState);
  };
  deleteComment = (commentState) =>{
    console.log(commentState,">>>>>>>>>>>>>>>>>>>>>")
    let commentobject = {
      id:commentState
    }
   this.props.dispatch(asyncdeleteComment(commentobject))
  };
  render() {
    let {comments} = this.props.commentReducer;
    return (
      <div>
        <ShowComment buzzid={this.props.buzzid}
                     rowData = {this.props.rowData}
                     comments={comments}
                     deleteComment={this.deleteComment}
        />
        <button onClick={(e) => this.setState({show: !this.state.show})}
                style={{'background': 'none', 'border': 'none', color: 'white', 'background': 'black'}}>
          <i className="fa fa-comment" aria-hidden="true"></i>Comment
        </button>
        {
          this.state.show ? "" :
            <CommentForm
              userDetails={this.props.userDetails}
              postComment={this.postComment}
            />
        }
      </div>
    )
  }
}

const mapTostate = state => state;
const CommentContainer = connect(mapTostate)(Comment);
export default CommentContainer;