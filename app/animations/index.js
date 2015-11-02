import React from 'react';
import ModalService from 'react-mf-modal';
import AnimatedContainer from './animated-container';
import AnimatedDialog from './animated-dialog';
import AnimatedSidebar from '!babel!../webpack/demo-loader!./animated-sidebar';
import AnimatedBackdrop from './animated-backdrop';

import animations from '../statics/animations.md';
import containerCode from '!../webpack/code-loader!./animated-container';
import backdropCode from '!../webpack/code-loader!./animated-backdrop';
import dialogCode from '!../webpack/code-loader!./animated-dialog';
import sidebarCode from '!../webpack/code-loader!./animated-sidebar';

const rapidExample = {
  textAlign: 'center',
  padding:'40px 0 10px 0',
};

export default class Animations extends React.Component {
  handleSimple = () => {
    ModalService.open(<AnimatedDialog />)
      .then(result => console.log(result))
      .catch(cause => console.warn(cause));
  }
  
  handleSidebar = () => {
    ModalService.open(<AnimatedSidebar />)
      .then(result => console.log(result))
      .catch(cause => console.warn(cause));
  }
  
  render() {
    return <AnimatedContainer BackdropComponent={AnimatedBackdrop}>
      <div style={rapidExample}>
        <button className="btn" onClick={this.handleSimple}>Animated Simple modal</button>&nbsp;
        <button className="btn" onClick={this.handleSidebar}>Animated Sidebar</button>&nbsp;
      </div>
      <div dangerouslySetInnerHTML={{__html:animations}} />
      
      <h4>Container</h4>
      <p>Here is the overloaded container</p>
      <p>My AnimHelper is built on react-motion, you can see it in sources.</p>
      <div dangerouslySetInnerHTML={{__html:containerCode}} />
      
      <h4>Backdrop</h4>
      <p>Here is the new backdrop</p>
      <div dangerouslySetInnerHTML={{__html:backdropCode}} />
      
      <h4>Custom Modals</h4>
      <p>Now you have everything, you just need to do you modal custom modal components</p>
      <button className="btn" onClick={this.handleSimple}>Animated Simple modal</button>
      <div dangerouslySetInnerHTML={{__html:dialogCode}} />
      
      <button className="btn" onClick={this.handleSidebar}>Animated Sidebar</button>
      <div dangerouslySetInnerHTML={{__html:sidebarCode}} />
      
      
    </AnimatedContainer>;
  }
}