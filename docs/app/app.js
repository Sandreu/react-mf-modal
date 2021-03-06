import React from 'react';
import Examples from './examples';
import gettingStarted from './statics/getting-started.md';
import index from '!html!./index.html';
import Anim from './animations';

export default class App extends React.Component {
  page() {
    var out = null;
    var page = /([^\/]*).html$/.exec(window.location.pathname)
    page = page ? page[1] : null;
    
    switch (page) {
      case 'getting-started':
        out = <div style={styles.scrollLock}>
          <div style={styles.content}>
            <div dangerouslySetInnerHTML={{__html:gettingStarted}} />
          </div>
        </div>;
        break;
      case 'bootstrap':
      case 'materialize':
        out = <Examples theme={window.theme} />;
        break;
      case 'animations':
        out = <div style={styles.scrollLock}>
          <div style={styles.content}>
            <Anim />
          </div>
        </div>;
        break;
      default:
        out = <div dangerouslySetInnerHTML={{__html:index}} />;
        break;
    }
    
    return out;
  }
  
  render() {
    return (<div>
      <div style={styles.menuStyle}>
        <h1 style={styles.logo}>
          <a href="./" style={styles.logoLink}>
            <img src="assets/logo.png" alt="MF Logo" style={styles.mainLogo} />
            React-MF-Modal
          </a>
        </h1>
        <div style={styles.links}>
          <a href="getting-started.html" style={styles.link}>Getting started</a>
          <a href="bootstrap.html" style={styles.link}>Bootstrap</a>
          <a href="materialize.html" style={styles.link}>Materialize</a>
          <a href="animations.html" style={styles.link}>Animations</a>
          <a href="https://github.com/Sandreu/react-mf-modal" style={styles.link}>
            <img src="assets/gh.png" alt="Github Logo" style={styles.logoGH} />
          </a>
        </div>
      </div>
      { this.page() }
    </div>);
  }
}

const styles = {
  menuStyle: {
    height: 64,
    background: '#435052',
    padding:'0 20px',
    boxShadow: '0 0 10px 0 rgb(0,0,0)',
  },
  logo: {
    fontSize: 18,
    lineHeight: '60px',
    float: 'left',
    margin:0,
  },
  mainLogo: {
    verticalAlign: 'middle',
    marginRight: 15,
  },
  logoLink: {
    color: '#fff',
    lineHeight: '60px',
  },
  links: {
    float: 'right',
    fontSize: 15,
  },
  link: {
    lineHeight: '60px',
    display: 'inline-block',
    color: '#fff',
    textDecoration: 'none',
    padding: '0 20px',
    margin:0,
  },
  logoGH: {
    verticalAlign: 'middle',
  },
  scrollLock : {
    overflow:'auto',
    position: 'absolute',
    top:64,
    left:0,
    right: 0,
    bottom: 0,
  },
  content: {
    margin: '0 auto',
    maxWidth: 750,
  }
}