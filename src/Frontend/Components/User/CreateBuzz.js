import React from 'react'
import { connect } from 'react-redux'
import ImageUploader from './Imageupload'
import { asyncSavePost } from '../../actions'

class CreateBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "",
            category: "select",
            img:"",
        }
    }
    handleChange = (event, key) =>{
        this.setState({
            [key]: event.target.value,
        })
    };
    savePost = (imageState) => {
        let { userDetails } = this.props;
        let formData = new FormData();

        formData.append('content', this.state.content);
        formData.append('category', this.state.category);
        formData.append('userDetails', userDetails);
        formData.append('file', imageState);


        this.props.dispatch(asyncSavePost(formData));
        this.setState({
            content:"",
            category:"select",
            img:'',
        })
    };
    componentWillUpdate(){
        //  redirect to recentbuzz
    }

    render(){
        return(
            <div>
                <div className="row" >
                    <textarea className="col-sm-12"
                              value={this.state.content}
                              name="content"
                              onChange={(e)=>this.handleChange(e,'content')}
                    />
                    <ImageUploader savePost={this.savePost} />
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="dropdown">
                            <select
                                name="dropdownValue"
                                value={this.state.category}
                                onChange={(e) => this.handleChange(e, 'category')}
                            >
                                <option value="select">Select</option>
                                <option value="activity">Activity</option>
                                <option value="lostnfound">LostnFound</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-1">
                        <button value="submit" onClick={this.savePost}>Post</button>
                    </div>

                </div>
            </div>
        )
    }
}

const maptoState =  state => state;
const CreateBuzzContainer =  connect(maptoState)(CreateBuzz);

export default CreateBuzzContainer;