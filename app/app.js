import React from 'react';
import Examples from './examples';

export default class App extends React.Component {
  render() {
    return (<div>
      <div style={styles.menuStyle}>
        <h1 style={styles.logo}>react-mf-modal</h1>
        <div style={styles.links}>
          <a href="index.html" style={styles.link}>Getting started</a>
          <a href="bootstrap.html" style={styles.link}>Bootstrap</a>
          <a href="materialize.html" style={styles.link}>Materialize</a>
        </div>
      </div>
      <div style={styles.content}>
        { window.theme ? <Examples /> : null }
      </div>
    </div>);
  }
}

const styles = {
  menuStyle: {
    height: 64,
    background: '#435052',
    padding:'0 20px'
  },
  logo: {
    fontSize: 18,
    lineHeight: '60px',
    color: '#fff',
    float: 'left',
    margin:0,
  },
  links: {
    float: 'right',
    fontSize: 15,
    lineHeight: '60px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 20px',
    margin:0,
  },
  content: {
    padding:20,
    margin: 0,
  }
}