import React from 'react'


class ComplaintsRow extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'Pending',
      isClicked: false,
    }
  }

  handleChange = (event, key) => {
    this.setState({
        [key]: event.target.value,
      },
      () => {
        let {item} = this.props;
        console.log('>>>>categorystate', this.state.category);
        this.props.updateCategory(this.state.category, item._id);
        this.setState({
          category: 'Pending',
          isClicked: false,
        })
      });
  };
  updateState = () =>{
    let {item} = this.props;
    this.setState({
      isClicked: true,
    },()=>{
      this.props.updateState(this.state.isClicked,item);
      this.setState({
        isClicked: false,
      })
    })
  };

  render() {

    let {item} = this.props;
    let {userDetails} = this.props;
    // let { users } = this.props;
    return (
      <tr key={item._id}>
        <td><a href="#"  data-toggle="modal" data-target="#myModal" onClick={this.updateState}>
          {item._id}</a></td>
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
        <td>
          <select name="complaints" value={this.state.category}
                  onChange={(e) => this.handleChange(e, 'category')}>
            <option value="inprogress">Inprogress</option>
            <option value="close">Close</option>
            {
              userDetails[0].role == 'Admin' ?
                <option value="resolve">Resolve</option> : ''
            }
          </select>
        </td>
      </tr>

    )
  }
}


export default ComplaintsRow;