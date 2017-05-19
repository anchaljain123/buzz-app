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
                    width="50px" height="50px"
                    style={{marginRight: '8px', marginTop: '4px'}}
                  />
                  <h3 key={item._id}>{item.userDetails.userName} : {item.comment}</h3>
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