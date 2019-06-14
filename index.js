'use strict';

const { Stack, peek, isEmpty, display } = require('./Stack');

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
console.log(display(starTrek));
starTrek.pop();
starTrek.pop();
console.log(display(starTrek));
