import React , { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetBuzz , asyncdeletePost } from '../../actions'
import RecentBuzzRow from './RecentBuzzRow'

class RecentBuzz extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(asyncgetBuzz());
    }

    deleteBuzz = (postDetails) => {
        this.props.dispatch(asyncdeletePost(postDetails));
    }

    render(){

        let { buzz } = this.props.buzzReducer;
        let tempArray =[];
        for (let j = buzz.length-1; j >= 0; j--){
            tempArray.push(buzz[j])
        }
        return(

            <div className="row">
                {
                   tempArray.map(item => (
                       <div  className="well" key={item._id}><RecentBuzzRow buzzData={item} deleteBuzz={this.deleteBuzz} /></div>
                   ))
                }
            </div>
        )
    }

}

const mapToState = state => state;
const RecentbuzzContainer = connect(mapToState)(RecentBuzz);

export default RecentbuzzContainer;