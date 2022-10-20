import game_base from '../src/index.js';
import randomNumber from '../util/randomNumber.js';

export default () => {
    const offer = 'Answer "yes" if the number is even, otherwise answer "no".'; 
    const answer_yes = 'yes';   
    const answer_no = 'no';
       
    const expression = [];
    const correct_answer = [];
    for(let i = 0; i < 3; i +=1){
        let num = randomNumber(1, 50);
        expression.push(num);
        let answer = num % 2 === 0 ? `${answer_yes}` : `${answer_no}`;
        correct_answer.push(answer);
    }
    game_base(offer, expression, correct_answer);
};
