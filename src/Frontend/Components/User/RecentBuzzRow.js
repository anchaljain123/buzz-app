import React, {Component} from 'react'
import Comment from  './Comment'
import Options from './Options'
import '../Assets/Styling/recentbuzzstyle.css'
import _ from 'lodash'

class RecentBuzzRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.buzzData,
      userId: this.props.buzzData.userDetails._id, //currentuser who posted
      currentId: this.props.userDetails[0]._id, // loggedin user
    }
  }
  deletePost = () => {
    console.log(this.state,">>>state")
    this.props.deleteBuzz(this.state);
    this.setState({
      post: "",
      userId: "",
      currentId: "",
    })
  };
  postLike = () => {
    let postObject = {
      currentId: this.state.currentId,
      buzzid: this.props.buzzData._id,
    };
    this.props.hitLike(postObject);
  };
  postdisLike = () => {
    let postObject = {
      currentId: this.state.currentId,
      buzzid: this.props.buzzData._id,
    };
    this.props.hitdisLike(postObject);
  };
  postComment = (commentState) => {
    let commentObject = {
      currentId: this.state.currentId,
      buzzid: this.props.buzzData._id,
      comment: commentState,
    };
    this.props.saveComment(commentObject);
  };

  render() {
    const {buzzData,likeData,dislikeData} = this.props;
    let likecount = 0, dislikecount = 0;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="pull-left">
            <img
              className="media-object img-circle imgclss"
              src={buzzData.userDetails.profile.image.url}/>
          </div>
          <div className="pull-right">
            {
              (this.state.userId == this.state.currentId) ?
                <button className="btn-sm btn-danger" onClick={this.deletePost}>delete</button>
                : ""
            }
          </div>
          <h4 style={{"color": "#165ba8"}}>
            <strong>{buzzData.userDetails.userName}</strong>
          </h4>
          <hr/>
          <div className="post-content">
            {buzzData.content}
          </div>
          <div className="post-content">
            {
              buzzData.img ?
                <img src={'http://localhost:4000/' + buzzData.img.path}/> : ""
            }
          </div>
          <hr/>
          <div>
            <div className="pull-right">
              {
                buzzData.category === 'activity' ?
                  <span className="label label-warning">Activity</span> :
                  <span className="label label-info">LostnFound</span>
              }
            </div>
            <div className="pull-left btn-group-xs">
              <Options
                postLike={this.postLike}
                postdisLike={this.postdisLike}
                likeData={likeData}
                dislikeData={dislikeData}
                uid={this.state.currentId}
                buzzid={this.props.buzzData._id}
              />
              <div className="pull-left">
              <span style={{color: "blue","fontSize":"140%"}}><i className="fa fa-thumbs-o-up">
                {
                  _.map(likeData,function(likeitem) {
                    if (likeitem.postId === buzzData._id)
                      likecount++;
                  })
                }
                <div style={{display: 'inline-block',}}>{likecount}</div></i>
              </span>
                <span style={{color: "blue","fontSize":"140%"}}>
                  <i className="fa fa-thumbs-o-down">
                {
                  _.map(dislikeData,dislikeitem => {
                    if (dislikeitem.postId === buzzData._id)
                      dislikecount++;
                  })
                }
                  <div style={{display: 'inline-block',}}>{dislikecount}</div></i>
              </span>
              </div>

            </div>
            <br/>
          </div>
          <hr/>
          <Comment
            postComment={this.postComment}
            buzzid={this.props.buzzData._id}
            userDetails={this.props.userDetails}
            rowData = {this.state}
          />
        </div>
      </div>
    )
  }
}

export default RecentBuzzRow;

