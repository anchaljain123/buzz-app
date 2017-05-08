import React from 'react'
import { connect } from 'react-redux'


class ComplaintsRow extends React.Component{
    constructor(){
        super();
    }



    render(){

        return(
            <div>
                {
                    this.props.item.title
                }
            </div>
        )
    }
}

const maptoState = state => state;
const ComplaintsRowContainer = connect(maptoState)(ComplaintsRow);

export default ComplaintsRowContainer;