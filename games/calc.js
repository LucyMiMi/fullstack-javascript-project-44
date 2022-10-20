import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';
import random_operator from '../util/random_operator.js';

export default (input_value) => {
    const definition = 'What is the result of the expression?';
    const expression = [];
    const correct_answer = [];
    
    for(let i = 0; i < 3; i +=1) {
        let operator = random_operator;
        let num = randomNumber(1, 50);
        expression.push(num);
        let answer = num % 2 === 0 ? `${answer_yes}` : `${answer_no}`;
        correct_answer.push(answer);
    }

    game_base(definition, expression, correct_answer);
};