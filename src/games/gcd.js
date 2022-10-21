import { index, randomizeNumber } from '../index.js';
export default () => {
  const nod = (numOne, numTwo) => {
    if (numTwo !== 0) {
      const numTemp = numOne % numTwo;
      return nod(numTwo, numTemp);
    }
    return numOne;
  };
  const definition = 'Find the greatest common divisor of given numbers.';
  const expression = [];
  const correctAnswer = [];
  for (let index = 0; index < 3; index += 1) {
    const numFirst = randomizeNumber(1, 30);
    const numTwo = randomizeNumber(1, 30);
    const answer = nod(numFirst, numTwo);
    expression.push(`${numFirst} ${numTwo}`);
    correctAnswer.push(String(`${answer}`));
  }
  return index(definition, expression, correctAnswer);
};
