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
        for (let j = buzz.length-1; j >= 0; j--){
            tempArray.push(buzz[j])
        }
        return(
            <div style={{marginLeft:'250px'}}>
                {
                    tempArray.map(item => {
                        if (item.category == "lostnfound")
                            return (
                        <div key={item._id}>{item.content}
                            {
                                item.img ?
                                    <img src={'http://localhost:4000/' + item.img.path}/> :
                                    ""
                            }
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