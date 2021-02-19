import React from 'react';
import Nava from './componets.js/Nava'
import Evite from './componets.js/evite'
import Mus from './componets.js/mus'
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
        <Router>
          <React.Fragment>
          <Mus></Mus>
          <Evite />
          </React.Fragment>
        </Router>
      
    </div>
  );
}

export default App;
