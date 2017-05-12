import React , { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetBuzz , asyncdeletePost ,asyncsaveHitCount , asyncgetLike , asyncsaveComment } from '../../actions'
import RecentBuzzRow from './RecentBuzzRow'

class RecentBuzz extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
     this.props.dispatch(asyncgetBuzz());
     this.props.dispatch(asyncgetLike());
    }

    deleteBuzz = (postDetails) => {
        this.props.dispatch(asyncdeletePost(postDetails));
    };

    hitLike = (hitState) =>{
        let likeDetails = {
            userName:this.props.userDetails[0].userName,
            buzzid:hitState.buzzid,
            uid:hitState.currentId,
        }
        this.props.dispatch(asyncsaveHitCount(likeDetails));
       // this.props.dispatch(asyncgetLike());

    };

    saveComment = (commentState) =>{

        let commentDetails = {
            userName:this.props.userDetails[0].userName,
            buzzid:commentState.buzzid,
            uid:commentState.currentId,
            content:commentState.comment,
        }
        this.props.dispatch(asyncsaveComment(commentDetails))

    }

    hitdisLike = (disLikeState) =>{
    console.log('dislike')
    }

    render(){
        let { buzz } = this.props.buzzReducer;
        let { likes } = this.props.likeReducer;

        let tempArray =[];
        for (let j = 0; j <= buzz.length-1; j++){
            tempArray.push(buzz[j]);
        }
        return(
            <div >
                {
                    tempArray.map(item => (
                        <div key={item._id}>
                            {
                                tempArray.length == buzz.length?
                                    <RecentBuzzRow buzzData={item}
                                                   deleteBuzz={this.deleteBuzz}
                                                   userDetails={this.props.userDetails}
                                                   hitLike ={this.hitLike}
                                                   hitdisLike={this.hitdisLike}
                                                   likeData = {likes}
                                                   saveComment={this.saveComment}
                                    /> :""
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