import React, { Component } from 'react';
import Card from './Card';

export class Bord extends Component {
  render() {
    return (
      <div>
        <h1>Game Bord</h1>
        <div id="bord">
          <Card type="0" number="1" />
        </div>
      </div>
    );
  }
}

export default Bord;
