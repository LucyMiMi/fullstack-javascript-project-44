import progressionSet from '../util/progressionSet.js';
import gameBase from '../src/index.js';

export default (input_value) => {
    const definition = 'What number is missing in the progression?';
    const expression = [];
    const correct_answer = [];
    const points = '..';
    
    for (let index = 0; index < 3; index += 1) {
        let arithmetic_progression = progressionSet();
        const value_place = String(arithmetic_progression[Math.floor(Math.random() * arithmetic_progression.length)]);
        correct_answer.push(value_place);
        const string_set_space = arithmetic_progression.join(' ');
        const p_set_points = string_set_space.replace(`${value_place}`, `${points}`);
        expression.push(p_set_points);
    }
    
    gameBase(definition, expression, correct_answer);
};
