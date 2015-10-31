import React from 'react'

const defaultSize = 250;

/**
 * SidebarModal is the basic area on a screen side.
 */
 
export default class SidebarBootstrapModal extends React.Component {
  static propTypes = {
    /**
     * Choose your sidebar position
     */
    position: React.PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    /**
     * Width for left|right sidebars
     */
    width: React.PropTypes.number,
    /**
     * Height for top|bottom sidebars
     */
    height: React.PropTypes.number,
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
    
    return <div style={style}>
      { this.props.children }
    </div>
  }
}

var modalStyle = {
  display: 'block',
  position: 'fixed',
  zIndex: 1050,
  background: 'white',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
};