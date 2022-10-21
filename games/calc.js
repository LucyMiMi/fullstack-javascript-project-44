import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';
import random_operator from '../util/randomOperator.js';

export default (input_value) => {
    const definition = 'What is the result of the expression?';
    const expression = [];
    const correct_answer = [];
    
    for (let index = 0; index < 3; index += 1) {
        const num_first = randomNumber(1, 20);
        const num_two = randomNumber(1, 20);
        const operator = random_operator();
        if (operator === '+') {
           const answer =  num_first + num_two;
           expression.push(String(`${num_first} ${operator} ${num_two}`));
           correct_answer.push(String(answer));
        }
        if (operator === '-') {
            const answer =  num_first - num_two;
            expression.push(String(`${num_first} ${operator} ${num_two}`));
            correct_answer.push(String(answer));
        }
        if (operator === '*') {
            const answer =  num_first * num_two;
            expression.push(String(`${num_first} ${operator} ${num_two}`));
            correct_answer.push(String(answer));
         }
    }
    game_base(definition, expression, correct_answer);
};
