import React from 'react';
import Evite from './componets.js/evite'
import Mus from './componets.js/mus'
import Chruchlocation from './componets.js/Chruchlocation'
import Bettrtimage from './componets.js/BetterIMage'
import './App.css';

function App() {
  return (
    <div className="App">
          <React.Fragment>
          <Mus/>
          <Evite />
          <Bettrtimage/>
          <Chruchlocation/>
          </React.Fragment>
    </div>
  );
}

export default App;
