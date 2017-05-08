import React , { Component } from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class ImageUploader extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: '',

        };
    }

    handleSubmit(e) {

        this.props.savePost(this.state.file);
        e.preventDefault();

        console.log(this.state.file,"===============file");
    }


    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({ file: file, });
        };
        reader.readAsDataURL(file)
    }


    render(){
        return(
            <div>
                <form encType="multipart/form-data">
                    <input type = "file" onChange={(e)=>this.handleImageChange(e)} />
                    <button type="submit" onClick={this.handleSubmit}>UploadImage</button>
                </form>
            </div>
        )
    }
}