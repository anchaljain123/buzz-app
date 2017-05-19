import React from 'react'
import {connect} from 'react-redux'
import ImageUploader from './Imageupload'
import RecentBuzz from './RecentBuzz'
import loaderimg from '../Assets/images/loader.gif'

class CreateBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      category: "activity",
      img: "", //postimage

    }
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  };

  saveState = (imageState) => {
    this.setState({
      img: imageState.file,
    })
  };

  savePost = () => {
    this.props.savePost(this.state);
    this.setState({
      content: "",
      category: "activity",
      img: '',
    })
  };

  render() {
    // let { loading } = this.props.buzzReducer;
    return (
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
                          onChange={(e) => this.handleChange(e, 'content')}/>
              </div>
            </div>
            <hr/>
            <span className="pull-left">
                            <ImageUploader saveState={this.saveState}/>
                        </span>
            <span className="pull-left">&nbsp;&nbsp;&nbsp;</span>
            <span className="pull-left">
              <div className="dropdown">
                  <select
                    className="btn-success btn-sm"
                    name="dropdownValue"
                    value={this.state.category}
                    onChange={(e) => this.handleChange(e, 'category')}>
                      <option value="activity">Activity</option>
                      <option value="lostnfound">LostnFound</option>
                  </select>
              </div>
            </span>
            <span className="pull-right">
              {
                this.props.loading ? <img src={loaderimg}/> : ""
              }
              <button className="btn btn-primary btn-sm" value="submit" onClick={this.savePost}>Post</button>
            </span>
          </div>
        </div>
        <div>
          <RecentBuzz userDetails={this.props.userDetails}/>
        </div>
      </div>
    )
  }
}

export default CreateBuzz;
