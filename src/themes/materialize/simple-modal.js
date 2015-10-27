import React from 'react'

export default class SimpleMaterializeModal extends React.Component {
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
    return <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
      <div className="modal-footer">
        <a className="modal-action modal-close waves-effect waves-green btn-flat blue-text" onClick={this.props.onSubmitClick}>{this.props.submitLabel}</a>
        <a className="modal-action modal-close waves-effect waves-red btn-flat" onClick={this.handleClose}>Close</a>
      </div>
    </div>
  }
}

var modalStyle = {
  display: 'block',
  opacity: 1,
  top: '10%',
  zIndex: 1003,
};