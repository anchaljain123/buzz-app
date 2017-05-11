import React,{Component} from 'react'
import { connect } from 'react-redux'
import { asyncgetCurrentUser } from '../../actions';

class RecentBuzzRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:this.props.buzzData,
            userId:this.props.buzzData.userDetails.id, //currentuser who posted
            currentId:this.props.userDetails[0].id, // loggedin user
        }
    }



    deletePost = () =>{
        this.props.deleteBuzz(this.state);
        this.setState({
            post:"",
            userId:"",
            currentId:"",

        })
    };

    postLike = () =>{

            let postObject = {
                currentId : this.state.currentId,
                buzzid:this.props.buzzData._id,
            };
            this.props.hitLike(postObject);


    };

    render(){
        const { buzzData } = this.props;
        console.log(this.props.likeData,"+++++++++++")
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="pull-left">
                        <img
                            className="media-object img-circle"
                            src={buzzData.userDetails.img}
                            width="50px" height="50px"
                            style={{marginRight:'8px', marginTop:'-5px'}}
                        />
                    </div>
                    <div className="pull-right">
                        {
                            (this.state.userId == this.state.currentId)?
                                <button className="btn-sm btn-danger" onClick={this.deletePost}>delete</button>
                                :""
                        }
                    </div>
                    <h4 style={{"color":"#165ba8"}}>
                        <strong>{buzzData.userDetails.name}</strong>
                    </h4>
                    <hr/>
                    <div className="post-content">
                        {buzzData.content}
                    </div>
                    <div className="post-content">
                        {
                            buzzData.img?
                                <img src={'http://localhost:4000/'+buzzData.img.path}/>: ""
                        }
                    </div>
                    <hr/>
                    <div>
                        <div className="pull-left">
                            {
                                buzzData.category=='activity'?
                                    <span className="label label-warning">Activity</span>
                                    :
                                    <span className="label label-info">LostnFound</span>
                            }

                        </div>
                        <div className="pull-left">
                            <span style={{color:"blue"}}><i className="fa fa-thumbs-o-up"></i> 3 </span>
                        </div>
                        <div className="pull-right btn-group-xs">
                            <a className="btn btn-default btn-xs" style={{margin:'2px'}}>

                                <button onClick={this.postLike} style={{'background':'none','border':'none'}}>
                                    <i className="fa fa-heart" aria-hidden="true"></i>Like
                                </button>
                            </a>
                            <a className="btn btn-default btn-xs"  style={{margin:'2px'}}>
                                <i className="fa fa-comment" aria-hidden="true"></i>Comment
                            </a>
                        </div>
                        <br/>
                    </div>
                    <hr/>
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
                            <textarea style={{height:"0%"}} className="form-control" rows="1" placeholder="Comment..">
                            </textarea>
                            <button>Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const maptoState = state => state;
const RecentBuzzRowContainer = connect(maptoState)(RecentBuzzRow)
export default RecentBuzzRowContainer;