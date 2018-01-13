import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sapo from './Sapo.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.header}</h1>

        <p>Sapo details...</p>

        {
          this.props.sapos.map(function(sapo) {
            return <Sapo key={sapo.name} sapo={sapo} />
          })
        }


      </div>
    );
  }
}

export default App;
