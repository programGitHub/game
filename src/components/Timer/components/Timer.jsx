import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Timer
 */
const Timer = ({ children }) => (
  <Typography align="center" color="secondary" variant="h6">
    {children}
  </Typography>
);

Timer.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Timer;
