import React from 'react';
import Nava from './componets.js/Nava'
import Evite from './componets.js/evite'
import Mus from './componets.js/mus'
import Sslider from './componets.js/Image'
import Chruchlocation from './componets.js/Chruchlocation'

import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
        <Router>
          <React.Fragment>
          <Mus/>
          <Evite />
          <Sslider/>
          <Chruchlocation/>
          
          </React.Fragment>
          
        </Router>
      
    </div>
  );
}

export default App;
