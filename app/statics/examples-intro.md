# Examples

Here is how you can use themed modals to quickly mock your apps.
All example pages contains the exact same code, the only change is the required theme, and the css file.

You can check your console to view the promise result.

Theme corresponding backdrop is declared from the App component to the container :

```javascript
import React from 'react';
import ModalContainer from 'react-mf-modal/container';
import BackdropComponent from 'react-mf-modal/themes/<CHOSEN THEME>/backdrop';

export default class YourAppComponent extends React.Component {
  render() {
    return (
      <ModalContainer backdropComponent={BackdropComponent}>
        // ... Your app :)
      </ModalContainer>
    );
  }
}
```

So here is all suported themed modal components

### Modals