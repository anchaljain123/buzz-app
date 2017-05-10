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
        return(
            <div>
               <img src={buzzData.userimg}/>
                {buzzData.content} - {buzzData.category}

                {
                    buzzData.img?
                        <img src={'http://localhost:4000/'+buzzData.img.path}/>:
                        ""
                }
                <button onClick={this.deletePost}>delete</button>
            </div>
        )
    }
}


const maptoState = state => state;
const RecentBuzzRowContainer = connect(maptoState)(RecentBuzzRow)
export default RecentBuzzRowContainer;