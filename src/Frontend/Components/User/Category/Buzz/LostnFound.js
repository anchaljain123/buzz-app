import React, {Component} from 'react';
import {connect} from 'react-redux'
import {asyncgetLostnFoundBuzz} from '../../../../actions'
import '../../../Assets/Styling/lostnfoundStyle.css'

class LostnFound extends Component {

  componentWillMount() {
    this.props.dispatch(asyncgetLostnFoundBuzz());
  }
  render() {
    let {lostnfound} = this.props.buzzReducer;
    console.log(lostnfound,"==lostnfound")
    return (
      <div>
        {
          lostnfound.map((item, i) => {
            if (item.category === "lostnfound")
              return (
                <div className="panel panel-default" key={i}>
                  <div className="panel-body">
                    <div className="pull-left">
                      <img
                        className="media-object img-circle lostnfoundstyle"
                        src={item.userDetails.img}/>
                    </div>
                    <div className="pull-right">
                      <span className="label label-info">{item.category}</span>
                    </div>
                    <div key={item._id}>
                      <h4 style={{"color": "#165ba8"}}>
                        <strong>{item.userDetails.name}</strong>
                      </h4>
                      <hr/>
                      <div className="post-content">{item.content}</div>
                      <div className="post-content">
                        {
                          item.img ?
                            <img src={'http://localhost:4000/' + item.img.path}/> : ""
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
          })
        }
      </div>
    )
  }
}
const mapToState = state => state;
const LostnFoundbuzzContainer = connect(mapToState)(LostnFound);

export default LostnFoundbuzzContainer;