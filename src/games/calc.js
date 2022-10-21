import { index, randomizeNumber } from '../index.js';

export default () => {
  const randomizeOperator = () => {
    const operatorСol = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * operatorСol.length);
    return operatorСol[randomOperator];
  };
  const definition = 'What is the result of the expression?';
  const expression = [];
  const correctAnswer = [];
  for (let ind = 0; ind < 3; ind += 1) {
    const numFirst = randomizeNumber(1, 20);
    const numTwo = randomizeNumber(1, 20);
    const operator = randomizeOperator();
    let answer = 0;
    if (operator === '+') answer = numFirst + numTwo;
    else if (operator === '-') answer = numFirst - numTwo;
    else if (operator === '*') answer = numFirst * numTwo;
    expression.push(`${numFirst} ${operator} ${numTwo}`);
    correctAnswer.push(String(answer));
  }
  return index(definition, expression, correctAnswer);
};
