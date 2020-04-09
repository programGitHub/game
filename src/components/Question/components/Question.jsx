import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

/**
 * Question
 */
const Question = ({ children }) => (
  <Typography variant="h4">{children}</Typography>
);

Question.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Question;
