import React from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';

export default class AnimChildren extends React.Component {
  count = 0;
  
  parseAnimate(anim = {}, type) {
    return Object.keys(anim).reduce((out, key) => {
      var value = anim[key];
      var target;
      
      if (typeof value.visible === 'undefined') throw new Error("static anim, all keys need a 'visible' value");
      
      switch (type) {
        case 'enter':
        case 'leave':
          target = value[type];
          if (typeof target === 'undefined') target = value.hidden;
          break;
      }
      
      if (typeof target === 'undefined') target = value.visible;
      out[key] = spring(target, presets.stiff);
      
      return out;
    }, {});
  }
  
  getTarget(prev) {
    var out = {};
    React.Children.forEach(this.props.children, element => {
      if (!element) return;
      
      let elementKey = null;
      for (let key in prev) {
        let style = prev[key];
        if (style.element === element) {
          elementKey = `id${key}`;
          break;
        }
      }
      if (!elementKey) elementKey = `id${this.count++}`;
      
      out[elementKey] = { };
      if (element.type.animate) {
        out[elementKey] = this.parseAnimate(element.type.animate, 'visible');
      }
      
      out[elementKey].element = element;
    });
    
    return out;
  }
  
  willEnter = (key, style) => {
    return { ...style, ...this.parseAnimate(style.element.type.animate, 'enter') };
  }
  
  willLeave = (key, style) => {
    return { ...style, ...this.parseAnimate(style.element.type.animate, 'leave') };
  }
  
  render() {
    return <TransitionMotion
      styles={this.getTarget()}
      willEnter={this.willEnter}
      willLeave={this.willLeave}>
        {styles => (
          <div>
            { Object.keys(styles).map(key => {
              let { element, ...style } = styles[key];
              return React.cloneElement(element, { key, style });
            }) }
          </div>
        )}
    </TransitionMotion>
  }
}
