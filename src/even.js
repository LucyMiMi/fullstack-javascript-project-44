import readlineSync from 'readline-sync';

export default (input_value) => {
        const number_variant = (random_number, answer) => {  
            const even_correct = random_number % 2 === 0 && answer === 'yes';    
            const odd_correct =  random_number % 2 !== 0 && answer === 'no';    
            const correct = 'Correct!';
            const grats = `Congratulations, ${name}`;
            const incorrect_yes = '\'yes\'is wrong answer;(. Correct answer was \'no\'';
            const incorrect_no = '\'no\'is wrong answer;(. Correct answer was \'yes\'';
            const advice_to_try = 'Let\'s try again, Bill!';
            for (let i = 0; i < 3; i += 1) {     
                const even = even_correct ? correct : incorrect_no;
                const odd = odd_correct ? correct : incorrect_yes;
                if(incorrect_no || incorrect_yes) return advice_to_try;
                return grats;
            }
        }

    const random_number = Math.random(10);
    const space = ' ';
    const offer = 'Answer "yes" if the number is even, otherwise answer "no".';
    const name = readlineSync.question(`May I have your name?${space}`);
    console.log(`Hello, ${name} \n ${offer}`);
    

};