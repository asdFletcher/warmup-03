'use strict';

const Stack = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js').Stack;

// console.log(Stack);

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

function popAndPrint(stack){
  while (stack.top){
    console.log(stack.pop());    
  }
}

popAndPrint(myStack);