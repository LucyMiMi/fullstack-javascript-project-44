import gameBase from '../src/index.js';
import randomizeNumber from '../util/randomNumber.js';
import isPrime from '../util/isPrime.js';
export default (input_value) => {
    const definition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    const answer_yes = 'yes';
    const answer_no = 'no';
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num = randomizeNumber(1, 50);
        expression.push(num);
        const answer = isPrime(num) ? `${answer_yes}` : `${answer_no}`;
        correct_answer.push(answer);
    }
    gameBase(definition, expression, correct_answer);
};
