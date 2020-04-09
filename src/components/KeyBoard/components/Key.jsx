import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    minHeight: 48,
    padding: theme.spacing(1),
    width: '100%',
  },
}));

/**
 * Key
 */
const Key = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <Box
      bgcolor="primary.main"
      borderRadius={4}
      color="rgba(255, 255, 255, 0.9)"
    >
      <ButtonBase className={classes.root} onClick={onClick}>
        <Typography color="inherit" variant="h4">
          {children}
        </Typography>
      </ButtonBase>
    </Box>
  );
};

Key.propTypes = {
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Key;
