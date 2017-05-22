import React,{Component} from 'react'
import ComplaintsTable from '../../Complaints/ComplaintsTable'
class Resolve extends Component {

  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        {
          this.props.userDetails.length?
          <ComplaintsTable userDetails={this.props.userDetails}/>:""
        }
      </div>
    )
  }

}

export default Resolve;