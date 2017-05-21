import React, {Component} from 'react'

class ShowOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*likecounter: this.props.likecount,
      dislikecounter: this.props.dislikecount,*/
      likecounter:this.props.likes,
    }
  }

  render() {
    return (
      <div>
        <span style={{color: "blue"}}>
          <i className="fa fa-thumbs-o-up">
          <div style={{display: 'inline-block',}}>
            {this.state.likecounter}
          </div>
          </i>
        </span>
{/*        <span style={{color: "blue"}}><i className="fa fa-thumbs-o-down">
         <div style={{display: 'inline-block',}}>
           {this.state.dislikecounter}
         </div></i>
      </span>*/}
      </div>
    )
  }
}


export default ShowOptions;