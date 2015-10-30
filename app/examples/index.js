import React from 'react';

import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';
import APIComponent from './api';

import SimpleModalExample from '!babel!./webpack/demo-loader.js!./modals/simple-modal';
import SimpleModalAPI from '!./webpack/docgen-loader!../../../src/themes/bootstrap/simple-modal';
import SimpleModalExampleCode from '!./webpack/code-loader!./modals/simple-modal';

import examplesIntro from '../statics/examples-intro.md';

import themes from './all-themes';

const btnsClassNames = {
  'bootstrap' : 'btn btn-primary',
  'materialize' : 'waves-effect waves-light btn',
};

export default class Examples extends React.Component {
  static propTypes = {
    theme : React.PropTypes.string.isRequired,
  }
  
  state = {
    btnClassName: btnsClassNames[this.props.theme],
    theme: themes[this.props.theme],
  }
  
  handleSimple = () => {
    ModalService.open(SimpleModalExample)
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    return (<ModalContainer backdropComponent={this.state.theme.Backdrop}>
      <div dangerouslySetInnerHTML={{__html:examplesIntro}} />
      <h3>SimpleModal</h3>
      <button className={this.state.btnClassName} onClick={this.handleSimple}>Simple modal</button>
      <div dangerouslySetInnerHTML={{__html:SimpleModalExampleCode.replace(/{{\s*theme\s*}}/mg, this.props.theme)}} />
      <APIComponent docgen={SimpleModalAPI} />
    </ModalContainer>)
  }
}