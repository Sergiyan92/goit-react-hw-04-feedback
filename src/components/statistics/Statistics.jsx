import css from '../Viget.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <p className={css.subtitle}>Good: {good}</p>
      <p className={css.subtitle}>Neutral: {neutral}</p>
      <p className={css.subtitle}>Bad: {bad}</p>
      <p className={css.subtitle}>Total: {total}</p>
      <p className={css.subtitle}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
