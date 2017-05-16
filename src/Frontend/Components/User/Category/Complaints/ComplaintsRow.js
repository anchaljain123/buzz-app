import React from 'react'


class ComplaintsRow extends React.Component{
  constructor(){
    super();
  }
  render(){

    let { item } = this.props;
    let { userDetails } = this.props;
   // let { users } = this.props;

    return(
      <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.status}</td>
        {
          userDetails[0].role == 'Admin' ?
            <td>{item.userDetails.uname}</td>
             :""
        }
        {
          userDetails[0].role == 'Admin' ?
            <td>{item.userDetails.assignedTo}</td>:""

        }
        <td>
          <button onClick={(event)=>this.props.closeComplain(item._id)} className="glyphicon glyphicon-remove">Close</button>
        </td>
      </tr>

    )
  }
}


export default ComplaintsRow;