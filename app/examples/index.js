import React from 'react';

import ModalService from 'react-mf-modal';
import ModalContainer from 'react-mf-modal/container';
import APIComponent from './api';

import SimpleModalExample from '!babel!../webpack/demo-loader.js!./modals/simple-modal';
import SimpleModalAPI from '!../webpack/docgen-loader!../../../src/themes/bootstrap/simple-modal';
import SimpleModalExampleCode from '!../webpack/code-loader!./modals/simple-modal';

import SidebarModalExample from '!babel!../webpack/demo-loader.js!./modals/sidebar-modal';
import SidebarModalAPI from '!../webpack/docgen-loader!../../../src/themes/bootstrap/sidebar-modal';
import SidebarModalExampleCode from '!../webpack/code-loader!./modals/sidebar-modal';

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
  
  handleSidebar = () => {
    ModalService.open(SidebarModalExample)
      .then(console.log.bind(console))
      .catch(console.warn.bind(console))
  }
  
  render() {
    return (<ModalContainer backdropComponent={this.state.theme.Backdrop}>
      <div style={styles.scrollLock}>
        <div style={styles.container}>
          <div style={styles.rapidExample}>
            <button className={this.state.btnClassName} onClick={this.handleSimple}>Simple modal</button>&nbsp;
            <button className={this.state.btnClassName} onClick={this.handleSidebar}>Sidebar modal</button>&nbsp;
          </div>
          
          <div dangerouslySetInnerHTML={{__html:examplesIntro}} />
          
          <h3>SimpleModal</h3>
          <APIComponent docgen={SimpleModalAPI} />
          <button className={this.state.btnClassName} onClick={this.handleSimple}>Simple modal</button>
          <div dangerouslySetInnerHTML={{__html:SimpleModalExampleCode.replace(/{{\s*theme\s*}}/mg, this.props.theme)}} />
          
          <h3>SidebarModal</h3>
          <APIComponent docgen={SidebarModalAPI} />
          <button className={this.state.btnClassName} onClick={this.handleSidebar}>Sidebar modal</button>
          <div dangerouslySetInnerHTML={{__html:SidebarModalExampleCode.replace(/{{\s*theme\s*}}/mg, this.props.theme)}} />
        
        </div>
      </div>
    </ModalContainer>)
  }
}

const styles = {
  scrollLock: {
    overflow:'auto',
    position: 'absolute',
    top:64,
    left:0,
    right: 0,
    bottom: 0,
  },
  container : {
    margin: '0 auto',
    maxWidth: 750,
  },
  rapidExample : {
    textAlign: 'center',
    padding:'40px 0 10px 0',
  },
};