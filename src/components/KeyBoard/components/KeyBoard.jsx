import Grid from '@material-ui/core/Grid';
import Key from './Key';
import PropTypes from 'prop-types';

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/**
 * KeyBoard
 */
const KeyBoard = ({ onClick }) => (
  <Grid justify="center" container spacing={1}>
    {keys.map((n) => (
      <Grid item key={n} xs={4}>
        <Key onClick={onClick(n)}>{n}</Key>
      </Grid>
    ))}
  </Grid>
);

KeyBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KeyBoard;
