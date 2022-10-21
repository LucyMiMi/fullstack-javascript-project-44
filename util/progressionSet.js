import randomizeNumber from './randomNumber.js';

export default () => {
    const set_of_number = [];
    let number = 0;
    const step_progression = randomizeNumber(2,5);
    for (let i = 0; i < randomizeNumber(5,10); i += 1) {
        number += step_progression;
        set_of_number.push(number);
        }     

    return set_of_number;
};
