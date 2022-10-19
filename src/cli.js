import readlineSync from 'readline-sync';

export default (input_name) => {
    const space = ' ';
    const name = readlineSync.question(`May I have your name?${space}`);
    console.log(`Hello, ${name}`);
};

