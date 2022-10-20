import readlineSync from 'readline-sync';
    
    export default (definition, expression, correct_answer) => {       
        const name = readlineSync.question(`May I have your name? `);
        console.log(`Hello, ${name} \n ${definition}`);

        const correct_answer_message = 'Correct!';
        const grats = `Congratulations,  ${name}`;

        for (let round = 0; round < 3; round += 1) {                
                const answer = readlineSync.question(`Question: ${expression[round]}\nYour answer: `);              //console.log(round_max);
                if (answer !== correct_answer[round]) {
                    console.log(`'${answer}' is wrong $;(. Correct answer was '${correct_answer[round]}' \n Let's try again, ${name}`);
                    break;         
                }
                console.log(`${correct_answer_message}`);
                if(round === 2) console.log(`${grats}`);
            }            
};
