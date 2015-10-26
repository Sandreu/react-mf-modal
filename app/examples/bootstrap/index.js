import React from 'react';
import Hello from './hello'
import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';
import { Backdrop } from 'react-mf-modal/themes/bootstrap'

export default class Examples extends React.Component {
  handleSimple = () => {
    ModalService.open(Hello)
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    return (<ModalContainer backdropComponent={Backdrop}>
      <button className="btn btn-primary" onClick={this.handleSimple}>Simple modal</button>
    </ModalContainer>)
  }
}