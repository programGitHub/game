import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * ResumeScreen
 */
const ResumeScreen = ({ onClick, score }) => (
  <Box
    alignItems="center"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    height="100%"
  >
    <Typography align="center" gutterBottom variant="h1">
      {score}
    </Typography>
    <Button
      color="primary"
      disableElevation
      onClick={onClick}
      variant="contained"
    >
      Play
    </Button>
  </Box>
);

ResumeScreen.propTypes = {
  onClick: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default ResumeScreen;
