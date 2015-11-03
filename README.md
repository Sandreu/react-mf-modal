# React Markupfree Modal

This React Component aims to extract the markup from the modal logic.

It can be used to handle modal dialog or sidebar, or whatever modal view element. 

[Read the docs](http://sandreu.github.io/react-mf-modal/)


## Installation

You can get it via npm :

 ```bash
 npm install --save react-mf-modal
 ```

## Usage

Don't forget to include the CSS file :

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css">
```

```javascript
import React from 'react';
import ModalContainer from 'react-mf-modal/container';
import ModalService from 'react-mf-modal';
import { SimpleModal, Backdrop } from 'react-mf-modal/themes/materialize';

class Modal extends React.Component {
  handleSuccess = () => {
    this.props.resolve('Ok');
  }
  
  render() {
    return <SimpleModal 
        title="Modal title"
        onSubmitClick={this.handleSuccess}
        resolve={this.props.resolve}
        dismiss={this.props.dismiss}>
      Hello World
    </SimpleModal>;
  }
}

export default class Example extends React.Component {
  handleModal = () => {
    ModalService.open(<Modal />)
      .then(result => console.log(result))
      .catch(cause => console.warn(cause));
  }
  
  render () {
    return <ModalContainer backdropComponent={ Backdrop }>
      <button className="btn" onClick={this.handleModal}>Click ME</button>
    </ModalContainer>;
  }
}
```

## Markup

You can use your own backdrops or use it to handle side bars, or use it with the popular css framework themes.