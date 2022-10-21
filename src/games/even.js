import { index, randomizeNumber } from "../index.js";
export default () => {
  const definition =
    'Answer "yes" if the number is even, otherwise answer "no".';
  const answerYes = "yes";
  const answerNo = "no";
  const expression = [];
  const correctAnswer = [];
  for (let index = 0; index < 3; index += 1) {
    const num = randomizeNumber(1, 50);
    expression.push(num);
    const answer = num % 2 === 0 ? `${answerYes}` : `${answerNo}`;
    correctAnswer.push(answer);
  }
  return index(definition, expression, correctAnswer);
};
