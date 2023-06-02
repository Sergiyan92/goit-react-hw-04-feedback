import { Statistics } from './Viget';
import { FeedbackOptions } from './Viget';
import { Section } from './Viget';
import { Notification } from './Viget';
import css from './Viget.module.css';
import { useState } from 'react';
export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = category => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [category]: prevFeedback[category] + 1,
    }));
  };

  const TotalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const PositiveFeedbackPercentage =
    TotalFeedback > 0 ? Math.round((feedback.good / TotalFeedback) * 100) : 0;
  const options = Object.keys(feedback);
  const hasFeedback = TotalFeedback > 0;

  return (
    <div className={css.feedback}>
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            className={css.list}
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={TotalFeedback}
            positivePercentage={PositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
