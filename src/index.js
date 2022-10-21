import readlineSync from 'readline-sync';
    export default (definition, expression, correct_answer) => {
        const name = readlineSync.question(`May I have your name? `);
        console.log(`Hello, ${name}`);
        console.log(`${definition}`);
        const correct_answer_message = 'Correct!';
        const grats = `Congratulations, ${name}`;
        for (let round = 0; round < 3; round += 1) {
                const round_question = expression[round];
                console.log(`Question: ${round_question}`)
                const answer = readlineSync.question(`Your answer: `);
                if (answer !== correct_answer[round]) {
                    console.log(`'${answer}' is wrong $;(. Correct answer was '${correct_answer[round]}'`);
                    console.log(`Let's try again, ${name}`);
                    break;
                }
                console.log(`${correct_answer_message}`);
                if(round === 2) console.log(`${grats}`);
            }
};
