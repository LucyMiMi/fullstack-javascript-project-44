import readlineSync from 'readline-sync';
import games from 'index.js';
import randomNumber from 'randomNumber.js';
import random_operator from 'randomOperator.js';

export default (input_value) => {
    const space = ' ';   
    const offer = 'What is the result of the expression?';
    const correct = 'Correct!';            
    
    const name = readlineSync.question(`May I have your name?${space}`);
    console.log(`Hello, ${name} \n ${offer}`);

    const grats = `Congratulations, ${name}`;
    const advice_to_try = `Let's try again, ${name}`;
    let count = 0;


    

    for (let i = 0; count < 3; i += 1) {
        let rand_num_one = Math.floor(Math.random() * 30);
        let rand_num_two = Math.floor(Math.random() * 11);

        let sum = toString(rand_num_one + rand_num_two);
        let deduction = toString(rand_num_one - rand_num_two);
        let multi = toString(rand_num_one * rand_num_two);

        const answer_sum = readlineSync.question(`Question: ${rand_num_one} + ${rand_num_two}`);
        console.log(`Your answer: ${answer_sum} \n ${offer}`);
        if (answer_sum !== sum) {}


        const answer = readlineSync.question(`${random_number}\n`);
        const incorrect_even_yes = `'${answer}' is wrong $;(. Correct answer was 'no'`;
        const incorrect_even_no = `'${answer}' is wrong answer;(. Correct answer was 'yes'`;
        if (random_number % 2 === 0 && answer === 'yes') {
            console.log(`${correct}`);
            count += 1;
        } else if (random_number % 2 === 0 && answer !== 'yes') {
            console.log(`${incorrect_even_no}\n ${advice_to_try}`);
            break;
        }
        if (random_number % 2 !== 0 && answer === 'no') {
            console.log(`${correct}`);
            count += 1;
        } else if (random_number % 2 !== 0 && answer !== 'no') {
            console.log(`${incorrect_even_yes}\n ${advice_to_try}`);
            break;
        }

        if(count === 3) console.log(grats);
    } 

};