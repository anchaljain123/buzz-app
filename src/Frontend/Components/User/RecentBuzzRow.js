import React,{Component} from 'react'
import { connect } from 'react-redux'
import { asyncgetCurrentUser } from '../../actions';

class RecentBuzzRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:this.props.buzzData,
            userId:this.props.buzzData.userDetails[0], //currentuser who posted
            currentId:this.props.userDetails[0].id, // loggedin user

        }
    }

    deletePost = () =>{

       if(this.state.userId == this.state.currentId)
        this.props.deleteBuzz(this.state);

        this.setState({
            post:"",
            userId:"",
            currentId:"",
        })

    }

    render(){

        const { buzzData } = this.props;

        let userData = this.props.userReducers.users;
        console.log(userData,">>>>>>>>>");
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="pull-left">
                            <img className="media-object img-circle" src={buzzData.userimg} width="50px" height="50px" style={{marginRight:'8px', marginTop:'-5px'}}/>
                    </div>
                    <div className="pull-right">
                        <button className="btn-sm btn-danger" onClick={this.deletePost}>delete</button>
                    </div>
                    <h4 style={{"color":"#165ba8"}}>
                        <strong>{this.state.userId}</strong>
                    </h4>
                    <hr/>
                    <div className="post-content">
                        {buzzData.content}
                    </div>
                    <div className="post-content">
                        {
                            buzzData.img?
                                <img src={'http://localhost:4000/'+buzzData.img.path}/>:
                                ""
                        }
                    </div>
                    <hr/>
                    <div>
                        <div className="pull-left">
                            <span className="label label-warning">{buzzData.category}</span>
                        </div>
                        <div className="pull-right btn-group-xs">
                            <a className="btn btn-default btn-xs"><i className="fa fa-heart" aria-hidden="true"></i> Like</a>
                            <a className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</a>
                        </div>
                        <br/>
                    </div>
                    <hr/>
                    <div className="media">
                        <div className="pull-left">
                            <a href="#">
                                <img className="media-object img-circle" src={userData[0].profile.image.url} width="35px" height="35px" style={{"marginLeft":"3px", "marginRight":"-5px"}}/>
                            </a>
                        </div>
                        <div className="media-body">
                            <textarea style={{height:"0%"}} className="form-control" rows="1" placeholder="Comment"></textarea>
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