import React,{Component} from 'react'

class Options extends Component{
  constructor(){
    super();
  }
  saveLike = (e) => {
    e.preventDefault();
    this.props.postLike();
   // this.refs.btn.setAttribute("disabled", "disabled");

  };

  savedisLike = (e) =>{
    e.preventDefault();
    this.props.postdisLike();
  };

  render(){
    const { likeData } = this.props;
    const { dislikeData } = this.props;
    let isLike = false;
    likeData.map(item=> {
      if (this.props.uid == item.userDetails.userid
        && this.props.buzzid == item.postId) {
        isLike = true;
      }
    });
    dislikeData.map(item => {
      if (this.props.uid == item.userDetails.userid
        && this.props.buzzid == item.postId) {
        isLike = false;
      }
    });
    return(
      <div>
        <a className="btn btn-default btn-xs" style={{margin:'2px'}}>
          {
            isLike ==true || dislikeData.isdisliked==false?
              <button onClick={this.savedisLike} ref="btn" style={{'background': 'none', 'border': 'none'}}>
                <i className="fa fa-heart" aria-hidden="true"></i>DisLike
              </button>
              :
              <button onClick={this.saveLike} style={{'background': 'none', 'border': 'none'}}>
                <i className="fa fa-heart" aria-hidden="true"></i>Like
              </button>
          }
        </a>
      </div>
    )
  }
}

export default Options;