import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Bord from './components/Bord';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <Profile />
      <Bord />
      <Player />
    </div>
  );
}

export default App;
