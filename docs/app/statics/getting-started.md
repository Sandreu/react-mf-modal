# Getting started

## Introduction

The react-mf components aims to extract the markup from the component logic.
It can handle dialog or sidebar, animations, custom html markup, and already deals with some famous css frameworks.

You can get it via npm :

 ```bash
 npm install --save react-mf-modal
 ```

## A Fast Working file Example

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

## Architecture

react-mf-modal provides :
* a service,
* a named modal container component automaticaly registering to the service,
* themed set of famous CSS libraries to easily and quickly mock your ideas.

### The service

The modal service returns a Promise and takes the React Element as param


```javascript
import React from 'react';
import ModalService from 'react-mf-modal';
import YourModalComponent from '...';

export default class YourComponent extends React.Component {
  handleModalSuccess = (result) => {
    // Handle modal result here
  }
  
  handleModalDismiss = (cause) => {
    // Handle dimiss here
  }
  
  thisIsWhereItHappens() {
    ModalService.open(<YourModalComponent foo="bar" />)
      .then(this.handleModalSuccess, this.handleModalDismiss)
  }
}
```

### The modal container

This is where modal will be rendered :

```javascript
import React from 'react';
import ModalContainer from 'react-mf-modal/container';

export default class YourAppComponent extends React.Component {
  render() {
    return <ModalContainer>
      <YourHeaderComponent />
      <YourBodyComponent />
      <YourFooterComponent />
      /**
      * This is where backdrop and modals will be appened :
      * <Backdrop />
      * <Modal />
      **/
    </ModalContainer>;
  }
}

```

### Themed Components

Every theme exposes those modal components:

* SimpleModal
* SidebarModal

```javascript
import React from 'react'
import { SimpleModal } from 'react-mf-modal/themes/materialize';

export default class YourThemedModal extends React.Component {
  static propTypes = {
    foo: React.PropTypes.string,
    resolve: React.PropTypes.func,
    dismiss: React.PropTypes.func,
  }
  
  handleSuccess = () => {
    this.props.resolve('Your result');
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
```

## Themes

Themes are not meant to be able to handle every corner options of parent libraries.
They're built to handle common use cases, and to be easily switched from one to another.
They're built to allow you to mock your app easily without taking care about common cases.
Build your own markup, it can be easily added once all your business code is running, without changing your codebase.