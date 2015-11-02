import React from 'react';

const BackdropStyle = {
  display: 'block',
  opacity: 0.5,
};

export default class BootstrapBackdrop extends React.Component {
  static animate = {
    opacity: {
      visible: BackdropStyle.opacity,
      hidden: 0,
    }
  }
  
  render() {
    var style = {
      ...BackdropStyle,
      ...this.props.style,
    };
    
    return <div className="lean-overlay" {...this.props} style={style} />
  }
}
