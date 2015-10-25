# React Markupfree Modal

This React Component aims to extract the markup from the modal logic.

[Read the docs](http://sandreu.github.io/react-mf-modal/)


## Installation

Available on npm

```
npm install --save react-mf-modal
```


## Usage

This component provides a service instance to get a `Promise` of the modal result.

You can use any component as Modal.

```javascript
import ModalService from 'react-mf-modal'

class YourModal extends React.Component {
  handleSuccess = () => {
    this.props.resolve('Great');
  }
  
  render() {
    return (<div className="modal" onClick={this.handleSuccess}>
      {this.props.message}
    </div>);
  }
}

class YourComponent extends React.Component {
  // ...
  handleClick() {
    ModalService.open(YourModal, {message: 'Hello World !'}).then((result) => {
      console.log(result) // Will log 'Great'
    }).catch((dismiss) => {
      // You can handle here dismiss cases
    });
  }
  // ...
}
```

You also have to declare the modal container.


```javascript
import ModalContainer from 'react-mf-modal/container'

class YourComponent extends React.Component {
  // ...
  render() {
    return (<ModalContainer>
      <div>
        Your components here
      </div>
      // A DOM node with the Backdrop and the modal will be put here when
      // a ModalService.open is called
    </ModalContainer>)
  }
  // ...
}
```

## Markup

You can use your own backdrops or use it to handle side navs, or use it with the popular css framework themes.

## Unit Tests

I plan to unit test it but I couldn't find the time yet.