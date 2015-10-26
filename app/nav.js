import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (<nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">react-mf-modal</a>
        </div>
        
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Getting Started</a></li>
          <li><a href="#">Examples</a></li>
          <li><a href="#">Animate</a></li>
        </ul>
      </div>
    </nav>)
  }
}