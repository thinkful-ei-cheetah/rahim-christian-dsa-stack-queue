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
  if (stack.top !== null) {
    return stack.top.data;
  }
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
  let stack = new Stack();
  let result = ''

  for (let i = 0; i < (s.length)/2; i++) {
    stack.push(`${s[i]}`)
    result += s[i]
  }

  if (s.length % 2 !== 0) {
    stack.pop()
  }

  while (peek(stack)) {
    result += stack.pop()
  }

  if (result !== s) {
    return false;
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
    if (exp[i] === '(') {
      stack.push(exp[i])
    }

    if ((exp[i] === ')') && (stack.node !== null)) {
      stack.pop()
    }
  }

  if (stack.top === null) {
    return true
  }

  return false;

}

module.exports = {
  Stack, 
  peek, 
  isEmpty, 
  display,
  is_palindrome,
  matching,

};
