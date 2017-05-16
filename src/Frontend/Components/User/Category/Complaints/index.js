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

                <div className="">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a data-toggle="tab" href="#home">
                                <button style={{border:'none','background':'none'}} onClick={(e)=>this.setState({newComplaint:true, })}>
                                  Form</button>
                            </a></li>
                        <li><a data-toggle="tab" href="#menu1">
                            <button  style={{border:'none','background':'none'}} onClick={(e)=>this.setState({newComplaint:false, })}>
                              Complaints</button>
                        </a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                            <ComplaintForm userDetails={this.props.userDetails}/>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <ComplaintsTable userDetails={this.props.userDetails} />
                        </div>
                    </div>
                </div>


            /*            <div style={{marginLeft:'250px',position: 'absolute'}}>
             <button onClick={(e)=>this.setState({newComplaint:true, })}>Form</button>
             <button onClick={(e)=>this.setState({newComplaint:false, })}>Complaints</button>
             {
             this.state.newComplaint?
             <ComplaintForm userDetails={this.props.userDetails}/>
             : <ComplaintsTable/>
             }

             </div>*/
        )
    }
}

export default Complaint;