import React,{ Component } from 'react'
import ComplaintsRow from './ComplaintsRow'
import { connect } from 'react-redux'
import { asyncgetComplaints } from  '../../../../actions'

class ComplaintsTable extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.dispatch(asyncgetComplaints());
    }

    render(){

        let { complaints } = this.props.complaintReducer;
        let tempArray =[];
        for (let j = complaints.length-1; j >= 0; j--){
            tempArray.push(complaints[j])
        }

        return(
            <div>
                {
                tempArray.map(item =>(
                    <div key={item._id}> <ComplaintsRow item={item}/> </div>
                ))
            }

            </div>
        )
    }

}


const maptoState = state => state;
const ComplaintsTableContainer = connect(maptoState)(ComplaintsTable);

export default ComplaintsTableContainer;