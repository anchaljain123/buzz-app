import React,{Component} from 'react';

class Activity extends Component{

    constructor(props){
        super(props);
        this.state ={
            content:"",
        }
    }

   handleChange =(event) =>{

        this.setState({
            content:event.target.value,
        })
}
    render(){
        return(
            <div>
                <textarea value={this.state.content} onChange={(event)=>this.handleChange} />
                <button>Category</button>
                <a href="#">Activity</a>
                <a href="#">LostandFound</a>
                <input type="submit">Post</input>
            </div>
        )
    }

}

export default Activity;