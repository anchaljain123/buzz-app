import React from 'react';

class Imageupload extends React.Component {

  constructor() {
    super();
    this.state = {
      file: '',
    };
    this.saveimg = this.saveimg.bind(this);
  }
  saveimg = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    this.setState({ file: {file} }, () => {
      this.props.saveState(this.state.file);
    })
  };
  render() {
    return (
      <div>
        <form encType="multipart/form-data" id="myform">
          <div className="image-upload">
            <label htmlFor="file-input" style={{cursor:"pointer"}}>
              <i className="fa fa-camera" style={{fontSize:"190%"}}></i>
            </label>
            <div style={{opacity:"-0.1"}}>
            <input id="file-input" style={{position:"absolute"}} type="file" name="sampleFile" onBlur={this.saveimg} accept="image/*,video/*"/>
            </div>
          </div>
          </form>
      </div>
    )
  }

}

export default  Imageupload