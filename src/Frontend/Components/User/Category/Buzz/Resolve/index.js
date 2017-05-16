import React,{Component} from 'react'
import ComplaintsTable from '../../Complaints/ComplaintsTable'
class Resolve extends Component {

  constructor(props){
    super(props)
  }
  render(){
    let { userDetails } = this.props;
    return(
      <div>
        <ComplaintsTable userDetails={this.props.userDetails}/>
      </div>
    )
  }

}

export default Resolve;