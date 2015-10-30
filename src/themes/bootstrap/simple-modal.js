import React from 'react'

/**
 * SimpleModal is the basic dialog window with a primary and a cancel button.
 */
 
export default class SimpleBootstrapModal extends React.Component {
  static propTypes = {
    /**
     * Title of the modal dialog
     */
    title: React.PropTypes.string.isRequired,
    /**
     * Label for the submit button
     */
    submitLabel: React.PropTypes.string.isRequired,
    /**
     * Submit button handler function
     */
    onSubmitClick: React.PropTypes.func.isRequired,
    /**
     * You HAVE TO pass dismiss function injected by the service
     */
    dismiss: React.PropTypes.func.isRequired,
    /**
     * You HAVE TO pass resolve function injected by the service
     */
    resolve: React.PropTypes.func.isRequired,
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
            <h3 className="modal-title">{this.props.title}</h3>
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