import React , { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetBuzz } from '../../actions'
import ReactBuzzRow from './RecentBuzzRow'

class RecentBuzz extends Component{

    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.dispatch(asyncgetBuzz());
    }
    render(){

        let { buzz } = this.props.buzzReducer;
        let tempArray =[];
        for (let j = buzz.length-1; j >= 0; j--){
            tempArray.push(buzz[j])
        }

        return(

            <div  className="container">
                {
                   tempArray.map(item => (
                       <div key={item._id}><ReactBuzzRow item={item}/></div>
                   ))
                }
            </div>
        )
    }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;