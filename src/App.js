import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const feedbackButtons = Object.keys(this.state);

    return (
      <>
        <h2>Please leave feedback</h2>
        <ul>
          {feedbackButtons.map(btn => {
            return (
              <li key={btn}>
                <button type="button">{btn}</button>
              </li>
            );
          })}
        </ul>

        <h3>Statistic</h3>
        <ul>
          <li>Good: {this.state.good} </li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: </li>
          <li>Positive feedback: </li>
        </ul>
      </>
    );
  }
}
