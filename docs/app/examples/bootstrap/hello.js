import React from 'react'
import { SimpleModal } from 'react-mf-modal/themes/bootstrap';

export default class HelloModal extends React.Component {
  handleSuccess = () => {
    this.props.resolve('OK !');
  }
  
  handleClose = () => {
    this.props.dismiss('closed');
  }
  
  render() {
    return <SimpleModal title="Modal title" {...this.props}>
      <div className="modal-body">
        Hello World
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
        <button type="button" className="btn btn-primary" onClick={this.handleSuccess}>Success</button>
      </div>
    </SimpleModal>
  }
}