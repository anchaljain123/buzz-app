import React, {Component} from 'react'

export default class Showdetails extends Component {
  render() {
    let {item} = this.props;
    let {userDetails} = this.props;

    const divStyle = {
      border: '2px solid blue'
    };

    return (

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Complain Details</h4>
            </div>
            <div className="modal-body">
              {userDetails[0].userName} {item._id}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}