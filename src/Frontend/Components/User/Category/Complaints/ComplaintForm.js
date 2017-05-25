import React, {Component} from 'react'
import '../../../Assets/Styling/formStyling.css'
import {asyncSaveComplaint} from '../../../../actions'
import {connect} from 'react-redux'

class ComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      category: 'select',
      title: '',
      file: '',
    }
  }
  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value,
    })
  };
  /*
   saveimg = (event) =>{
   event.preventDefault();
   let file = event.target.files[0];
   this.setState({
   file:{file},
   },()=>{
   this.props.saveState(this.state.file);
   })

   };*/

  saveComplaint = (e) => {
    e.preventDefault();
    let { userDetails } = this.props;
    let admin;
    if (this.state.category === 'hardware')
      admin = "Anchal Jain";
    if (this.state.category === 'software')
      admin = "Pankaj Malhotra";
    if (this.state.category === 'others')
      admin = "Puja Goyal";

    let userObject = {
      uid: userDetails[0].id,
      uname: userDetails[0].userName,
      assignedTo: admin,
    };
    let ComplainInfo = {
      description: this.state.description,
      category: this.state.category,
      title: this.state.title,
      userDetails: userObject,
      // img:imageState,
    };
    if((this.state.category!='select') && (this.state.description ||this.state.title) )
    this.props.dispatch(asyncSaveComplaint(ComplainInfo));
    this.setState({
      description: "",
      category: "select",
      title: '',
      file: '',
    })
  };

  render() {
    return (
      <div>
        <br/>
        <h2>Complaint Form</h2>
        <form className="">
          <div className="form-group">
            <label>Title</label>
            <input type="text"
                   value={this.state.title}
                   className="form-control"
                   onChange={(event) => this.handleChange(event, 'title')}
            />
          </div>
          <div className="form-group ">
            <label>Description</label>
            <textarea className="form-control"
                      value={this.state.description}
                      name="description"
                      onChange={(e) => this.handleChange(e, 'description')}>
            </textarea>
          </div>
          <div className="form-group">
            <select name="complaintValue"
                    value={this.state.category}
                    onChange={(e) => this.handleChange(e, 'category')}>
              <option value="select">Select</option>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="others">Other</option>
            </select>
          </div>
          {/*
          <div className="form-group">>
           <form encType="multipart/form-data" id="myform">
           <input  type="file" name="sampleFile" onBlur={(e)=>this.saveimg} />
           </form>
           </div>*/}
          <div className="form-group">
            <button value="submit" className="btn btn-default" onClick={this.saveComplaint}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const ComplaintFormContainer = connect(state => state)(ComplaintForm);
export default ComplaintFormContainer;