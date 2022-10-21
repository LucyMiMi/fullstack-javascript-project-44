import { index, randomizeNumber } from '../index.js';
export default () => {
    const progressionSet = () => {
        const set_of_number = [];
        let number = 0;
        const step_progression = randomizeNumber(2,10);
        for (let i = 0; i < randomizeNumber(10,15); i += 1) {
            number += step_progression;
            set_of_number.push(number);
            }
        return set_of_number;
    }
    const definition = 'What number is missing in the progression?';
    const expression = [];
    const correct_answer = [];
    const points = '..';
    for (let index = 0; index < 3; index += 1) {
        let arithmetic_progression = progressionSet();
        const value_place = String(arithmetic_progression[Math.floor(Math.random() * arithmetic_progression.length)]);
        correct_answer.push(`${value_place}`);
        const string_set_space = arithmetic_progression.join(' ').trim();
        const p_set_points = string_set_space.replace(`${value_place}`, `${points}`);
        expression.push(`${p_set_points}`);
    }
    return index(definition, expression, correct_answer);
};
