import React from 'react';
/* example
import SimpleModal from 'react-mf-modal/themes/{{theme}}/simple-modal';
*/
/* real
import All from '../all-themes';
const { SimpleModal } = All[window.theme] || {};
*/

export default class SimpleModalExample extends React.Component {
  handleSuccess = () => {
    this.props.resolve('OK !');
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