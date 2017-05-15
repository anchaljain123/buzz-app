import React, { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetComment } from '../../../actions';

class Showcomment extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
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
                  style={{marginRight: '8px', marginTop: '-5px'}}
                />
                <h3 >{item.userDetails.userName} - {item.comment}</h3>
              </div>
                )

              }
          })
            }
      </div>
    )
  }
}

const ShowcommentContainer = connect(state=>state)(Showcomment);
export default ShowcommentContainer;