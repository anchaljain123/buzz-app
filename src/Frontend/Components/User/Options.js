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
    let isLike;
    return(
      <div>
        <a className="btn btn-default btn-xs" style={{margin:'2px'}}>

          {
            likeData.map(item=> {
                if (this.props.uid == item.userDetails.userid
                  && this.props.buzzid == item.postId)
                  isLike = true;

                else
                  isLike = false;
              }
            )

          }
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

        <a className="btn btn-default btn-xs"  style={{margin:'2px'}}>
          <i className="fa fa-comment" aria-hidden="true"></i>Comment
        </a>
      </div>
    )
  }
}

export default Options;