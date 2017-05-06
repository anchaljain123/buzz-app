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
        return(
            <div style={{marginLeft:'250px'}}>
                {
                    buzz.map(item =>{
                        if(item.category == "lostnfound")
                        return <div>{item.content}</div>
                    })
                }
            </div>
        )
    }
}



const mapToState = state => state;
const LostnFoundbuzzContainer = connect(mapToState)(LostnFound);

export default LostnFoundbuzzContainer;