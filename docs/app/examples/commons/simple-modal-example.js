import React from 'react'

export default class SimpleModalExample extends React.Component {
  static propTypes = {
    SimpleModal: React.PropTypes.func.isRequired,
  }
  
  handleSuccess = () => {
    this.props.resolve('OK !');
  }
  
  handleClose = () => {
    this.props.dismiss('closed');
  }
  
  render() {
    return <this.props.SimpleModal title="Modal title" {...this.props}>
      <div className="modal-body">
        Hello World
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
        <button type="button" className="btn btn-primary" onClick={this.handleSuccess}>Success</button>
      </div>
    </this.props.SimpleModal>
  }
}