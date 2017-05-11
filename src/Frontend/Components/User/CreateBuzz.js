import React from 'react'
import { connect } from 'react-redux'
import ImageUploader from './Imageupload'
import { asyncSavePost } from '../../actions'
import RecentBuzz from './RecentBuzz'
import loaderimg from '../assets/images/loader.gif'

class CreateBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "",
            category: "",
            img:"", //postimage

        }
    }
    handleChange = (event, key) =>{
        this.setState({
            [key]: event.target.value,
        })
    };

    saveState =(imageState)=> {
        this.setState({
            img:imageState.file,
        })
    }

    savePost = () => {
        let { userDetails } = this.props; //loggedin user who's posting

        let formData = new FormData();
        let userData = {
            id: userDetails[0].id,
            img:userDetails[0].profile.image.url,
            name:userDetails[0].userName,
        }

        let details = JSON.stringify(userData);
        formData.append('content', this.state.content);
        formData.append('category', this.state.category);
        formData.append('img', this.state.img);
        formData.append('userDetails', details);

        this.props.dispatch(asyncSavePost(formData));
        this.setState({
            content:"",
            category:"",
            img:'',
        })
    };
    render(){

        let { loading } = this.props.buzzReducer;


        return(
            <div>
                <div className="panel panel-default buzzcolor">
                    <div className="panel-body">
                        <div className="media">
                            <div className="media-body">
                            <textarea className="form-control"
                                      rows="3"
                                        value={this.state.content}
                                      name="content"
                                      placeholder="Create Buzz"
                                      onChange={(e)=>this.handleChange(e,'content')}
                            />
                            </div>
                        </div>
                        <hr/>
                        <span className="pull-left">
                            <ImageUploader saveState={this.saveState} />
                        </span>
                        <span className="pull-left">&nbsp;&nbsp;&nbsp;</span>
                        <span className="pull-left">
                            <div className="dropdown">
                                <select
                                    className="btn-success btn-sm"
                                    name="dropdownValue"
                                    value={this.state.category}
                                    onChange={(e) => this.handleChange(e, 'category')}
                                >
                                    <option value="select">Select</option>
                                    <option value="activity">Activity</option>
                                    <option value="lostnfound">LostnFound</option>
                                </select>
                            </div>
                        </span>
                        <span className="pull-right">
                                {
                                    loading?<img src={loaderimg}/>:""
                                }
                               <button className="btn btn-primary btn-sm" value="submit" onClick={this.savePost}>Post</button>
                        </span>
                    </div>
                </div>
            {/*
                <div className="row" >
                    <textarea className="col-sm-12"
                              value={this.state.content}
                              name="content"
                              placeholder="Create Buzz"
                              onChange={(e)=>this.handleChange(e,'content')}
                    />
                    <ImageUploader saveState={this.saveState} />
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
                    {
                        loading?<img src={loaderimg}/>:""
                    }

                </div>*/}
                <div>
                    <RecentBuzz userDetails={this.props.userDetails}/>
                </div>
            </div>
        )
    }
}

const maptoState =  state => state;
const CreateBuzzContainer =  connect(maptoState)(CreateBuzz);

export default CreateBuzzContainer;