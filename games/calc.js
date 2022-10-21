import gameBase from '../src/index.js';
import randomizeNumber from '../util/randomNumber.js';
import randomizeOperator from '../util/randomOperator.js';
export default (input_value) => {
    const definition = 'What is the result of the expression?';
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num_first = randomizeNumber(1, 20);
        const num_two = randomizeNumber(1, 20);
        const operator = randomizeOperator();
        let answer = 0;
        if (operator === '+') answer =  num_first + num_two; 
        if (operator === '-') answer =  num_first - num_two;
        if (operator === '*') answer =  num_first * num_two;
        expression.push(`${num_first} ${operator} ${num_two}`);
        correct_answer.push(String(answer));    
    }
    return gameBase(definition, expression, correct_answer);
};
