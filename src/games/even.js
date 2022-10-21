import { index, randomizeNumber } from '../index.js';
export default () => {
    const definition = 'Answer "yes" if the number is even, otherwise answer "no".';
    const answer_yes = 'yes';
    const answer_no = 'no';      
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num = randomizeNumber(1, 50);
        expression.push(num);
        const answer = num % 2 === 0 ? `${answer_yes}` : `${answer_no}`;
        correct_answer.push(answer);
    }
    return index(definition, expression, correct_answer);
};
