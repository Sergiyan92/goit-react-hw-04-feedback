import css from '../Viget.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
