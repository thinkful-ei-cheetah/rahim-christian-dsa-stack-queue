'use strict';

const { Stack, peek, isEmpty, display, is_palindrome, matching} = require('./Stack');

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// console.log(display(starTrek));
// starTrek.pop();
// starTrek.pop();
// console.log(display(starTrek));

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

console.log(matching('(1+2)'))
console.log(matching('(1+2'))
console.log(matching('1+2)'))