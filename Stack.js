'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let currentNode = stack.top;
  let string = '';
  while (currentNode !== null) {
    string += currentNode.data;
    if (currentNode.next !== null) string += '->';
    currentNode = currentNode.next;
  }
  return string;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    stack.push(`${s[i]}`)
  }

  let currentNode = stack.top;
  let reversedString = ''

  while (currentNode !== null) {
    reversedString += currentNode.data;
    currentNode = currentNode.next;
  }

  if (reversedString !== s) {
    return false
  }

  return true;
}

// input: (1 + 2)
// stack )2 + 1(
// output: true
// input: (1 + 2
// stack 2 + 1 (
// output: false 

// ( ++
// ) ++ 

function matching(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    stack.push(`${exp[i]}`)
  }

  let currentNode = stack.top;
  let openCount = 0;
  let closedCount = 0;

  while (currentNode != null) {
    if (currentNode.data === ')') {
      closedCount++
    }

    if (currentNode.data === '(') {
      openCount++
    }

    currentNode = currentNode.next
  }

  if (openCount === closedCount) {
    return true;
  } 

  else if (openCount > closedCount) {
    return 'you are missing a )'
  }

  else if (closedCount > openCount) {
    return 'you are missing a ('
  }

}

module.exports = {
  Stack, 
  peek, 
  isEmpty, 
  display,
  is_palindrome,
  matching,

};
