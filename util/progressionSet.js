import randomizeNumber from './randomNumber.js';
export default () => {
    const set_of_number = [];
    let number = 0;
    const step_progression = randomizeNumber(2,10);
    for (let i = 0; i < randomizeNumber(10,15); i += 1) {
        number += step_progression;
        set_of_number.push(number);
        }
    return set_of_number;
};
