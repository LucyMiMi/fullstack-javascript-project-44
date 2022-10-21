import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';
import is_prime from '../util/isPrime.js';

export default (input_value) => {   
    const definition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const answer_yes = 'yes';
    const answer_no = 'no';
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num = randomNumber(1, 50);
        expression.push(num);
        const answer = is_prime(num) ? `${answer_yes}` : `${answer_no}`;
        correct_answer.push(answer);
    }
    game_base(definition, expression, correct_answer);
};