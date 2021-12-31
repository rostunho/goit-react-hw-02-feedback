import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = btn => {
    this.setState(prevState => ({ [btn]: prevState[btn] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalCount = this.countTotalFeedback();
    const positiveCount = (this.state.good * 100) / totalCount;
    return positiveCount ? Math.round(positiveCount) : 0;
  };

  render() {
    const feedbackBtns = Object.keys(this.state);

    return (
      <>
        <h2>Please leave feedback</h2>
        <ul>
          {feedbackBtns.map(btn => {
            return (
              <li key={btn}>
                <button type="button" onClick={() => this.addFeedback(btn)}>
                  {btn}
                </button>
              </li>
            );
          })}
        </ul>

        <h3>Statistic</h3>
        <ul>
          <li>Good: {this.state.good} </li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {`${this.countTotalFeedback()} %`} </li>
          <li>
            Positive feedback: {`${this.countPositiveFeedbackPercentage()} %`}
          </li>
        </ul>
      </>
    );
  }
}
