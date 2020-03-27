import readlineSync from 'readline-sync';

const greeting = () => {

const userName = readlineSync.question('May I have you name? ');
console.log(`Hello, ${userName}!`);
};

export default greeting;
