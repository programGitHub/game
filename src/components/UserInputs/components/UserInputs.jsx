import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * UserInputs
 */
const UserInputs = ({ children }) => (
  <Typography
    align="center"
    color={children.length ? 'textPrimary' : 'textSecondary'}
    gutterBottom
    variant="h3"
  >
    {children.length ? children : 'Enter your result'}
  </Typography>
);

UserInputs.defaultProps = {
  children: '',
};

UserInputs.propTypes = {
  children: PropTypes.string,
};

export default UserInputs;
