import { index, randomizeNumber } from "../index.js";
export default () => {
  const randomizeOperator = () => {
    const operatorСol = ["+", "-", "*"];
    let randomizeOperator = Math.floor(Math.random() * operator_col.length);
    return operatorCol[randomizeOperator];
  };
  const definition = "What is the result of the expression?";
  const expression = [];
  const correct_answer = [];
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
  return index(definition, expression, correct_answer);
};
