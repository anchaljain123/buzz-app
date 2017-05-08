import React from 'react'
import Dropzone from 'react-dropzone'


class Imageupload extends React.Component{

    uploadFile = (files) =>{
        console.log(files[0],"---------------file")
        console.log(image)
    }

    render(){
        return(
            <div>
                    <Dropzone onDrop={this.uploadFile.bind(this)}/>
            </div>
        )
    }

}

export default  Imageupload