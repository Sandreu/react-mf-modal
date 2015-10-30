import React from 'react';

export default class APIComponent extends React.Component {
  static propTypes = {
    docgen: React.PropTypes.object.isRequired,
  }
  
  render() {
    console.log(this.props)
    return <div>
      <p>{this.props.docgen.description}</p>
      <h4>Available props</h4>
      {Object.keys(this.props.docgen.props).map(key => {
        var elt = this.props.docgen.props[key];
        return <div key={key}><b>{key}</b> : {elt.description}</div>
      })}
    </div>;
  }
}