import React, { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Section from 'components/Section/Section.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from 'components/Notification/Notification.jsx';

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
    const feedbacks = this.countTotalFeedback();
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        {feedbacks ? (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbacks}
              positivePercentage={positiveFeedbacks}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
