import { index, randomizeNumber } from '../index.js';
export default () => {
    const randomizeOperator = () => {
        const operator_col = ['+', '-', '*'];
        let randomize_operator = Math.floor(Math.random() * operator_col.length)
        return operator_col[randomize_operator];
    }
    const definition = 'What is the result of the expression?';
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num_first = randomizeNumber(1, 20);
        const num_two = randomizeNumber(1, 20);
        const operator = randomizeOperator();
        let answer = 0;
        if (operator === '+') answer =  num_first + num_two; 
        else if (operator === '-') answer =  num_first - num_two;
        else if (operator === '*') answer =  num_first * num_two;
        expression.push(`${num_first} ${operator} ${num_two}`);
        correct_answer.push(String(answer));    
    }
    return index(definition, expression, correct_answer);
};
