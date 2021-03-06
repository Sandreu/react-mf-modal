import React from 'react'
import modalService from './index'

class DefaultBackdrop extends React.Component {
  render() {
    return <div className="modal-backdrop" {...this.props}></div>
  }
}

export default class ModalContainer extends React.Component {
  static defaultProps = {
    backdropComponent: DefaultBackdrop,
    name: "default",
  }
  
  state ={
    isOpen:false,
    current:null,
    stack: []
  }
  
  componentWillMount() {
    modalService.registerContainer(this.props.name, this)
  }
  
  componentWillUnmount () {
    modalService.unregisterContainer(this.props.name)
  }
  
  openModal = (Element) => {
    return new Promise((resolve, dismiss) => {
      try {
        if (this.state.isOpen === true) {
          this.state.stack.push(this.state.current);
        }
        
        var modal = React.cloneElement(Element, {
          resolve,
          dismiss,
        });
        
        this.setState({
          current: {
            Element: modal,
            resolve: resolve,
            dismiss: dismiss
          },
          isOpen : true
        });
      } catch (e) {
        console.error(e);
        throw e;
      }
    }).then(this.closeModal).catch(this.handleDismissClose)
  }
  
  modalIsOpen() {
    return this.state.isOpen;
  }
  
  handleDismissClose = (msg) => {
    throw this.closeModal(msg);
  }
  
  closeModal = (out) => {
    if (this.state.isOpen) {
      if (this.state.stack.length) {
        this.setState({
          current: this.state.stack.pop()
        });
      } else {
        this.setState({
          current: null,
          isOpen:false
        });
      }
      return out
    } else {
      throw new Error('Dialog already closed !');
    }
  }
  
  dismissModal = () => {
    this.state.current.dismiss('closed');
  }
  
  render() {
    var modal = null
    if (this.state.current) {
      let Backdrop = this.props.backdropComponent;
      modal = <div>
        <Backdrop onClick={this.dismissModal} />
        {this.state.current.Element}
      </div>
    }
    
    return <div>
      {this.props.children}
      {modal}
    </div>
  }
}
