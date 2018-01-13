import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sapo from './Sapo.js';

// Data source
const app = {
  header: "Los Sapos",
  sapos: [{ 
    name: "Dave",
    hobbies: ["one", "two", "three"]
  }, 
  { 
    name: "Hector",
    hobbies: ["uno..", "dos....", "tres......."] 
  }]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{app.header}</h1>

        <p>Sapo details...</p>

          {
            app.sapos.map(function(sapo) {
              return <Sapo sapo={sapo} />
            })
          }


      </div>
    );
  }
}

export default App;
