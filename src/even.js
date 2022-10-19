import readlineSync from 'readline-sync';

export default (input_value) => {
    const space = ' ';   
    const offer = 'Answer "yes" if the number is even, otherwise answer "no".';
    const correct = 'Correct!';            
    const incorrect_even_yes = '\'yes\'is wrong answer;(. Correct answer was \'no\'';
    const incorrect_even_no = '\'no\'is wrong answer;(. Correct answer was \'yes\'';
    
    const name = readlineSync.question(`May I have your name?${space}`);
    console.log(`Hello, ${name} \n ${offer}`);

    const grats = `Congratulations, ${name}`;
    const advice_to_try = `Let\'s try again, ${name}`;
    let count = 0;
    for (let i = 0; count < 3; i += 1) {
        let random_number = Math.floor(Math.random() * 11);
        const answer = readlineSync.question(`${random_number}\n`);
        if (random_number % 2 === 0 && answer === 'yes') {
            console.log(`${correct}`);
            count += 1;
        } else if (random_number % 2 === 0 && answer === 'no') {
            console.log(`${incorrect_even_no}\n ${advice_to_try}`);
            break;
        }
        if (random_number % 2 !== 0 && answer === 'no') {
            console.log(`${correct}`);
            count += 1;
        } else if (random_number % 2 !== 0 && answer === 'yes') {
            console.log(`${incorrect_even_yes}\n ${advice_to_try}`);
            break;
        }
        if(count === 3) console.log(grats);
    } 

};