import React,{ Component } from 'react'
import ComplaintsRow from './ComplaintsRow'
import { connect } from 'react-redux'
import { asyncgetComplaints,asyncCloseComplaint } from  '../../../../actions'

class ComplaintsTable extends Component{
  constructor(){
    super()
  }
  componentWillMount(){
    this.props.dispatch(asyncgetComplaints());
  }
  closeComplain = (complainRefID) =>{
    let complainData = {
      id:complainRefID
    };
    this.props.dispatch(asyncCloseComplaint(complainData));

  };

  render(){
    console.log('----------------',this.props.userDetails[0])
    let { userDetails } = this.props;
    let { complaints } = this.props.complaintReducer;
    let tempArray =[];
    for (let j = complaints.length-1; j >= 0; j--){
      tempArray.push(complaints[j])
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              {<table className="table table-bordred table-striped">
                <thead>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                {
                  this.props.userDetails[0].role == 'Admin'?
                    <th>Filled By</th>:""
                }
                <th>Close</th>
                </thead>
                <tbody>
                {

                  complaints.map(item => {
                     if ((userDetails)&&(item.userDetails.uid == this.props.userDetails[0].id)&&(userDetails[0].role == 'User'))
                        return <ComplaintsRow item={item} closeComplain={this.closeComplain} userDetails={this.props.userDetails}/>
                    else if((userDetails) && (userDetails[0].role == 'Admin'))
                       return <ComplaintsRow item={item} closeComplain={this.closeComplain} userDetails={this.props.userDetails}/>
                    }
                  )
                }
                </tbody>

              </table>

              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const maptoState = state => state;
const ComplaintsTableContainer = connect(maptoState)(ComplaintsTable);

export default ComplaintsTableContainer;