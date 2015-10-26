import React from 'react'

export default class SimpleBootstrapModal extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    dismiss: React.PropTypes.func.isRequired,
    resolve: React.PropTypes.func.isRequired,
  }
  
  bubblePrevent = (evt) => {
    evt.stopPropagation();
  }
  
  render() {
    return <div className="modal fade in" style={{ display: 'block', overflow:'auto' }} onClick={this.props.dismiss.bind(this, 'closed')}>
      <div className="modal-dialog" role="document" onClick={this.bubblePrevent}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" aria-label="Close" onClick={this.props.dismiss.bind(this, 'closed')}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h5 className="modal-title">{this.props.title}</h5>
          </div>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}