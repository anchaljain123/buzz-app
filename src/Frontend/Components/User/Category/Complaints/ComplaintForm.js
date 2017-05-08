import React,{ Component } from 'react'
import '../../../assets/Styling/formStyling.css'
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
    saveComplaint = () => {
        let { userDetails } = this.props;
        let ComplainInfo = {
            description: this.state.description,
            category: this.state.category,
            title: this.state.title,
            userDetails:userDetails,
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
            <section id="contact" className="content-section text-center">
                <div className="contact-section">
                    <div className="container">
                        <h2>Complaint Form</h2>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <form className="form-horizontal">
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
                                    <select name="complaintValue"
                                            value={this.state.category}
                                            onChange={(e) => this.handleChange(e, 'category')}>
                                        <option value="select">Select</option>
                                        <option value="hardware">Hardware</option>
                                        <option value="software">Software</option>
                                        <option value="others">Other</option>
                                    </select>
                                    <button
                                        value="submit"
                                         className="btn btn-default"
                                        onClick={this.saveComplaint}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const maptoState = state => state;
const ComplaintFormContainer = connect(maptoState)(ComplaintForm)

export default ComplaintFormContainer;