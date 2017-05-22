import React, {Component} from 'react'
import ComplaintForm from './ComplaintForm'
import ComplaintsTable from './ComplaintsTable'

class Complaint extends Component {
  constructor() {
    super();
    this.state = {
      newComplaint: false,
    }
  }

  render() {
    console.log(">>>>comp", this.props.userDetails);
    return (
      <div className="">
        <ul className="nav nav-tabs">
          <li className="active">
            <a data-toggle="tab" href="#home">
              <button style={{border: 'none', 'background': 'none'}}
                      onClick={(e) => this.setState({newComplaint: true,})}>
                Form
              </button>
            </a></li>
          <li><a data-toggle="tab" href="#menu1">
            <button style={{border: 'none', 'background': 'none'}}
                    onClick={(e) => this.setState({newComplaint: false,})}>
              Complaints
            </button>
          </a></li>
        </ul>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
            {
              this.props.userDetails.length?
              <ComplaintForm userDetails={this.props.userDetails}/>
              :<div>Loading Complaints</div>
            }
          </div>
          <div id="menu1" className="tab-pane fade">
            {
              this.props.userDetails.length?
              <ComplaintsTable userDetails={this.props.userDetails}/>
                :<div>Loding ComplaintsTable</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Complaint;