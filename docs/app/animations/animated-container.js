import React from 'react';
import ModalContainer from 'react-mf-modal/container';
import AnimChildren from './animation-helper';
import Backdrop from './animated-backdrop';

export default class AnimatedContainer extends ModalContainer {
  render() {
    var modal = null;
    var backdrop = null;
    var modalContainerStyle = {};
    if (this.state.current) {
      modal = this.state.current.Element;
      backdrop = <Backdrop onClick={this.dismissModal} />;
    } else {
      modalContainerStyle.pointerEvents = 'none';
    }
    return <div>
      {this.props.children}
      <div style={modalContainerStyle}>
        <AnimChildren>
          { backdrop }
          { modal }
        </AnimChildren>
      </div>
    </div>
  }
}