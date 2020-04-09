import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Score
 */
const Score = ({ children }) => (
  <Typography align="right" color="secondary" variant="h3">
    {children}
  </Typography>
);

Score.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Score;
