import React from 'react'

class ComplaintsRow extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'Pending',
      isClicked: false,
    }
  }
  handleChange = (event) => {
    this.setState({ category: event.target.value, },
      () => {
        this.props.updateCategory(this.state.category,this.props.item._id);
        this.setState({
          category: 'Pending',
          isClicked: false,
        })
      })
  };
  updateState = () =>{
    let {item} = this.props;
    this.setState({ isClicked: true, },()=>{
      this.props.updateState(this.state.isClicked,item);
      this.setState({ isClicked: false, })
    })
  };

  render() {
    let {item,userDetails} = this.props;
    return (
      <tr key={item._id}>
        <td>
          <a href="#" data-toggle="modal" data-target="#myModal" onClick={this.updateState}>
          {item._id}
          </a>
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.status}</td>
        <td>{userDetails[0].role == 'Admin' ? item.userDetails.uname : ""}</td>
        <td>{userDetails[0].role == 'Admin' ?item.userDetails.assignedTo: ""}</td>
        <td>
          <select name="complaints" value={this.state.category} onChange={this.handleChange}>
            <option value="select">Select</option>
            <option value="inprocess">Inprocess</option>
            <option value="close">Close</option>
            <option value="resolve">{userDetails[0].role == 'Admin'?'Resolve':''}</option>
          </select>
        </td>
      </tr>
    )
  }
}
export default ComplaintsRow;