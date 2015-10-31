import React from 'react';
/* example
import SidebarModal from 'react-mf-modal/themes/{{theme}}/sidebar-modal';
*/
/* real
import All from '../all-themes';
const { SidebarModal } = All[window.theme] || {};
*/

export default class SidebarModalExample extends React.Component {
  handleUnderstood = () => {
    this.props.resolve('Understood');
  }
  
  handleDontRead = () => {
    this.props.dismiss("Doesn't care");
  }
  
  render() {
    return <SidebarModal
      position="top"
      resolve={this.props.resolve}
      dismiss={this.props.dismiss}>
        <div style={styles.container}>
          <h4>Note</h4>
          <p>This is modal, it's <b>not thought to be sidenav</b> !</p>
          <p>You can use it to ask question or to fill forms...</p>
          <div>
            <a style={styles.cancelBtn} onClick={this.handleDontRead}>
              I'm just testing
            </a>
            <a style={styles.okBtn} onClick={this.handleUnderstood}>
              I got it !
            </a>
          </div>
        </div>
    </SidebarModal>;
  }
}
/* real
const styles = {
  container : {
    textAlign: 'center',
    padding: 20,
  },
  okBtn : {
    color: 'green',
    marginTop: 20,
    cursor:'pointer',
    letterSpacing: '.5px',
    textTransform: 'uppercase',
    display : 'inline-block',
    textDecoration: 'none',
  },
  cancelBtn : {
    color: 'red',
    marginTop: 20,
    marginRight: 40,
    cursor:'pointer',
    letterSpacing: '.5px',
    textTransform: 'uppercase',
    display : 'inline-block',
    textDecoration: 'none',
  },
};
*/