import React, {Component} from 'react';

class Showcomment extends Component {

  deleteComment = (commentid) => {
    this.props.deleteComment(commentid);
  };

  render() {
    let count = 0;
    this.props.comments.map((item) => {
      if (item.postId === this.props.buzzid) {
        count++;
      }
    });
    return (
      <div>
        {count != 0 ? <div>Comments :{count}</div> : ''}
        {
          this.props.comments.map((item) => {
            if (item.postId === this.props.buzzid) {
              return (
                <div style={{"margin": "1%"}} key={item._id}>
                  <img
                    className="media-object img-circle showcmntclss"
                    src={item.userDetails.img}/>
                  <h4 key={item._id} style={{display: 'inline-block'}}>
                    {item.userDetails.userName} : {item.comment}</h4>
                  <div className="pull-right">
                    {
                      (item.userDetails.userid == this.props.rowData.currentId) ?
                        <button className="btn btn-info btn-sm " style={{borderRadius: "15px"}}
                                onClick={(e) => this.deleteComment(item._id)}>
                          Delete Comment</button> : ""
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
export default Showcomment;