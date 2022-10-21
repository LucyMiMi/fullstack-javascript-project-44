import { index, randomizeNumber } from "../index.js";
export default () => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const definition =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  const answerYes = "yes";
  const answerNo = "no";
  const expression = [];
  const correctAnswer = [];
  for (let index = 0; index < 3; index += 1) {
    const num = randomizeNumber(1, 50);
    expression.push(num);
    const answer = isPrime(num) ? `${answerYes}` : `${answerNo}`;
    correctAnswer.push(answer);
  }
  return index(definition, expression, correctAnswer);
};
