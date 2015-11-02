import React from 'react';

/* real
const sidebarStyle = {
  display: 'block',
  textAlign:'right',
  zIndex: 1003,
  background: 'white',
  padding: 20,
  position: 'fixed',
  top : 0,
  bottom : 0,
  width: 350,
};

const textAreaStyle = {
  padding: '1.6rem',
  height:'60%',
  marginBottom: 20,
};
*/

export default class SimpleMaterializeModal extends React.Component {
  static propTypes = {
    dismiss: React.PropTypes.func.isRequired,
    resolve: React.PropTypes.func.isRequired,
  }
  
  static animate = {
    right: {
      visible: 0,
      hidden: -sidebarStyle.width,
    }
  }
  
  state = {
    note: 'You can have this text as Promise result !\n\n With anything you want.',
  }
  
  handleEdit = (event) => {
    this.setState({note: event.target.value});
  }
  
  handleSubmit = () => {
    this.props.resolve(this.state.note);
  }
  
  render() {
    var style = {
      ...sidebarStyle,
      ...this.props.style,
    };
    
    return <div className="z-depth-2" style={style}>
        <h4>
          Note
        </h4>
        <div className="input-field col">
          <textarea
            value={this.state.note}
            onChange={this.handleEdit}
            style={textAreaStyle} />
        </div>
        <button className="btn" onClick={this.handleSubmit}>OK</button>
    </div>;
  }
}