import React from 'react'


class ComplaintsRow extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'Pending'
    }
  }
  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    },()=>{
      let {item} = this.props;
      this.props.updateCategory(this.state.category,item._id)
    });
    this.setState({
      category:'Pending'
    })
  };

  render() {

    let {item} = this.props;
    let {userDetails} = this.props;
    // let { users } = this.props;
    return (
      <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.status}</td>
        {
          userDetails[0].role == 'Admin' ?
            <td>{item.userDetails.uname}</td>
            : ""
        }
        {
          userDetails[0].role == 'Admin' ?
            <td>{item.userDetails.assignedTo}</td> : ""

        }
        {
          userDetails[0].role == 'Admin' ?
            <td>
              {/*<button onClick={(event) => this.props.resolveComplain(item._id)}
              className="glyphicon glyphicon-remove">
                Resolve
              </button>*/}
              <select name="complaints" value={this.state.category}
                      onChange={(e) => this.handleChange(e, 'category')}>
                <option value="inprogress">Inprogress</option>
                <option value="resolve">Resolve</option>
                <option value="close">Close</option>
              </select>

            </td> :

            <td>
          <select name="complaints" value={this.state.category}
          onChange={(e) =>this.handleChange(e, 'category')}>
          <option value="inprogress">Inprogress</option>
          <option value="close">Close</option>
          </select>
          </td>

        }
      </tr>

    )
  }
}


export default ComplaintsRow;