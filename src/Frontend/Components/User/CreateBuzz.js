import React from 'react'


class CreateBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:"",
        }
    }
    handleChange = (event) =>{
        this.setState({
            content:event.target.value,
        })
    }

    render(){
        return(
            <div className="container">
                <div>
                    <textarea value={this.state.content} onChange={(event)=>this.handleChange} />
                    <div className="dropdown"
                    >
                        <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">
                            Category<span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li><a  tabindex="-1" href="#">Activity</a></li>
                            <li ><a  tabindex="-1" href="#">LostnFound</a></li>
                        </ul>

                    </div>
                    <button value="submit">Post</button>
                </div>
            </div>
        )
    }
}

export default CreateBuzz;