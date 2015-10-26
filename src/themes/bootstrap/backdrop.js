import React from 'react'

export default class BootstrapBackdrop extends React.Component {
  render() {
    return <div className="modal-backdrop fade in" {...this.props}></div>
  }
}
