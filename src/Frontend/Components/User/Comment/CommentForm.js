import React,{Component} from 'react';

class CommentForm extends Component{

    constructor(){
    super();
        this.state={
            comment:'',
        }
    }
    postComment = () =>{

        this.props.postComment(this.state.comment);
        this.setState({
            comment:"",

        })
    }
    handleChange = (event) =>{
        this.setState({
            comment:event.target.value,
        })
    }

    render(){
        return(
            <div className="media">
                <div className="pull-left">
                    <a href="#">
                        <img
                            className="media-object img-circle"
                            src={this.props.userDetails[0].profile.image.url}
                            width="35px" height="35px"
                            style={{"marginLeft":"3px", "marginRight":"-5px"}}
                        />
                    </a>
                </div>
                <div className="media-body">
                            <textarea style={{height:"0%"}}
                                      className="form-control"
                                      rows="1"
                                      value={this.state.comment}
                                      onChange={this.handleChange}
                                      placeholder="Comment..">
                            </textarea>

                    <button onClick={this.postComment} style={{'background': 'none', 'border': 'none',color:'white','background':'black'}}>
                      Post Comment
                    </button>
                </div>
            </div>
              )
        }
 }

export default CommentForm;