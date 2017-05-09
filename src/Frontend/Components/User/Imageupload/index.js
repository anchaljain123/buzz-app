import React from 'react'
import Dropzone from 'react-dropzone'
import ImagesUploader from 'react-images-uploader'
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class Imageupload extends React.Component{

    constructor(){
        super();
        this.state = {
            file:'',
            imagePreviewUrl:''
        }
    }

    saveimg = (e) =>{
        e.preventDefault();
        let file = e.target.files[0];
        console.log("file", file);
        this.props.savePost(file);


    }

    render(){

        return(
            <div>
                <form encType="multipart/form-data" id="myform">
                    <input type="file" name="sampleFile" onChange={this.saveimg} />
                    <input type='button'  value='UploadImage' />
                </form>
            </div>
        )
    }

}

export default  Imageupload