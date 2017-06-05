import React,{ Component } from 'react'
import ComplaintsRow from './ComplaintsRow'
import Showdetails from './Showdetails'
import { connect } from 'react-redux'
import {
  asyncgetComplaints,
  asyncCloseComplaint,
  asyncResolveComplaint,
  asyncinProcessComplaint
} from  '../../../../actions'

class ComplaintsTable extends Component{
  constructor(){
    super();
    this.state = {
      clicked: false,
      item: {},
    }
  }
  componentWillMount(){
    this.props.dispatch(asyncgetComplaints());
    }
  closeComplain = (item) =>{

    let complainData = { id: item._id , admin : item.userDetails.assignedTo };
    this.props.dispatch(asyncCloseComplaint(complainData));
  };

  resolveComplain = (item) =>{

    let complainData = { id: item._id , admin : item.userDetails.assignedTo };
    this.props.dispatch(asyncResolveComplaint(complainData));
  };

  inprocessComplain = (item) =>{

    let complainData = { id: item._id , admin : item.userDetails.assignedTo };
    this.props.dispatch(asyncinProcessComplaint(complainData));
  };

  updateCategory = (categoryState,item) => {

    if(categoryState === 'resolve'){
      this.resolveComplain(item)
    }
    if(categoryState === 'close'){
      this.closeComplain(item)
    }
      if(categoryState === 'inprocess') {
          this.inprocessComplain(item)
      }
  };
  updateState = (changeState,item) =>{
    if(changeState === true)
    {
      this.setState({
        clicked:true,
        item:item
      })
    }
    else {
      this.setState({
        clicked:false,
        item:{}
      })
    }
  };

  render(){
    let { userDetails } = this.props;
    let { complaints } = this.props.complaintReducer;
    return(

            <div className="table-responsive">
              {<table className="table table-bordred table-striped">
                <thead>
                <th>ReferenceId</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                {
                  this.props.userDetails[0].role === 'Admin'?
                    <th>FilledBy</th> :""
                }
                {
                  this.props.userDetails[0].role === 'Admin'?
                    <th>AssignedTo</th> :""
                }
                <th>Actions</th>
                </thead>
                <tbody>
                {

                  complaints.map(item => {
                      if ((item.userDetails.uid === this.props.userDetails[0]._id)&&(userDetails[0].role === 'User')){
                        return <ComplaintsRow item={item}
                                              updateState={this.updateState}
                                              updateCategory={this.updateCategory}
                                              userDetails={this.props.userDetails}
                        />}else {
                        if ((userDetails) && (userDetails[0].role === 'Admin')) {
                          return <ComplaintsRow item={item}
                                                updateState={this.updateState}
                                                updateCategory={this.updateCategory}
                                                userDetails={this.props.userDetails}/>
                        }
                        else {
                          throw "Invalid user"
                        }
                      }
                    }
                  )
                }
                </tbody>
              </table>
              }
              <div>
              {
                this.state.clicked ?
                  <Showdetails item={this.state.item} userDetails={userDetails}/> : ''
              }
              </div>
            </div>
    )
  }
}
const maptoState = state => state;
const ComplaintsTableContainer = connect(maptoState)(ComplaintsTable);

export default ComplaintsTableContainer;