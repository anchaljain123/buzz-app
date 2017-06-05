import React from 'react';

class Imageupload extends React.Component {

  constructor() {
    super();
    this.state = {
      imagePreviewUrl: '',
      imgpreview:false,
    };
  }
  saveimg = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    if(file) {
      reader.readAsDataURL(file)
    }
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
        imgpreview:true,
      });
      this.props.saveState(file);
    };
    this.setState({
      imgpreview:false
    })
  };
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }
    const showbtn = this.state.imgpreview ? {'visibility': 'visible'} : {'visibility': 'hidden'};
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
        {this.state.imgpreview?$imagePreview:<p></p>}
        <button style={showbtn} onClick={(e)=>this.setState({imgpreview:false})}>
          <i className="fa fa-times" aria-hidden="true"></i></button>
      </div>
    )
  }

}

export default  Imageupload