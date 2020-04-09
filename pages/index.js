import Box from '@material-ui/core/Box';
import KeyBoard from 'src/components/KeyBoard';
import Question from 'src/components/Question';
import ResumeScreen from 'src/components/ResumeScreen';
import Score from 'src/components/Score';
import Timer from 'src/components/Timer';
import UserInputs from 'src/components/UserInputs';
import { useEffect, useState } from 'react';
import useInterval from 'src/hooks/useInterval';

const INTERVAL = 100;
const MAX = 50;

function makeSum(n) {
  const a = Math.floor(Math.random() * MAX);

  return {
    question: `Add ${a}`,
    value: n + a,
  };
}

function makeSub(n) {
  const a = Math.floor(Math.random() * n);

  return {
    question: `Substract ${a}`,
    value: n - a,
  };
}

function makeMul(n) {
  const a = Math.floor(Math.random() * MAX);

  return {
    question: `Multiply by ${a}`,
    value: n * a,
  };
}

function makeDiv(n) {
  const possibilities = [n];

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      possibilities.push(i);
    }
  }

  const j = Math.floor(Math.random() * possibilities.length);
  const a = possibilities[j];

  return {
    question: `Divide by ${a}`,
    value: n / a,
  };
}

function makeTodo(n = 1) {
  const op = n > 200 ? 1 : Math.floor(Math.random() * (n > MAX ? 3 : 4));

  switch (op) {
    case 0:
      return makeSum(n);
    case 1:
      return makeDiv(n);
    case 2:
      return makeSub(n);
    case 3:
    default:
      return makeMul(n);
  }
}

/**
 * Home
 */
const Home = () => {
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);
  const [todo, setTodo] = useState(makeTodo());
  const [time, setTime] = useState(10000);

  useEffect(() => {
    if (status) {
      setTime(10000);
      setTodo(makeTodo());
      setScore(0);
      setValue('');
    }
  }, [status]);

  useInterval(() => {
    setTime(time - INTERVAL);

    if (time <= INTERVAL) {
      setStatus(false);
    }
  }, 100);

  const handleInput = (n) => () => {
    const newValue = value.concat(n);

    setValue(value.concat(n));

    if (todo.value.toString().slice(0, newValue.length) !== newValue) {
      setStatus(false);
      return;
    }

    if (todo.value.toString() === newValue) {
      setValue('');
      setTime(time + 5000);
      setScore(score + 1);
      setTodo(makeTodo(+newValue));
    }
  };

  if (!status) {
    return (
      <ResumeScreen
        onClick={() => {
          setScore(0);
          setValue('');
          setStatus(true);
        }}
        score={score}
      />
    );
  }

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Question>{todo.question}</Question>
        <Score>{score}</Score>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
      >
        <UserInputs>{value}</UserInputs>
      </Box>
      <Timer>{time}</Timer>
      <KeyBoard onClick={handleInput} />
    </>
  );
};

export default Home;
