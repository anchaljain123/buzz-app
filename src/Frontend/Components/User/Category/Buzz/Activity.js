import React,{Component} from 'react';
import CreateBuzz from '../../CreateBuzz'
import { connect } from 'react-redux'
import { asyncSavePost } from '../../../../actions'

class Activity extends Component{
    constructor(props){
        super(props);
    }
    savePost = (postState) =>{
        let formData = new FormData();
        let userData = {
            id: this.props.userDetails[0].id,
            img:this.props.userDetails[0].profile.image.url,
            name:this.props.userDetails[0].userName,
        };
        let details = JSON.stringify(userData);
        formData.append('content', postState.content);
        formData.append('category', postState.category);
        formData.append('img', postState.img);
        formData.append('userDetails', details);
        this.props.dispatch(asyncSavePost(formData));
    };
    render(){
        let { loading } = this.props.buzzReducer;
        return(
            <div>
              {
                this.props.userDetails.length?
                <CreateBuzz savePost={this.savePost}
                            loading={loading}
                            userDetails={this.props.userDetails}
                />:""
              }
            </div>
        )
    }

}

const maptoState =  state => state;
const ActivityContainer =  connect(maptoState)(Activity);

export default ActivityContainer;
