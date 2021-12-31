import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <ul>
          <li>
            <button type="button">Good</button>
          </li>
          <li>
            <button type="button">Neutral</button>
          </li>
          <li>
            <button type="button">Bad</button>
          </li>
        </ul>
      </>
    );
  }
}
