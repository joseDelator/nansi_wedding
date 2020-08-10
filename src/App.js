import React from 'react';
import Nava from './componets.js/Nava'
import Evite from './componets.js/evite'
import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Nava />
          <Evite />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
