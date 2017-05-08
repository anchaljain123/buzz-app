import React,{ Component } from 'react'
import ComplaintForm from './ComplaintForm'
import ComplaintsTable from './ComplaintsTable'

class Complaint extends  Component {
    constructor(){
        super();
        this.state ={
            newComplaint:false,
        }
    }
    render(){
        return(
            <div style={{marginLeft:'250px',position: 'absolute', top: '0px'}}>
                <button onClick={(e)=>this.setState({newComplaint:true, })}>Form</button>
                <button onClick={(e)=>this.setState({newComplaint:false, })}>Complaints</button>
                {
                    this.state.newComplaint?
                        <ComplaintForm userDetails={this.props.userDetails}/>
                        : <ComplaintsTable/>
                }

            </div>
        )
    }
}

export default Complaint;