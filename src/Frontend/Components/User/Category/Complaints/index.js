import React, {Component} from 'react'
import ComplaintForm from './ComplaintForm'
import ComplaintsTable from './ComplaintsTable'
import '../../../Assets/Styling/complaintStyling.css'

const Complaint = (props) => {

    return (
      <div className="">
        <ul className="nav nav-tabs">
          <li className="active">
            <a data-toggle="tab" href="#home">
              <button>Form</button>
            </a></li>
          <li><a data-toggle="tab" href="#menu1">
            <button >Complaints</button>
          </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
              <ComplaintForm userDetails={props.userDetails}/>
          </div>
          <div id="menu1" className="tab-pane fade">
              <ComplaintsTable userDetails={props.userDetails}/>
          </div>
        </div>
      </div>
    )

};

export default Complaint;