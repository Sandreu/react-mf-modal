import React from 'react';

const modalStyle = {
  display: 'block',
  opacity: 1,
  top: '10%',
  zIndex: 1003,
};

export default class SimpleMaterializeModal extends React.Component {
  static animate = {
    top: {
      visible: 100,
      enter:50,
    },
    left: {
      visible: 0,
      leave: 200
    },
    opacity: {
      visible: modalStyle.opacity,
      hidden: 0,
    }
  }
  
  handleClose = () => {
    this.props.dismiss('closed');
  }
  
  handleResolve = () => {
    this.props.resolve('submit data');
  }
  
  render() {
    return <div className="modal" style={{...modalStyle, ...this.props.style}}>
      <div className="modal-content">
        <h4>Animated Modal</h4>
        Animations are easy !
      </div>
      <div className="modal-footer">
        <a className="modal-action btn-flat blue-text" onClick={this.handleResolve}>OK</a>
        <a className="modal-action btn-flat" onClick={this.handleClose}>Close</a>
      </div>
    </div>
  }
}