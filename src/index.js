import readlineSync from 'readline-sync';
    const randomizeNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    const index = (definition, expression, correct_answer) => {
        const name = readlineSync.question(`Welcome to the Brain Games!\nMay I have your name? `);
        console.log(`Hello, ${name}!`);
        console.log(`${definition}`);
        const correct_answer_message = 'Correct!';
        const grats = `Congratulations, ${name}!`;
        for (let round = 0; round < 3; round += 1) {
                const answer = readlineSync.question(`${expression[round]}\nYour answer: `);
                if (answer !== correct_answer[round]) {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct_answer[round]}'.\nLet\'s try again, ${name}!`);
                    break;
                }
                console.log(`${correct_answer_message}`);
                if(round === 2) console.log(`${grats}`);
            }
};
export {index, randomizeNumber};