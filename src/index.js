import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Data source
const data = {
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

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
