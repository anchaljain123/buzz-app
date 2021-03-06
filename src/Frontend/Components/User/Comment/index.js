import React, {Component} from 'react'
import ShowComment from './Showcomment'
import {asyncgetComment, asyncdeleteComment} from '../../../actions'
import {connect} from 'react-redux'
import '../../Assets/Styling/commentStyles.css'
import CommentForm from './CommentForm'

class Comment extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.props.dispatch(asyncgetComment());
  }

  postComment = (commentState) => {
    this.props.postComment(commentState);
  };
  deleteComment = (commentState) => {
    let commentobject = {id: commentState};
    this.props.dispatch(asyncdeleteComment(commentobject))
  };

  render() {

    let {comments} = this.props.commentState;
    return (
      <div style={{"background": "aliceblue", borderRadius: "12px", padding: "9px"}}>
        <ShowComment buzzid={this.props.buzzid}
                     rowData={this.props.rowData}
                     comments={comments}
                     deleteComment={this.deleteComment}
        />
        <button onClick={(e) => this.setState({show: !this.state.show})} className="buttonclss">
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


const mapStateToProps = (state) => {
  return {
    commentState: state.commentReducer
  }
};


const CommentContainer = connect(mapStateToProps, null)(Comment);
export default CommentContainer;