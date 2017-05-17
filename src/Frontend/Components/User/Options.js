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
    const { likeData } = this.props;
    const { dislikeData } = this.props;
    console.log(this.props.buzzid,">>>>>>>>>>>>.");
    let isLike = false;
    return(
      <div>
        <a className="btn btn-default btn-xs" style={{margin:'2px'}}>
          {
            likeData.map(item=> {
                if (this.props.uid == item.userDetails.userid
                  && this.props.buzzid == item.postId) {

                  isLike = true;
                }

              }
            )
          }
          {
            dislikeData.map(item => {
              if (this.props.uid == item.userDetails.userid
                && this.props.buzzid == item.postId) {

                isLike = false;
              }

            })
          }
          { console.log(isLike,"??????????????????like?") }
          {
            isLike ?
              <button onClick={this.savedisLike} style={{'background': 'none', 'border': 'none'}}>
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