import gameBase from '../src/index.js';
import randomizeNumber from '../util/randomNumber.js';
import nod from '../util/nod.js';

export default (input_value) => {
   
    const definition = 'Find the greatest common divisor of given numbers.';
    const expression = [];
    const correct_answer = [];

    for (let index = 0; index < 3; index += 1) {
        const num_first = randomizeNumber(1, 30);
        const num_two = randomizeNumber(1, 30);
        const answer = nod(num_first, num_two);
        expression.push(String(`${num_first} ${num_two}`));
        correct_answer.push(String(`${answer}`));
    }
    
    gameBase(definition, expression, correct_answer);
};
