import React from 'react';
import Nava from './componets.js/Nava'
import Evite from './componets.js/evite'
import Mus from './componets.js/mus'
import Sslider from './componets.js/Image'
import Chruchlocation from './componets.js/Chruchlocation'
import Bettrtimage from './componets.js/BetterIMage'
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
        <Router>
          <React.Fragment>
          <Mus/>
          <Evite />
          <Bettrtimage/>
          <Sslider/>
          <Chruchlocation/>
          
          </React.Fragment>
          
        </Router>
      
    </div>
  );
}

export default App;
