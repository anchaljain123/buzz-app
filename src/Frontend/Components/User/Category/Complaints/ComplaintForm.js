import React,{ Component } from 'react'
import '../../../assets/Styling/formStyling.css'

class ComplaintForm extends  Component{
    constructor(props){
        super(props);
    }

    saveComplaint = () =>{
        console.log("hi")
    }

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
                                        <label for="exampleInputName2">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName2" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail2">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail2" />
                                    </div>
                                    <div className="form-group ">
                                        <label for="exampleInputText">Your Message</label>
                                        <textarea  className="form-control"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                            className="btn btn-default"
                                        onClick={this.saveComplaint}>
                                        Send Complain
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

export default ComplaintForm;