import React, {Component} from 'react';
import {connect} from 'react-redux'
import RecentBuzzRow from './RecentBuzzRow'

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
      data: [],
    };
   // this.onWindowScroll = this.onWindowScroll.bind(this);

  }
/*

  fetchData = () => {
    this.setState({
      data: [...this.state.data, this.props.dispatch(asyncgetBuzz(this.state.offset))]
    })
  };
*/

  componentDidMount() {
    this.props.dispatch(asyncgetBuzz());
    this.props.dispatch(asyncgetLikes());
    this.props.dispatch(asyncgetDislikes());
   // this.props.dispatch(asyncgetComment())
   // window.addEventListener('scroll', this.onWindowScroll);
   // fetchData();

  }
/*
  onWindowScroll() {
    if (changeOffset()) {
      this.setState({offset: this.state.offset + 10});
      fetchData()
    }
  }

  changeOffset() {
    // set height of filters with footer offset, only for large screens and large reports(with scroll)
    if ((window.innerWidth > LARGE_SCREEN_MIN_WIDTH) &&
      ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
      return true;
    }
  }*/

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  deleteBuzz = (postDetails) => {
    this.props.dispatch(asyncdeletePost(postDetails));
    this.props.dispatch(asyncdeletefromLike(postDetails));
    this.props.dispatch(asyncdeletefromComment(postDetails));
    //delete from like & comment
  };

  hitLike = (hitState) => {
    let likeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: hitState.buzzid,
      uid: hitState.currentId,
      like: true
    };

      this.props.dispatch(asyncsaveLike(likeDetails));
    // this.props.dispatch(asyncgetLike());
  };

  hitdisLike = (disLikeState) => {
    let dislikeDetails = {
      userName: this.props.userDetails[0].userName,
      buzzid: disLikeState.buzzid,
      uid: disLikeState.currentId,
      like: false
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
    this.props.dispatch(asyncsaveComment(commentDetails));
  };

  render() {
    let {buzz} = this.props.buzzReducer;
    let {likes} = this.props.likeReducer;
    let {dislikes} = this.props.dislikeReducer;
    let tempArray = [];
    for (let j = 0; j <= buzz.length - 1; j++) {
      tempArray.push(buzz[j]);
    }
    return (
      <div>
        {
          tempArray.map(item => (
            <div key={item._id}>
              {
                tempArray.length === buzz.length ?
                  <RecentBuzzRow buzzData={item}
                                 deleteBuzz={this.deleteBuzz}
                                 userDetails={this.props.userDetails}
                                 hitLike={this.hitLike}
                                 hitdisLike={this.hitdisLike}
                                 likeData={likes}
                                 dislikeData={dislikes}
                                 saveComment={this.saveComment}/> : ""
              }
            </div>
          ))
        }
      </div>
    )
  }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;