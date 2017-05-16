import React from 'react'


class ComplaintsRow extends React.Component{
  constructor(){
    super();
  }
  render(){

    let { item } = this.props;
    let { userDetails } = this.props;
    console.log(userDetails[0],"**************")
    return(
      <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.status}</td>
        {
          userDetails[0].role == 'Admin' ?
            <td>{item.userDetails.uname}</td> :
            <td></td>
        }
        <td>
          <button onClick={(event)=>this.props.closeComplain(item._id)} className="glyphicon glyphicon-remove">Close</button>
        </td>
      </tr>

    )
  }
}


export default ComplaintsRow;