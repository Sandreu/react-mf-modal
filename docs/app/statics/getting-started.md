# Getting started

## Introduction

The react-mf components aims to extract the markup from the component logic.
You can get it via npm :

 ```bash
 npm install --save react-mf-modal
 ```

## Architecture

react-mf-modal provides :
* a service,
* a named modal container component automaticaly registering to the service,
* themed set of famous CSS libraries to easily and quickly mock your ideas.

### The service

Usage of modal is easy : 

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
    var modalComponentProps = {
      prop1 : 'foo',
      prop2 : 'bar',
    };
    
    ModalService.open(YourModalComponent, modalComponentProps)
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

```javascript
import React from 'react'
import { SimpleModal } from 'react-mf-modal/themes/materialize';

export default YourThemedModal extends React.Component {
  static propTypes = {
    prop1: React.PropTypes.string,
    prop2: React.PropTypes.string,
    resolve: React.PropTypes.func.isRequired,
    dismiss: React.PropTypes.func.isRequired,
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