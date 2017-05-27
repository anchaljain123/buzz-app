import React,{Component} from 'react'

class Options extends Component{
  constructor(){
    super();
  }
  saveLike = (e) => {
    e.preventDefault();
    this.props.postLike();
  };
  savedisLike = (e) =>{
    e.preventDefault();
    this.props.postdisLike();
  };
  render(){
    const { likeData,dislikeData } = this.props;
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
        <a className="" style={{margin:'2px'}}>
          {
            isLike ==true || dislikeData.isdisliked==false?
              <button onClick={this.savedisLike} ref="btn" style={{'background': 'none', 'border': 'none'}}>
                <i style={{"fontSize":"200%","color":"red"}} className="fa fa-frown-o fa-3" aria-hidden="true"></i>
              </button>
              :
              <button onClick={this.saveLike} style={{'background': 'none', 'border': 'none'}}>
                <i style={{"fontSize":"200%","color":"#08a916"}} className="fa fa-smile-o fa-3" aria-hidden="true"></i>
              </button>
          }
        </a>
      </div>
    )
  }
}

export default Options;