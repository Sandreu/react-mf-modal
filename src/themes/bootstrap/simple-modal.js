import React from 'react'

export default class SimpleBootstrapModal extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    dismiss: React.PropTypes.func.isRequired,
    resolve: React.PropTypes.func.isRequired,
    submitLabel: React.PropTypes.string.isRequired,
    onSubmitClick: React.PropTypes.func.isRequired,
  }
  
  static defaultProps = {
    submitLabel: 'OK',
  }
  
  bubblePrevent = (evt) => {
    evt.stopPropagation();
  }
  
  handleClose = () => {
    this.props.dismiss('closed');
  }
  
  render() {
    return <div className="modal fade in" style={{ display: 'block', overflow:'auto' }} onClick={this.handleClose}>
      <div className="modal-dialog" role="document" onClick={this.bubblePrevent}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" aria-label="Close" onClick={this.props.dismiss.bind(this, 'closed')}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h6 className="modal-title">{this.props.title}</h6>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.props.onSubmitClick}>{this.props.submitLabel}</button>
          </div>
        </div>
      </div>
    </div>
  }
}