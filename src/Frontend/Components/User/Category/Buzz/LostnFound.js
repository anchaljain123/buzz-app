import React , { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetBuzz } from '../../../../actions'

class LostnFound extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.dispatch(asyncgetBuzz());
    }

    render(){

        let { buzz } = this.props.buzzReducer;
        let tempArray = [];
        for (let j = 0; j <=buzz.length-1; j++){
            tempArray.push(buzz[j])
        }
        return(
            <div>

                {
                    tempArray.map(item => {
                        if (item.category == "lostnfound")
                            return (
                                <div className="panel panel-default ">
                                    <div className="panel-body">
                                        <div className="pull-left">
                                            <img
                                                className="media-object img-circle"
                                                src={item.userDetails.img}
                                                width="50px" height="50px"
                                                style={{marginRight:'8px', marginTop:'-5px'}}
                                            />
                                        </div>
                                        <div className="pull-right">
                                            <span className="label label-info">{item.category}</span>
                                        </div>
                                        <div key={item._id}>
                                            <h4 style={{"color":"#165ba8"}}>
                                                <strong>{item.userDetails.name}</strong>
                                            </h4>
                                            <hr/>
                                            <div className="post-content">
                                            {item.content}
                                            </div>
                                            <div className="post-content">
                                            {
                                                item.img ?
                                                        <img src={'http://localhost:4000/' + item.img.path}/> : ""
                                            }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                    })

                }

            </div>
        )
    }
}



const mapToState = state => state;
const LostnFoundbuzzContainer = connect(mapToState)(LostnFound);

export default LostnFoundbuzzContainer;