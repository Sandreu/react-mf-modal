import React from 'react';

import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';

import allThemes from './all-themes';
import SimpleModalExample from './modals/simple-modal';

const theme = allThemes[window.theme];
const btnsClassNames = {
  'bootstrap' : 'btn btn-primary',
  'materialize' : 'waves-effect waves-light btn',
};

export default class Examples extends React.Component {
  handleSimple = () => {
    ModalService.open(SimpleModalExample, theme) // give theme as props to handle the right source
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    
    return (<ModalContainer backdropComponent={theme.Backdrop}>
      <button className={btnsClassNames[window.theme]} onClick={this.handleSimple}>Simple modal</button>
    </ModalContainer>)
  }
}