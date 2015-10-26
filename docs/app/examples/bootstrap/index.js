import React from 'react';
import SimpleModalExample from '../commons/simple-modal-example'
import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';
import { Backdrop, SimpleModal } from 'react-mf-modal/themes/bootstrap'

export default class Examples extends React.Component {
  handleSimple = () => {
    ModalService.open(SimpleModalExample, {SimpleModal})
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    return (<ModalContainer backdropComponent={Backdrop}>
      <button className="btn btn-primary" onClick={this.handleSimple}>Simple modal</button>
    </ModalContainer>)
  }
}