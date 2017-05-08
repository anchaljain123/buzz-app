import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class ImgUploading extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <ImagesUploader
                url="http://localhost:4000/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
            />
        );
    }
}

export default ImgUploading;