import { index, randomizeNumber } from "../index.js";
export default () => {
  const randomizeOperator = () => {
    const operatorСol = ["+", "-", "*"];
    let randomizeOperator = Math.floor(Math.random() * operatorСol.length);
    return operatorСol[randomizeOperator];
  };
  const definition = "What is the result of the expression?";
  const expression = [];
  const correctAnswer = [];
  for (let index = 0; index < 3; index += 1) {
    const numFirst = randomizeNumber(1, 20);
    const numTwo = randomizeNumber(1, 20);
    const operator = randomizeOperator();
    let answer = 0;
    if (operator === "+") answer = numFirst + numTwo;
    else if (operator === "-") answer = numFirst - numTwo;
    else if (operator === "*") answer = numFirst * numTwo;
    expression.push(`${numFirst} ${operator} ${numTwo}`);
    correct_answer.push(String(answer));
  }
  return index(definition, expression, correctAnswer);
};
