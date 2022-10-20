import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';
import random_operator from '../util/randomOperator.js';

export default (input_value) => {
    const definition = 'What is the result of the expression?';
    const expression = [];
    const correct_answer = [];
    let answer = 0;
    
    for (let i = 0; i < 3; i +=1) {
        let num_first = randomNumber(1, 30);
        let num_two = randomNumber(1, 30);
        let operator = random_operator();
        if (operator === '+') {
           answer =  num_first + num_two;
           const string_expression = `${num_first} ${operator} ${num_two}`
           expression.push(string_expression);
           correct_answer.push(String(answer));
        }
        if (operator === '-') {
            answer =  num_first - num_two;
            const string_expression = `${num_first} ${operator} ${num_two}`
            expression.push(string_expression);
            correct_answer.push(String(answer));
        }
        if (operator === '*') {
            answer =  num_first * num_two;
            const string_expression = `${num_first} ${operator} ${num_two}`
            expression.push(string_expression);
            correct_answer.push(String(answer));
         }      
    }
    game_base(definition, expression, correct_answer);
};
