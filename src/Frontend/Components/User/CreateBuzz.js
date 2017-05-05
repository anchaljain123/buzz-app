import React from 'react'
import { connect } from 'react-redux'
import { asyncSavePost } from '../../actions'

class CreateBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: "",
            category: "select",
        }
    }
    handleChange = (event, key) =>{
        this.setState({
            [key]: event.target.value,
        })
    };
    savePost = () => {
        this.props.dispatch(asyncSavePost(this.state));
    };

    render(){
        return(
            <div className="container">
                <div>
                    <textarea value={this.state.content} name="content" onChange={(e)=>this.handleChange(e,'content')} />
                    <div className="dropdown">
                        <select
                            name="dropdownValue"
                            value={this.state.category}
                            onChange={(e) => this.handleChange(e, 'category')}>

                            <option value="select">Select</option>
                            <option value="activity">Activity</option>
                            <option value="lostnfound">LostnFound</option>
                        </select>
                    </div>
                    <button value="submit" onClick={(event) => this.savePost}>Post</button>
                </div>
            </div>
        )
    }
}

const maptoState =  state => state;
const CreateBuzzContainer =  connect(maptoState)(CreateBuzz);

export default CreateBuzzContainer;