import React from 'react';
import ModalContainer from 'react-mf-modal/container';
import AnimChildren from './animation-helper';
import Backdrop from './animated-backdrop';

export default class AnimatedContainer extends ModalContainer {
  render() {
    var modal = null;
    var backdrop = null;
    if (this.state.current) {
      modal = this.state.current.Element;
      backdrop = <Backdrop onClick={this.dismissModal} />;
    }  
    return <div>
      {this.props.children}
      <AnimChildren>
        { backdrop }
        { modal }
      </AnimChildren>
    </div>
  }
}