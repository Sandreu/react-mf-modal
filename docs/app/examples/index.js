import React from 'react';

import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';

import SimpleModalExample from '!babel!./demo-loader.js!./modals/simple-modal';
import SimpleModalExampleCode from '!./code-loader!./modals/simple-modal';

import examplesIntro from '../statics/examples-intro.md';

import themes from './all-themes';

const theme = themes[window.theme];
const btnsClassNames = {
  'bootstrap' : 'btn btn-primary',
  'materialize' : 'waves-effect waves-light btn',
};

export default class Examples extends React.Component {
  handleSimple = () => {
    ModalService.open(SimpleModalExample)
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    
    return (<ModalContainer backdropComponent={theme.Backdrop}>
      <div dangerouslySetInnerHTML={{__html:examplesIntro}} />
      <button className={btnsClassNames[window.theme]} onClick={this.handleSimple}>Simple modal</button>
      <div dangerouslySetInnerHTML={{__html:SimpleModalExampleCode.replace(/{{\s*theme\s*}}/mg, window.theme)}} />
    </ModalContainer>)
  }
}