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

    let Offset = this.props.buzzReducer.offset;
    //alert(Offset)
    this.props.dispatch(asyncgetBuzz(Offset));
    this.props.dispatch(asyncgetLikes());
    this.props.dispatch(asyncgetDislikes());
    //window.addEventListener('scroll', this.onWindowScroll);
   // this.fetchData(); // 0-10
  }
 /* componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }
*/
  Pagination = () => {
    let Offset = this.props.buzzReducer.offset;
    this.props.dispatch(asyncgetBuzz(Offset));
  };
  deleteBuzz = (postDetails) => {
    this.props.dispatch(asyncdeletePost(postDetails));
    this.props.dispatch(asyncdeletefromLike(postDetails));
    this.props.dispatch(asyncdeletefromComment(postDetails))
  };
  hitLike = (hitState) => {
    let likeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: hitState.buzzid,
      uid: hitState.currentId,
      like: true,
    };
    this.props.dispatch(asyncsaveLike(likeDetails));

  };
  hitdisLike = (disLikeState) => {
    let dislikeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: disLikeState.buzzid,
      uid: disLikeState.currentId,
      like: false,
    };
    this.props.dispatch(asyncsaveLike(dislikeDetails));
  };

  saveComment = (commentState) => {
    let commentDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: commentState.buzzid,
      uid: commentState.currentId,
      content: commentState.comment,
      userimage: this.props.userDetails[0].profile.image.url,
    };
    if(commentState.comment)
    this.props.dispatch(asyncsaveComment(commentDetails));
  };

  render() {
    let { buzz } = this.props.buzzReducer;
    let { isMaxlen } = this.props.buzzReducer;
    let {likes} = this.props.likeReducer;
    let {dislikes} = this.props.dislikeReducer;
    let userDetails = this.props.userReducers.users;
    console.log(buzz.length,">>>>",isMaxlen)
    return(
      <div>
        {
          userDetails.length ?
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
            )) : ''
        }
        {
         isMaxlen?'':
          <button onClick={this.Pagination}  className="glyphicon glyphicon-forward">
          </button>
        }
      </div>
    )
  }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;