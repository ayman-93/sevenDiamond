import React, { Component } from 'react';
import Card from './Card';

export class Player extends Component {
  render() {
    return (
      <div id="player">
        <Card type="0" number="7" />
        <Card type="1" number="0" />
        <Card type="2" number="0" />
        <Card type="3" number="0" />
        <Card type="0" number="0" />
      </div>
    );
  }
}

export default Player;
