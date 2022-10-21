import { index, randomizeNumber } from '../index.js';

export default () => {
  const progressionSet = () => {
    const setOfNumber = [];
    let number = 0;
    const stepProgression = randomizeNumber(2, 10);
    for (let i = 0; i < randomizeNumber(10, 15); i += 1) {
      number += stepProgression;
      setOfNumber.push(number);
    }
    return setOfNumber;
  };
  const definition = 'What number is missing in the progression?';
  const expression = [];
  const correctAnswer = [];
  const points = '..';
  for (let ind = 0; ind < 3; ind += 1) {
    const arithmeticProgression = progressionSet();
    const valuePlace = String(arithmeticProgression[Math.floor(Math.random() * arithmeticProgression.length)]);
    correctAnswer.push(`${valuePlace}`);
    const stringSetSpace = arithmeticProgression.join(" ").trim();
    const pSetPoints = stringSetSpace.replace(`${valuePlace}`,`${points}`);
    expression.push(`${pSetPoints}`);
  }
  return index(definition, expression, correctAnswer);
};
