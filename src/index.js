import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Data source
const header = 'Los Sapos';
const sapos = [
  { 
    name: "Dave",
    hobbies: ["one", "two", "three"]
  }, 
  { 
    name: "Hector",
    hobbies: ["uno..", "dos....", "tres......."] 
  }
];


ReactDOM.render(<App header={header} sapos={sapos} />, document.getElementById('root'));
registerServiceWorker();
