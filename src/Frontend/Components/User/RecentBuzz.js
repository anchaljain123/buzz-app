import React , { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetBuzz } from '../../actions'

class RecentBuzz extends Component{

    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(asyncgetBuzz());
    }
    render(){

        let { buzz } = this.props.buzzReducer;

        return(
            <div  className="container">
                {
                    buzz.map(item =>{
                        return <div>{item.content}</div>
                    })
                }
            </div>
        )
    }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;