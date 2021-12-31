import React, { Component } from 'react';

import Section from 'components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

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

        <Section title="Statistic">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
