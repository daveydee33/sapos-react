import React, { Component } from 'react';
// import logo from './logo.svg';
import './Sapo.css';

class Sapo extends Component {
  render() {
    return (
      <div className="card">
        <h3>
          Name:  {this.props.sapo.name}
        </h3>

        Hobbies:
        <ol>
          {this.props.sapo.hobbies.map(function (item) {
            console.log(item);
            return <li key={item}>{item}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default Sapo;
