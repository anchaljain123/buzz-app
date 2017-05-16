import React,{ Component } from 'react'
import '../../../Assets/Styling/formStyling.css'
import { asyncSaveComplaint } from '../../../../actions'
import { connect } from 'react-redux'

class ComplaintForm extends  Component{
    constructor(props){
        super(props);
        this.state ={
            description:'',
            category:'select',
            title:'',
        }
    }
    handleChange = (event, key) =>{
        this.setState({
            [key]: event.target.value,
        })
    };
    saveComplaint = (e) => {
      e.preventDefault();
        let { userDetails } = this.props;


        console.log(this.state.category,"________category______")
        if(this.state.category === 'hardware')
          var admin = "Anchal Jain";

         if(this.state.category === 'software')
          var admin = "Pankaj Malhotra";

        if(this.state.category === 'others')
         var  admin = "Puja Goyal";

        var ob = {
          uid:userDetails[0].id,
          uname:userDetails[0].userName,
          assignedTo:admin,
        };


        let ComplainInfo = {
            description: this.state.description,
            category: this.state.category,
            title: this.state.title,
            userDetails:ob,
            // img:imageState,
        };
        this.props.dispatch(asyncSaveComplaint(ComplainInfo));
        this.setState({
            description:"",
            category:"select",
            title:'',
        })
    };
    render(){
        return(

                    <div className="">
                        <br/>
                        <h2>Complaint Form</h2>

                                <form className="">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text"
                                               value={this.state.title}
                                               className="form-control"
                                               id="exampleInputName2"
                                               onChange={(event) => this.handleChange(event,'title')}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label>Description</label>
                                        <textarea  className="form-control"
                                                   value={this.state.description}
                                                   name="description"
                                                   onChange={(e)=>this.handleChange(e,'description')}>
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
                                    <div className="form-group">
                                    <button
                                        value="submit"
                                         className="btn btn-default"
                                        onClick={this.saveComplaint}>
                                        Submit
                                    </button>
                                    </div>
                                </form>
                            </div>
        )
    }
}

const maptoState = state => state;
const ComplaintFormContainer = connect(maptoState)(ComplaintForm)

export default ComplaintFormContainer;