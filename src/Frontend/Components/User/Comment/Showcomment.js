import React, { Component } from 'react';
import { connect } from 'react-redux'
import { asyncgetComment } from '../../../actions';

class Showcomment extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.dispatch(asyncgetComment())
    }

    render(){
        let { comments } = this.props.commentReducer;
        return(
            <div>
                {
                    comments.map((item) => {
                        if (item.postId == this.props.buzzid)
                            <div> {item.userDetails.userName} - {item.comment} </div>
                    })

                }
            </div>
        )
    }
}

const ShowcommentContainer = connect(state=>state)(Showcomment);
export default ShowcommentContainer;