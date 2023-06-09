import css from '../Viget.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={css.subtitle}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
