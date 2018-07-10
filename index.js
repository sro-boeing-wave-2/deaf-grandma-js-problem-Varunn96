/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

print('What do you want to say to Grandma!!');
let truth = true;
let count = 0;
while (truth) {
  const input = prompt();
  if (isUppercase(input)) {
    print('NO, NOT SINCE 19'.concat(getRandomValue(30, 50)));
    if (input === 'BYE') {
      count += 1;
      if (count > 1) {
        truth = false;
      }
    }
  } else {
    count = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
}
/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
