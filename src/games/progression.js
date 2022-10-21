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
    const aProgression = progressionSet();
    const randomVal = aProgression[Math.floor(Math.random() * aProgression.length)];
    const valuePlace = String(randomVal);
    correctAnswer.push(`${valuePlace}`);
    const stringSetSpace = aProgression.join(' ').trim();
    const pSetPoints = stringSetSpace.replace(`${valuePlace}`, `${points}`);
    expression.push(`${pSetPoints}`);
  }
  return index(definition, expression, correctAnswer);
};
