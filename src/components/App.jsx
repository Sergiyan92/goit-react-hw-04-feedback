import React, { Component } from 'react';
import { Statistics } from './Viget';
import { FeedbackOptions } from './Viget';
import { Section } from './Viget';
import { Notification } from './Viget';
import css from './Viget.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = category => {
    this.setState(prevState => ({
      [category]: prevState[category] + 1,
    }));
  };

  TotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  PositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.TotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const hasFeedback = this.TotalFeedback() > 0;

    return (
      <div className={css.feedback}>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              className={css.list}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.TotalFeedback()}
              positivePercentage={this.PositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
