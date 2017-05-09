import React from 'react';

class Imageupload extends React.Component{

    constructor(){
        super();
        this.state = {
            file:'',
        }
        this.saveimg  = this.saveimg.bind(this);
    }

    saveimg = (event) =>{
        event.preventDefault();
        let file = event.target.files[0];
      this.setState({
          file:{
              file
          },
      })

    }

    sendimg = () =>{

        this.props.saveState(this.state.file);
    }

    render(){

        return(
            <div>
                <form encType="multipart/form-data" id="myform">
                    <input type="file" name="sampleFile" onBlur={ this.saveimg} />
                    <input type='button' value='UploadImage' onClick={() => this.sendimg()} />


                </form>

            </div>
        )
    }

}

export default  Imageupload