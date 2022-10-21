import readlineSync from 'readline-sync';
    const randomizeNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
    const index = (definition, expression, correctAnswer) => {
        const name = readlineSync.question(`Welcome to the Brain Games!\nMay I have your name? `);
        console.log(`Hello, ${name}!`);
        console.log(`${definition}`);
        const correctAnswerMessage = 'Correct!';
        const grats = `Congratulations, ${name}!`;
        for (let round = 0; round < 3; round += 1) {
            console.log(`Question: ${expression[round]}`);
                const answer = readlineSync.question(`Your answer: `);
                if (answer !== correctAnswer[round]) {
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer[round]}'.\nLet\'s try again, ${name}!`);
                    break;
                }
                console.log(`${correctAnswerMessage}`);
                if(round === 2) console.log(`${grats}`);
            }
};
export {index, randomizeNumber};