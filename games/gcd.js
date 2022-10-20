import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';

export default (input_value) => {
    const nod = (num_first, num_two) => {
        if (num_two !== 0) {
          const num_temp = num_first % num_two;
          return nod(num_two, num_temp);
        }
        return num_first;
    }    
    const definition = 'Find the greatest common divisor of given numbers.';
    const expression = [];
    const correct_answer = [];

    for (let i = 0; i < 3; i += 1) {
        const num_first = randomNumber(1, 30);
        const num_two = randomNumber(1, 30);       
        const answer = nod(num_first, num_two);
        expression.push(String(`${num_first} ${num_two}`));
        correct_answer.push(String(`${answer}`));
    }
    
    game_base(definition, expression, correct_answer);    
};