import React, {Component} from 'react';
import {connect} from 'react-redux'
import {asyncgetComment} from '../../../actions';

class Showcomment extends Component {
  constructor(props) {
    super(props)
  }

  deleteComment = (commentid) => {
    this.props.deleteComment(commentid);
  };

  render() {
    return (
      <div>
        {
          this.props.comments.map((item) => {
            if (item.postId == this.props.buzzid) {
              return (
                <div key={item._id}>
                  <img
                    className="media-object img-circle"
                    src={item.userDetails.img}
                    width="40px" height="40px"
                    style={{marginRight: '8px', marginTop: '4px',display:'inline-block'}}
                  />
                  <h4 key={item._id} style={{display:'inline-block'}} >{item.userDetails.userName} : {item.comment}</h4>
                  <div className="pull-right">
                    {
                      (item.userDetails.userid == this.props.rowData.currentId) ?
                        <button className="btn btn-sm" onClick={(e)=>this.deleteComment(item._id)}>delete</button> : ""
                    }
                  </div>
                </div>
              )

            }
          })
        }
      </div>
    )
  }
}

const ShowcommentContainer = connect(state => state)(Showcomment);
export default ShowcommentContainer;