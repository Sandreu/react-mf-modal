import React from 'react'

export default class BootstrapBackdrop extends React.Component {
  static defaultProps = {
    style: {
      display: 'block',
      opacity: 0.5,
      zIndex: 1002,
    }
  }
  
  render() {
    return <div className="lean-overlay" {...this.props}></div>
  }
}
