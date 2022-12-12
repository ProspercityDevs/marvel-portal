import React, { Component } from 'react';

class Cursor extends Component {
  state = {
    left: 0,
    top: 0
  };

  handleCursor = (e) => {
    const cursor = document.getElementsByClassName('cursor')[0];
    cursor.setAttribute('style', 'top:' + e.pageY + 'px; left:' + e.pageX + 'px;');
  };

  render() {
    return <div onMouseMove={this.handleCursor} className="cursor error-image-animate"></div>;
  }
}

export default Cursor;
