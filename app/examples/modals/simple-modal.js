import React from 'react'

export default class SimpleModalExample extends React.Component {
  static propTypes = {
    SimpleModal: React.PropTypes.func.isRequired,
  }
  
  handleSuccess = () => {
    this.props.resolve('OK !');
  }
  
  render() {
    return <this.props.SimpleModal title="Modal title" onSubmitClick={this.handleSuccess} {...this.props}>
      Hello World
    </this.props.SimpleModal>
  }
}