import React, {Component} from 'react';
import {connect} from 'react-redux'
import RecentBuzzRow from './RecentBuzzRow'
import { asyncgetCurrentUser } from '../../actions';
import {
  asyncgetBuzz,
  asyncdeletePost,
  asyncsaveLike,
  asyncgetLikes,
  asyncsaveComment,
  asyncgetDislikes,
  asyncgetComment,
  asyncdeletefromLike,
  asyncdeletefromComment,
} from '../../actions'

class RecentBuzz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
/*  fetchData = () => {
    this.props.dispatch(asyncgetBuzz(this.state.offset))

  };
  checkifLast = () => {
    return ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
  };
  onWindowScroll = () => {
    let res = this.checkifLast();
    if (res) { //islast
      console.log("");
      this.setState({offset: this.state.offset + 10});
      this.fetchData();
    }
  };*/
  componentWillMount() {
    this.props.dispatch(asyncgetBuzz());
   // this.props.dispatch(asyncgetCurrentUser());
    this.props.dispatch(asyncgetLikes());
    this.props.dispatch(asyncgetDislikes());
    //window.addEventListener('scroll', this.onWindowScroll);
   // this.fetchData(); // 0-10
  }
 /* componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }
*/
  deleteBuzz = (postDetails) => {
    this.props.dispatch(asyncdeletePost(postDetails));
    this.props.dispatch(asyncdeletefromLike(postDetails));
    this.props.dispatch(asyncdeletefromComment(postDetails))
  };
/*
  getState = () => {
    return{
      userName: this.props.userDetails[0].userName,
      buzzid: hitState.buzzid,
      uid: hitState.currentId,
    };

  };*/
  hitLike = (hitState) => {

    console.log(this.props.userDetails[0],"===like")
    let likeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: hitState.buzzid,
      uid: hitState.currentId,
      like: true,
    };
    this.props.dispatch(asyncsaveLike(likeDetails));

  };
  hitdisLike = (disLikeState) => {

    console.log(this.props.userDetails[0],"===dislikes")
    let dislikeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: disLikeState.buzzid,
      uid: disLikeState.currentId,
      like: false,
    };
    this.props.dispatch(asyncsaveLike(dislikeDetails));
  };

  saveComment = (commentState) => {
    console.log(this.props.userReducers.users,"===savecmnt")
    let commentDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: commentState.buzzid,
      uid: commentState.currentId,
      content: commentState.comment,
      userimage: this.props.userDetails[0].profile.image.url,
    };
    this.props.dispatch(asyncsaveComment(commentDetails));
  };

  render() {
    let {buzz} = this.props.buzzReducer;
    let {likes} = this.props.likeReducer;
    let {dislikes} = this.props.dislikeReducer;
    let userDetails = this.props.userReducers.users;
    console.log(">>>>>>>>>>>recentbuzzprops",this.props);
    return(
      <div>
        {
          userDetails.length?
          buzz.map(item => (
            <div key={item._id}>
              {

                  <RecentBuzzRow buzzData={item}
                                 deleteBuzz={this.deleteBuzz}
                                 userDetails={userDetails}
                                 hitLike={this.hitLike}
                                 hitdisLike={this.hitdisLike}
                                 likeData={likes}
                                 dislikeData={dislikes}
                                 saveComment={this.saveComment}
                  />
              }
            </div>
          )):''
        }
      </div>
    )
  }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;