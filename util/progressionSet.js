import randomNumber from './randomNumber.js';

export default () => {
    const set_of_digits = [];
    let number = 0;
    const step_number = randomNumber(2,5);
    for (let i = 0; i < randomNumber(5,10); i += 1) {
        number += step_number;
        set_of_digits.push(number);
        }     

    return set_of_digits;
};
