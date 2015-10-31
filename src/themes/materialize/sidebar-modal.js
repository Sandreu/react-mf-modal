import React from 'react'

const defaultSize = 250;

export default class SimpleMaterializeModal extends React.Component {
  static propTypes = {
    dismiss: React.PropTypes.func.isRequired,
    resolve: React.PropTypes.func.isRequired,
    position: React.PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }
  
  static defaultProps = {
    position: 'right',
  }
  
  render() {
    var style;
    
    switch (this.props.position) {
      case 'left':
      case 'right':
      default:
        style = {
          ...modalStyle,
          top : 0,
          bottom : 0,
          width : this.props.width || defaultSize,
        };
        //default right
        if (this.props.position === 'left') {
          style.left = 0;
        } else {
          style.right = 0;
        }
        break;
      case 'top':
      case 'bottom':
        style = {
          ...modalStyle,
          left : 0,
          right : 0,
          height : this.props.height || defaultSize,
        };
        if (this.props.position === 'top') {
          style.top = 0;
        } else {
          style.bottom = 0;
        }
        break;
    }
    
    return <div className="z-depth-2" style={style}>
      { this.props.children }
    </div>
  }
}

var modalStyle = {
  display: 'block',
  position: 'fixed',
  zIndex: 1003,
  background: 'white',
};