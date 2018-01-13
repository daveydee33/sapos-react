import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sapo from './Sapo.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.data.header}</h1>

        <p>Sapo details...</p>

          {
            this.props.data.sapos.map(function(sapo) {
              return <Sapo sapo={sapo} />
            })
          }


      </div>
    );
  }
}

export default App;
