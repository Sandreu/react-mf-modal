import React from 'react';

const style = {
  display: 'block',
  opacity: 0.5,
};

export default class BootstrapBackdrop extends React.Component {
  static defaultProps = {
    style,
  }
  
  render() {
    return <div className="lean-overlay" {...this.props}></div>
  }
}
